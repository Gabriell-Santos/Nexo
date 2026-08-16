# 🎓 Nexo - Plataforma de Cursos

<p align="center">
  <img src="https://raw.githubusercontent.com/Gabriell-Santos/Nexo/master/home.png" alt="Nexo - Demonstração" width="800">
</p>

## 📖 Sobre o Projeto

A Nexo é uma plataforma de cursos criada para ajudar e direcionar pessoas em busca de conhecimento e sabedoria, utilizando o YouTube como parceiro de estudos.

A proposta é simples: o YouTube tem conteúdo de qualidade pra praticamente tudo, só que espalhado por todo canto. A Nexo organiza esse conteúdo por tema — programação, idiomas, marketing, design — transformando horas de vídeo soltas em trilhas de aprendizado claras, acessíveis e 100% gratuitas.

Ideal pra quem teve uma aula na faculdade e ficou curioso pra saber mais, ou pra quem simplesmente tem interesse em algum assunto e quer algo direto pra começar.

🔗 Acesse o projeto: [nexo-chi-brown.vercel.app](https://nexo-chi-brown.vercel.app/)

## 🚀 Tecnologias Utilizadas

* React - Biblioteca para construção da interface
* TypeScript - Tipagem estática e maior segurança no código
* Vite - Build tool rápida para desenvolvimento
* Tailwind CSS - Estilização rápida e responsiva
* React Router DOM - Navegação entre páginas
* React Icons - Ícones para uma interface mais bonita
* Axios - Requisições HTTP para a API do YouTube
* Context API - Gerenciamento de estado global (autenticação)
* Firebase Authentication - Login e cadastro de usuários
* Firestore - Banco de dados para registro de vídeos assistidos
* YouTube Data API v3 - Fonte dos cursos exibidos na plataforma

## 📦 Funcionalidades

* 🔐 Login e cadastro de usuários com Firebase
* 🔎 Busca de cursos em tempo real, direto da API do YouTube
* 🗂️ Cursos organizados por categoria (Programação, Idiomas, Marketing, Design)
* 📄 Página de detalhes de cada curso
* ▶️ Redirecionamento direto para o YouTube ao assistir
* 📊 Registro de vídeos assistidos por usuário, salvos no Firestore
* 📱 Layout responsivo para diferentes tamanhos de tela

## 🖥️ Como executar o projeto

```bash
# Clone este repositório
git clone https://github.com/Gabriell-Santos/nexo.git

# Acesse a pasta do projeto
cd nexo

# Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto com suas próprias chaves:

```
VITE_API_KEY=sua_chave_da_youtube_api
VITE_API_URL=https://www.googleapis.com/youtube/v3

VITE_FIREBASE_API_KEY=sua_chave_do_firebase
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
```

```bash
# Execute a aplicação
npm run dev
```

## 📁 Estrutura do Projeto

```
src/
├── assets/          # imagens estáticas
├── components/
│   ├── ui/           # componentes genéricos reutilizáveis (Input, Button...)
│   └── courses/       # componentes específicos de curso (WatchButton...)
├── contexts/         # AuthContext (estado global de autenticação)
├── hooks/             # hooks customizados
├── pages/             # páginas da aplicação (Home, Courses, Login, Details...)
├── routes/            # configuração de rotas
├── services/          # integração com APIs (YouTube, Firebase)
└── types/             # tipos TypeScript compartilhados
```

## 👤 Autor

Desenvolvido por [Gabriell Santos](https://github.com/Gabriell-Santos)
