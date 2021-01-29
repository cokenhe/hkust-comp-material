def getScript():
    return """
        function main(splash)
                local num_scrolls = 10
                local scroll_delay = 1

                local scroll_to = splash:jsfunc("window.scrollTo")
                local get_body_height = splash:jsfunc(
                    "function() {return document.body.scrollHeight;}"
                )
                assert(splash:go(splash.args.url))
                splash:wait(splash.args.wait)

                for _ = 1, num_scrolls do
                    local height = get_body_height()
                    for i = 1, 10 do
                        scroll_to(0, height * i/10)
                        splash:wait(scroll_delay/10)
                    end
                end        
                return splash:html()
        end
        """