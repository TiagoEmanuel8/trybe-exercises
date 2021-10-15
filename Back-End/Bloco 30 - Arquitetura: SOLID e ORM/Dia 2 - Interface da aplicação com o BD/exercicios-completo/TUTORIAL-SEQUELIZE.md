- [ ] Instalação das libs básicas de `nodeJS` + `Sequelize`.
        - `npm i express dotenv body-parse nodemon express-rescue` => Basicão do nodeJs.
        - `npm init -y` => Inicia o node.
        - `npm install mysql2` => Instala o MySql.
        - `npm install sequelize` => instala o sequelize.
        - `npm install sequelize-cli -D` => o cli executa e gera as operações com o BD.
        - `npx sequelize-cli init` => Configura o BD, com as pastas config, models, migrations e seeders.

- [ ] Aplicando as `boas práticas`.
        - alterar a `pasta config` inserindo os `dotenv` para ocultar dados sensíveis.
          - Obs: caso não saiba dessa parte pesquise por `variáveis de ambiente` e a lib `dotenv`.
        - criar a pasta `src` para abrigar todo o `sequelize`. e dentro do `index.js` da `models` alterar a `const config` para `require(__dirname + '/../config/config.js')[env];`
        - criar o arquivo `.sequelizerc` para apontar para a nova pasta. ver a estrutura já pronta desse projeto, pois ela vai sempre se repetir.

- [ ] Iniciando o `Sequelize`.
        - `npx sequelize db:create` => Criando um BD.
        - [ ] conferindo se a tabela foi criada.
          - checar se a tabela foi criada usar o `MySql WorkBranch` ou a extensão `Database do VScode`
          - `mysql -u root -proot -e 'SHOW DATABASES'` => vou acessar o user root e exibier as tabelas.
          - `mysql -u root -p root -e 'SHOW DATABASES'` => ai nesse caso vou ter que digitar a senha ... é mais seguro.

- [ ] Definindo nosso `Models`.
        - Usar o comando `npx sequelize model:generate --name Store --attributes name:string description:string`
          - Lembrando que esse código também cria a `migration`.
          - Nesse exemplo vai criar uma `model/table` com o nome `Store` e as colunas `name e description`, ambas como `string`.
          - A partir daqui posso modelar a `Models` de acordo com o que quiser.

- [ ] Definindo nossa `Migrations`
        - lembrando que essa pasta é a representação das `colunas` de uma tabela
        - fazer as devidas alterações no arquivo gerado, de acordo com o que quero
        - Executar o comando `npx sequelize db:migrate` para povoar a tabela.
        - Caso queira desfazer as colunas uso o comando `npx sequelize db:migrate:undo`

- [ ] Inserindo dados nas tabelas `seed`
        - Crio com o comando `npx sequelize seed:generate --name stores`
          - Vale lembrar que NESSE EXEMPLO devo ter um `model` com o mesmo nome `stores`,
        - preencher o seed com dados necessários e ao final executar os comandos
          - `npx sequelize db:seed:all` => vai povoar o TODO O BD
          - `npx sequelize db:seed:undo:all` => para tirar os dados do BD
          - `updatedAt`, `createdAt` tem 3 soluções
            - `1`: `createdAt` e `updatedAt` na `migration` com o capo `allowNull` desativado e nas `models` deixar o `timestamps: false`.
            - `2`: deixar o inverso do 1, ou seja desativar o `timestamps` das `models` e ativar `createdAt` e `updatedAt` na `migration`.
            - `3`: definir um valor default `defaultValue: Sequelize.fn('NOW'),`em `migrations`

- [ ] `Observações` importantes
      - `Models x Model`: Model é arquivo do MSC e Models é arquivo do Squelize. por isso na hora de `importar` o sequelize devo chamar o `models`, como por exemplo `('./models')`.
      - se na `models` o nome da tabela for no `singular`, o sequelize entende que na `migrations` a tabela está no `plural` e `vice-versa`, o `freezeTableName`em `models` busca romper esse padrão do sequelize
      - A partir daqui posso fazer as requisições normalmente no `controller` ou `services` ou `models`

- [ ] `CRUD` para o `sequelize`
      - importar de `models`
      - importação.`findAll` => `ler todos` os dados
      - importação.`findByPk` => `ler um` dado
      - importação.`create` => `criar` um dado
      - importação.`delete` => `deletar` um dado
      - importação.`update` => `update` um dado