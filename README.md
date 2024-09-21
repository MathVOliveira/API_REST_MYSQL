# CRUD com MySQL Utilizando o Padrão MVC
## Descrição
Este projeto foi desenvolvido como parte de um estudo seguindo uma [playlist do Edson Maia](https://www.youtube.com/playlist?list=PLnex8IkmReXwCyR-cGkyy8tCVAW7fGZow). O objetivo foi implementar um CRUD (Create, Read, Update, Delete) usando MySQL e o padrão de projeto MVC (Model-View-Controller).

## Como Executar o Projeto
- Clone o repositório.
- Instale as dependências com `npm install`.
- Configure as credenciais do MySQL no arquivo `.env`.
- Execute o servidor com o comando `npm run dev`.
- Acesse a aplicação via navegador ou ferramentas como Insomnia/Postman para testar as rotas CRUD.

## Tecnologias Utilizadas
Node.js - Plataforma JavaScript para construir aplicações de backend.

Express - Facilita o desenvolvimento de servidores HTTP com suporte a rotas e métodos HTTP (GET, POST, PUT, DELETE).

Nodemon - Monitora as alterações no código e reinicia automaticamente o servidor, agilizando o fluxo de desenvolvimento.

MySQL - Banco de dados relacional usado para armazenar os dados da aplicação.

### Comandos Utilizados
- `npm init -y`: Inicia o package.json com as configurações padrão.
- `npm i express --save`: Instala o framework Express para gerenciar rotas e requisições.
- `npm i nodemon -D`: Instala o Nodemon como dependência de desenvolvimento, permitindo reinicializações automáticas do servidor ao detectar mudanças no código.
- `npm run dev`: Executa o servidor em modo de desenvolvimento com o Nodemon.
- `npm i mysql`: Instala o pacote MySQL para comunicação com o banco de dados.
