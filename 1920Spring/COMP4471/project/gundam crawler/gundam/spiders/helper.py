"""
    To make sure the url start from '/'

    :param url: url to be process
    :type url: str

    :return url 
"""
def process(url):
    if url[:2] == '..':
        return '/' + url
    if url[:2] == './':
        return url[1:]
    if url[0] != '/':
        return '/' + url
    else:
        return url