# site base - www.quotes.toscrape.com

# lib para fazer requisições
import requests  # python3 -m pip install requests 
# lib para garimpar o DOM
import parsel # python3 -m pip install parsel

# função de leitura da url
def fetch_content(url, timeout=1):  # timeout é para esperar só 1s pela req
    try:
        response = requests.get(url, timeout=timeout)  # chama a url e o timeout é para tratar
        response.raise_for_status()  # também pego o status de ERRO http
    except (requests.HTTPError, requests.ReadTimeout): # tipos de erro no status
        return "" # erro de status
    else:  # erro de readtimeout
        return response.text

# testando a função
# test_fetch = fetch_content('www.quotes.toscrape.com', 5)
# print(test_fetch)

# vou extrair a dados do card
def extract_quotes(text):
    selector = parsel.Selector(text)  # cria o seletor
    quotes = []  # a lista que vai armazenar dados

    for quote in selector.css("div.quote"):  # interando sobre tag div com a classe quote e que tenha  10 itens

        text = quote.css("span.text::text").get()  # pega o texto que esta numa tag span com a classe text e quero só o texto

        author = quote.css("small.author::text").get()  # pega o nome de autores - segue a logica da linha 29

        tags = quote.css("a.tag::text").getall()  # pego o campo na tag a, e com a classe tag, quero só o texto e cmo tem mais de uma tag vou pegar todas

        # aqui vou montar um dicionário com os dados acima e subir para a lista
        quotes.append(
            {
                "text": text,
                "author": author,
                "tags": tags,
            }
        )

    return quotes

# testando esse função
# test_fetch = fetch_content('www.quotes.toscrape.com', 5)
# get_data = extract_quotes(page_content)
# print(get_data)

# extrair dados de todas as páginas
# a ideia aqui é navegar dinamicamente entre as páginas - enquanto tiver o botão next, vá clicando
def get_all_quotes():
    base_url = "http://quotes.toscrape.com"
    next_page = "/"  # quero saber qual a próxima página
    quotes = []
    while next_page:  # enquanto tiver algo nessa variavel
        content = fetch_content(base_url + next_page) # chamo as url original com / no fim

        # extend() foi usado para adicionar dados das páginas dentro de UMA LISTA 
        # se usasse o append() ele iria jogar os dados das páginas dentro de VÁRIAS LISTAS
        quotes.extend(extract_quotes(content))  # função para adicionar dados na lista quotes

        # essa sintaxe é para pegar o botão next - enquanto tiver esse botão, ele será clicado
        next_page = parsel.Selector(content).css("li.next > a::attr(href)").get()

    return quotes

# a ideia é clicar no botão autor e pegar informações sobre ele
def extract_author(text):
    selector = parsel.Selector(text)
    return {
        "name": selector.css("h3.author-title::text").get(),
        "birth-date": selector.css("span.author-born-date::text").get(),
        "birth-location": selector.css("span.author-born-location::text").get(),
        "description": selector.css("div.author-description::text").get(),
    }

# a ideia é pegar os autores de todas as páginas
def get_all_authors():
    authors = []
    base_url = "http://quotes.toscrape.com"
    next_page = "/"
    while next_page:
        content = fetch_content(base_url + next_page)
        selector = parsel.Selector(content)
        authors_url = selector.css("div.quote > span > a::attr(href)").getall()

        for url in authors_url:
            detail_content = fetch_content(base_url + url, timeout=2)
            authors.append(extract_author(detail_content))

        next_page = selector.css("li.next > a::attr(href)").get()

    return authors
