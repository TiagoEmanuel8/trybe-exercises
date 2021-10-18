### Aula 29.3

- [ ] Criar a tabela Users usando uma migration
```bash
npx sequelize-cli model:create --name users  --attributes name:string,username:string,email:string,password:string
```
- [ ] Criando o model User
- [ ] Adicionando a coluna userId em product.
```bash
npx sequelize-cli migration:generate --name create-column-userid-product-table
```
  - [ ] Mudar código do controller de produtos para receber userId
  - [ ] Utilizando relacionamentos
    - [ ] Produto para User (eager loading)
    - [ ] User para Produtos (lazy loading)

- [ ] Relacionamento N:N
```bash
npx sequelize-cli model:create --name Selloffs --attributes name:string,discount:string,startDate:date,endDate:date
npx sequelize-cli migration:generate --name create-selloff-products-table
```

- [ ] Mostrar produtos de um selloff
- [ ] Associar produtos com um selloff
