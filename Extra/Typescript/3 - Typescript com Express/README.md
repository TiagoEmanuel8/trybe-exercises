# Dia 26.3 - Exercícios

Este é um repositório de template construído sobre a arquitetura MSC para a realização do exercício do dia 26.3. No mesmo temos a seguinte estrutura que contém uma representação mínima de uma aplicação em typescript com express:

```yaml
src:
  controllers:           
    index.ts             
  models:
    index.ts             
  services:
    index.ts
  app.ts                 # criação da aplicação
  index.ts               # inicialização da aplicação
```

Foram criados 4 script's para auxiliar no desenvolvimento sendo:

- `npm run start`: para iniciar o projeto usando o [ts-node](https://www.npmjs.com/ts-node)
- `npm run build`: para compilar o projeto
- `npm run dev`: para inicar o projeto com o [ts-node-dev](https://www.npmjs.com/ts-node-dev) (similar ao nodemon)
- `npm run lint`: para que o eslint verifique o código

Além disso também foram criados 2 scripts de debug sendo:

- Launch: inicia a solução em modo debug sem hot reload
- Attach: vincula uma instância de debug a solução iniciada através do comando `npm run dev`. 