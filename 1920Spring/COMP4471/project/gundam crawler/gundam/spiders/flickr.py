# -*- coding: utf-8 -*-
import scrapy
from scrapy_splash import SplashRequest
import cssutils
from ..items import GundamItem
from gundam.spiders.splash_helper import getScript

import os
import time
import urllib.request
from pathlib import Path
from functools import reduce


class PinterestSpider(scrapy.Spider):
    name = 'flickr'
    start_urls = []

    # library variable
    output_path = os.path.dirname(os.path.realpath('__file__'))
    output_path = os.path.join(output_path, 'output/' + name)
    opener = urllib.request.URLopener()
    opener.addheader('User-Agent', 'whatever')

    # helper variable
    count_gundam = 0    # for ref. only, some of the gundam may be parsed for multiple times
    count_images = 0
    early_stop = -1     # -1 to disable

    isDebug = True

    def start_requests(self):
        # root_url = 'https://pinterest.com/search/pins/?q='
        root_url = 'https://www.flickr.com/search/?text={}&view_all=1'
        with open('namelist.txt', 'r') as names:
            for name in names:
                title = name[:-1]
                name.replace(' ', '%20')
                yield SplashRequest(root_url.format(name), 
                                    self.parse,  
                                    args={'wait': 3},
                                    meta={'title': title})

    def parse(self, response):
        # early stopping
        if self.early_stop != -1 and self.count_images > self.early_stop:
            raise scrapy.exceptions.CloseSpider('images_exceeded')

        item = GundamItem()
        title = response.meta.get('title')
        fails = []

        isEmpty = len(response.xpath("//div[contains(@class, 'no-results-message')]")) > 0
        if isEmpty:
            name = response.url[36:].replace('%20', ' ')
            if reduce(lambda a, b: name in a or name in b, fails, False):
                item['fail'] = title
                yield item

            fails.append(name)
            root_url = 'https://www.flickr.com/search/?text={}&view_all=1'
            name = '%20'.join(name.split(' ')[1:])
            yield SplashRequest(root_url.format(name), 
                                self.parse, 
                                args={'wait': 3},
                                meta={'title': title})

        styles = response.xpath("//div[@class='view photo-list-photo-view awake']/@style").extract()
        for style in styles:
            url = cssutils.parseStyle(style)['background-image'][4:-1]
            item['name'] = title
            item['src'] = url

            folder = os.path.join(self.output_path, title + '/')
            Path(folder).mkdir(parents=True, exist_ok=True)
            file = os.path.join(folder, str(round(time.time() * 1000)) + '.' + url.split('.')[-1])
            self.opener.retrieve(url, file)
            self.count_images += 1

            yield item

