# 🛒 Projeto Loja Online

## 📌 Sobre o projeto

API de e-commerce completa desenvolvida com **Node.js e Express**, com autenticação de usuários, gerenciamento de produtos e controle de permissões.

O front-end está em desenvolvimento com **React**, consumindo a API para exibição de produtos e autenticação.

---

## 🚀 Funcionalidades

### 👤 Autenticação
- Registro de usuário
- Login com JWT
- Senhas criptografadas com bcrypt

### 🛍️ Produtos
- Criar produto
- Listar produtos com paginação
- Filtros:
  - preço mínimo e máximo
  - categoria
  - nome
- Atualizar produto
- Deletar produto

### 🔐 Controle de acesso
- Rotas protegidas com JWT
- Permissões:
  - user
  - admin

### 👨‍💼 Admin
- Listar usuários
- Buscar usuário por ID
- Atualizar usuário
- Deletar usuário (com restrição)

### ⚙️ Usuário
- Ver perfil
- Atualizar dados
- Alterar senha
- Deletar conta

---

## 🛠️ Tecnologias

### Back-end
- Node.js
- Express
- MongoDB + Mongoose
- JWT
- Bcrypt
- Joi
- Helmet
- Rate Limit
- CORS

### Front-end (em desenvolvimento)
- React
- JavaScript
- Fetch API

---

## 📂 Estrutura do projeto

---
📦 backend
 ┣ 📂 controllers
 ┣ 📂 services
 ┣ 📂 models
 ┣ 📂 routes
 ┣ 📂 middlewares
 ┗ 📂 database

📦 frontend
 ┣ 📂 pages
 ┣ 📂 services
 ┗ App.jsx

 ```bash
🔧 Back-end
git clone https://github.com/guix7/Projeto-Loja-Online
cd Projeto-Loja-Online
npm install

Crie um arquivo .env:

PORT=3000
MONGO_URI=sua_string_do_mongo
JWT_SECRET=seu_segredo
JWT_EXPIRES_IN=1d
npm run dev

💻 Front-end
npm install
npm run dev

```

🔐 Rotas principais
Auth
POST /api/register
POST /api/login

Produtos
GET /api/products
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id

Usuário
GET /api/users/me
PATCH /api/users/me
PATCH /api/users/me/senha
DELETE /api/users/me

Admin
GET /api/admin/users
GET /api/admin/users/:id
PATCH /api/admin/users/:id
DELETE /api/admin/users/:id

🔥 Diferenciais
Arquitetura organizada (Controller → Service → Model)
Validação com Joi
Autenticação com JWT
Controle de permissões (admin/user)
Paginação e filtros avançados
Segurança com Helmet e Rate Limit
📈 Status do projeto

🚧 Front-end em desenvolvimento
✅ Back-end funcional

👨‍💻 Autor

Guilherme Oliveira
💻 Desenvolvedor Full Stack em formação
🚀 Focado em React e Node.js

⭐ Se gostou do projeto, deixe uma estrela!
