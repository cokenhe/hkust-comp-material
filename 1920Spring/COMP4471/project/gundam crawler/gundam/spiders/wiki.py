import os
import time
from pathlib import Path
from gundam.spiders.helper import process
import urllib.request
import scrapy

class WikiSpider(scrapy.Spider):
    name = 'wiki'
    start_urls = [
        'https://gundam.fandom.com/wiki/Concept:Mobile_Weapons_-_Universal_Century_Mobile_Weapons?limit=500&offset=0',
        'https://gundam.fandom.com/wiki/Concept:Mobile_Weapons_-_Future_Century_Mobile_Weapons?limit=500&offset=0',
        'https://gundam.fandom.com/wiki/Concept:Mobile_Weapons_-_After_Colony_Mobile_Weapons?limit=500&offset=0',
        'https://gundam.fandom.com/wiki/Concept:Mobile_Weapons_-_After_War_Mobile_Weapons?limit=500&offset=0',
        'https://gundam.fandom.com/wiki/Concept:Mobile_Weapons_-_Correct_Century_Mobile_Weapons?limit=500&offset=0',
        'https://gundam.fandom.com/wiki/Concept:Mobile_Weapons_-_Cosmic_Era_Mobile_Weapons?limit=500&offset=0',
        'https://gundam.fandom.com/wiki/Concept:Mobile_Weapons_-_Anno_Domini_Mobile_Weapons?limit=500&offset=0'
    ]

    output_path = os.path.dirname(os.path.realpath('__file__'))
    output_path = os.path.join(output_path, 'output/' + name)
    opener = urllib.request.URLopener()
    opener.addheader('User-Agent', 'whatever')

    # helper variable
    count_gundam = 0    # for ref. only, some of the gundam may be parsed for multiple times
    count_images = 0
    early_stop = 20


    isDebug = False

    def parse(self, response):
        all_links = response.xpath("//div[contains(@class, 'smw-column-responsive')]/ul/li/a")

        filename = os.path.join(self.output_path, 'text/gundam_list.txt')
        if self.isDebug:
            with open(filename, 'w') as file:
                file.write(str(len(all_links)) + '\n')
                file.close()

        for link in all_links:
            title = link.css('*::text').get(default='')
            href = link.attrib['href']
            
            url = "https://gundam.fandom.com" + process(href)

            if title == '':
                continue

            if self.isDebug:
                args = (title, url)
                with open(filename, 'a') as file:
                    file.write('%s: %s\n' % args)
                    file.close()

            yield response.follow(url, self.parseImage)


    def parseImage(self, response):
        if self.early_stop != -1 and self.count_images > self.early_stop:
            raise scrapy.exceptions.CloseSpider('images_exceeded')

        links = response.xpath("//img[contains(@class, 'thumbimage')][not(contains(@src, 'base64'))]/@src").getall()
        title = response.xpath("//h1[contains(@class, 'page-header__title')]").css("*::text").get()
        title = title.replace('/', '_')

        filename = os.path.join(self.output_path, 'text/image.txt')
        count = len(links)

        if self.isDebug:
            with open(filename, 'a') as file:
                file.write(str(len(links)) + '\n')
                file.close()

        for link in links:
            self.count_images += 1
            url = link.split('/revision')[0]
            
            if self.isDebug:
                with open(filename, 'a') as file:
                    file.write(url + '\n')
                    file.close()
            
            folder = os.path.join(self.output_path, title + '/')
            Path(folder).mkdir(parents=True, exist_ok=True)
            file = os.path.join(folder, str(round(time.time() * 1000)) + '.jpg')
            self.opener.retrieve(url, file)

            yield {
                'count_image': self.count_images, 
                'name': response.request.url.split('/')[-1],
                'url': url
                }