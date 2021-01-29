import os
import time
import urllib.request
from pathlib import Path
from gundam.spiders.helper import process
import scrapy

class MahqSpider(scrapy.Spider):
    name = "mahq"
    start_urls = ["https://www.mahq.net/mecha/gundam/index.htm"]

    # library variable
    output_path = os.path.dirname(os.path.realpath('__file__'))
    output_path = os.path.join(output_path, 'output/' + name)
    opener = urllib.request.URLopener()
    opener.addheader('User-Agent', 'whatever')

    # helper variable
    count_gundam = 0    # for ref. only, some of the gundam may be parsed for multiple times
    count_images = 0
    early_stop = 20

    isDebug = True


    def parse(self, response):
        all_links = response.xpath("//p[contains(@class, 'mahqbody')]/a")#.getall()
        # animate_links = response.xpath("/html/body/center/table/tbody/tr[4]/td[2]/table/tbody/tr[1]/td[2]/table[1]/tbody/tr[2]/td/p/a/@href").getall()
        # variations_links = response.xpath("/html/body/center/table/tbody/tr[4]/td[2]/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[2]/td/p/a/@href").getall()
        # manga_links = response.xpath("/html/body/center/table/tbody/tr[4]/td[2]/table/tbody/tr[1]/td[2]/table[3]/tbody/tr[2]/td/p/a/@href").getall()
        # game_links = response.xpath("/html/body/center/table/tbody/tr[4]/td[2]/table/tbody/tr[1]/td[2]/table[4]/tbody/tr[2]/td/p/a/@href").getall()

        filename = os.path.join(self.output_path, 'text/series.txt')
        if self.isDebug:
            with open(filename, 'w') as file:
                file.write(str(len(all_links)) + '\n')
                file.close()

        for link in all_links:
            title = link.css('*::text').get(default='')
            title = " ".join(title.split())     # removing dulplicated space between words

            href = link.attrib['href']
            url = process(href)
            url = "https://www.mahq.net/mecha/gundam" + url

            if title == '':
                continue

            if self.isDebug:
                args = (title, url)
                with open(filename, 'a') as file:
                    file.write('%s: %s\n' % args)
                    file.close()

            yield response.follow(url, self.parseSeries)

    def parseSeries(self, response):
        all_links = response.xpath("//p[contains(@class, 'mahqbody')]/a[preceding-sibling::strong][following-sibling::strong]")
        title = response.xpath("//span[contains(@class, 'mahqtitle')]/strong/u").css("*::text").get()
        title = response.request.url.split('/')[-1][:-4] if title == None else title.replace('/', '_')

        filename = os.path.join(self.output_path, f'text/{title}.txt')
        count = len(all_links)

        if self.isDebug:
            with open(filename, 'w') as file:
                file.write(str(count) + '\n')
                file.close()

        for link in all_links:
            self.count_gundam += 1
            title = link.css('*::text').get(default='')
            title = " ".join(title.split())

            href = link.attrib['href']
            url = process(href)
            url = '/'.join(response.request.url.split('/')[:-1]) + url

            if title == '':
                continue

            if self.isDebug:
                args = (title, url)
                with open(filename, 'a') as file:
                    file.write('%s: %s\n' % args)
                    file.close()

            # yield response.follow(url, self.parseImage)

    def parseImage(self, response):
        if self.early_stop != -1 and self.count_images > self.early_stop:
            raise scrapy.exceptions.CloseSpider('images_exceeded')

        links = response.xpath('//input[contains(@type, "radio")]/@value').getall()
        title = response.xpath("//span[contains(@class, 'mahqtitle')]/strong/u").css("*::text").get()
        title = title.replace('/', '_')

        path = '/'.join(response.request.url.split('/')[:-1])
        filename = os.path.join(self.output_path, 'text/image.txt')
        count = len(links)
        self.count_images += count

        if self.isDebug:
            with open(filename, 'a') as file:
                file.write(str(len(links)) + '\n')
                file.close()

        for link in links:
            url = process(link)
            
            if self.isDebug:
                with open(filename, 'a') as file:
                    file.write(path + url + '\n')
                    file.close()
            
            folder = os.path.join(self.output_path, title + '/')
            Path(folder).mkdir(parents=True, exist_ok=True)
            file = os.path.join(folder, str(round(time.time() * 1000)) + '.jpg')
            self.opener.retrieve(path+url, file)

            yield {
                'count_image': self.count_images, 
                'series': response.request.url.split('/')[-2],
                'url': path + url
                }
