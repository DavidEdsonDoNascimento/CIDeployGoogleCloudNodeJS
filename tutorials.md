# Passo a Passo utilizado:

* Adicionar dependencias iniciais (*express, body-parser, cors, mysql2*)
* Criar diretório raiz **src** 

## Sequelize ORM

* Adicionar dependencias do Sequelize *(sequelize, sequelize-cli e path)*
* Criar estrutura padrão para o funcionamento do Sequelize através do comando: **npx sequelize-cli init**
* Mover estrutura criada pelo sequelize para dentro da pasta raiz
* Criar arquivo *.sequelizerc*

### .sequelizerc

* Para que não ocorra mal funcionamento é necessario criar um arquivo *.sequelizerc* e orientar o sequelize para o novo local a qual se encontram seus arquivos
* O código para **.sequelizerc** é encontrado na documentação do sequelize e aqui no projeto no arquivo de mesmo nome

## Migrations

* Primeira Migrations - Categories : **npx sequelize-cli model:create --name Categories --attributes name:string,status:boolean** 
* Rodando migrate do model Categories : **npx sequelize-cli db:migrate**

### SEEDs

* Criar arquivo semente Categories : **npx sequelize-cli seed:generate --name demo-category**
* Rodando Seed's : **npx sequelize-cli db:seed:all**

### ESLint

* Adicionar dependencia **yarn add eslint -D**
* Rodando inicializador **yarn run eslint --init**
* Escolhido o modelo standard
* Adicionar scripts de automatização eslint no package.json **eslint .** e **eslint --fix**
* Rodando eslint e corrigir fixes até estar tudo certo