- [x] O que é um ORM?
      ORM é uma abstração entre back end e BD, no caso o back end só vai repassar os dados pro BD e o BD que trata os dados

      O equivalente ORM para NO-SQL é o `mongose`

- [ ] Adicionando o sequelize na aplicação
        `npm init -y` => Inicia o node
        `npm install mysql2` => Instala o MySql
        `npm install sequelize` => instala o sequelize
        `npm install sequelize-cli -D` => o cli executa e gera as operações com o BD
        `npx sequelize-cli init` => Configura o BD, com as pastas config, models, migrations e seeders.

- [ ] Iniciando o Sequelize
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize

        `npx sequelize db:create` => Criando um BD

- [ ] Criando o banco de dados
        Executar a partir do SQL

        `mysql -u root -proot -e 'SHOW DATABASES'` => vou acessar o user root e exibier as tabelas.

        `mysql -u root -p root -e 'SHOW DATABASES'` => ai nesse caso vou ter que digitar a senha ... é mais seguro


- [ ] Definindo nosso primeiro Model
        Renatão definiu todo na model se assemelhando ao MSC, mas por si só esse caso não é ORM.

- [ ] use strict: https://pt.stackoverflow.com/a/3752
        Esse arquivo está no index.js do model e na prática é um 'code climate' do JS

- [ ] Entendendo o que existe no arquivo index.js e como o Sequelize adota o SOLID como base.
        O arquivo product dentro da pasta models foi criado do método mais 'primitivo'

- [ ] Models x Model
        Model é arquivo do MSC
        Models é arquivo do Squelize

        na hora de chamar arquivos do sequelize devo importar de require('./models') e não de model

- [ ] Criando um segundo Model com uma Migration
        `npx sequelize model:generate Product --name  --attributes name:string description:string` => cria a model e nesse exemplo foi a model category e campos name e description

        Esse codigo também cria a migration

        Ai depois modifico a tabela através da migration
        
- [ ] Como usar as principais funções do Sequelize

        Para criar a tabela uso o comando `npx sequelize db:migrate`

        Se quiser deletar a tabela uso o comando `npx sequelize db:migrate:undo`

- [ ] Adicionando uma nova coluna usando uma migration
- [ ] Entender o que é um seeder

      útil para povoar o BD com dados

      `npx sequelize seed:generate --name CreateCategories` => a partir daqui já posso inserir dados

      usar o comando `npx sequelize db:seed:all` => vai povoar o TODO O BD

      `npx sequelize db:seed:undo:all` => para tirar os dados uso o comando

- [ ] Para usar os comandos

      Ver os comandos `index.js`  

