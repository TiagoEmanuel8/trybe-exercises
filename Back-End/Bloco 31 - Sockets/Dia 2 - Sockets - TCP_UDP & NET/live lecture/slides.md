---
theme: "night"
transition: "slide"
title: "TCP/UDP e NET"
enableMenu: false
enableSearch: false
enableChalkboard: false
---

# TCP/UDP & NET

---

### Sockets

> "Um Socket é um ponto final (endpoint) de um canal bidirecional de comunicação entre dois programas rodando em uma rede;"

---

![](images/sockets.png)

---

### TCP/UDP

* TCP e UDP são protocolos da camada 4 do Modelo OSI
* 65.536 portas TCP disponíveis
* 65.536 portas UDP disponíveis

---

![](images/udp-tcp-joke.jpeg)

---

### TCP

* Three Way Handshake (SYN, SYN-ACK, ACK)
* Verificação de integridade
* Reenvio de pacotes

---

### UDP

* Não garante a entrega
* Simplesmente envia o dado
* Ex: Pen Drives

---

### Pronto ou não aí vai um pacote! 

![Gif](https://media.giphy.com/media/R56D9r7oGPx96/giphy.gif)

---

### Sockets TCP

* IP define a máquina.  
* Porta especifica a aplicação.
* Servidor fica em loop esperando requisições para gerar "sockets".

---

### Construindo um chat

![](images/chat.png)

---

### Chat

Let`s code!

---

### Dúvidas?

![alt](https://media3.giphy.com/media/3o6MbudLhIoFwrkTQY/giphy.gif?cid=790b76117789c6161150915091725a365bdeac4e06fd01cd&rid=giphy.gif&ct=g){ width=90% }
