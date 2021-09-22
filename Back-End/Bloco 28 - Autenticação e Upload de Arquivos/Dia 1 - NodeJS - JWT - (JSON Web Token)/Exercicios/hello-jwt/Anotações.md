O processo de Cadastro no site tem o fluxo a seguir

1 - Usuário tem que digitar username e senha
2 - Do lado do node usar o verbo POST
3 - Como senha é uma informação sensível, na hora de gravá-la no BD existe a lib BCRYPT que vai embaralhar a senha, para o caso do BD ser vazado, as senhas dos users não serão vazadas
4 - A partir disso a senha cadastrada no BD será diferente da senha que o user digitou na hora de cadastrar

O processo de Login tem o fluxo a seguir

1 - Usuário digita seu login e senha
2 - Do lado do node usar o verbo POST para capturar os dados
3 - A primeira verificação é no middleware (ou services), com a função bcrypt.compare() onde vou comparar a senha passada no login com a senha cadastrada no BD e que foi encriptada com a lib BCRYPT
4 -  Caso o login e senha estejam OK, o user recebe um token atraves da lib JWT para poder ter acesso a várias funcionalidades do sistema

O token é necessário para um user poder fazer CRUD no em um sistema

1 - Geralmente a chamada pra verificação ficam perto das rotas e junto aos verbos HTTP
2 - Faço um middleware que vai comparar se o token passado pelos headers é igual a aquele gerado pelo JWT, a função jwt.verify() faz tudo isso automaticamente
