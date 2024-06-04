## 📃 Descrição geral

Um aplicativo que acompanha o rastreamento de tarefas (hábitos) realizadas durante 77 dias. Seu objetivo é fornecer aos usuários um painel de verificações de atividades e uma porcentagem de aproveitamento dos dias já executados, além de feedbacks sobre onde eles estão errando mais durante o desafio.

Este aplicativo foi desenvolvido para resolver um problema pessoal durante o rastreamento de novos hábitos por um período específico, fornecendo acompanhamento gráfico e insights sobre a evolução e as áreas de melhoria durante o desafio de 77 dias.

## 🚀 Requisitos

## 1. Requisitos funcionais principais pensados para entrega do mvp:

- [ ] Os usuários devem poder criar uma lista de tarefas/hábitos para rastrear durante os 77 dias.
- [ ] Os usuários devem poder marcar as tarefas concluídas diariamente.
- [ ] O aplicativo deve calcular a porcentagem de aproveitamento dos dias concluídos.
- [ ] O aplicativo deve fornecer um dashboard com gráficos e estatísticas sobre o desempenho do usuário.
- [ ] O aplicativo deve oferecer feedback ao usuário sobre áreas em que ele pode melhorar.
- [ ] Autenticação google
- [ ] Ser um Pwa (progressive web app development) -> [Learn Pwa](https://web.dev/learn/pwa/)

## 2. Requisitos não funcionais:

- [ ] A interface do usuário deve ser intuitiva e fácil de usar.
- [ ] O aplicativo deve ser responsivo e funcionar em maiorias dos dispositivos móveis.
- [ ] O aplicativo deve ser seguro, protegendo os dados do usuário.

## 🔨 Arquitetura (MVC)

- O aplicativo é desenvolvido utilizando uma arquitetura client-server.
- O cliente é aplicativo móvel desenvolvido para PWA com react.
- O servidor utiliza uma arquitetura RESTful, com uma API para lidar com as solicitações do cliente e armazenar os dados em um banco de dados MySQL.

## Estrutura do projeto

├── infra/
│ ├── migrations/ # Migrações do banco de dados
│ ├── compose.yaml
│ ├── database.js/ #abstração de coneção com o banco de dados
│ ├── stocks/ # Módulo de integração com API de ações
│ ├── app.module.ts # Módulo raiz
│ └── main.ts # Arquivo principal
│
├── pages/
│ ├── api/ # gerenciamentos de endpoints da aplicação
│ │ ├── v1/ # versionamento da api
│ ├── login/ # toda pasta que tiver fora da api é um `rota` de pagina web

├── test/
│ ├── integration/ # pasta de testes integração
│ ├── unitario/ # pasta de testes unitários
│
├── .editorconfig # arquivo responsável por manter a projeto em formatanção consistente
├── .env.example # Exemplo de arquivo de variáveis de ambiente
├── .gitignore # arquivo responsável por especificar arquivos que não vão ser "tracking" pelo o git
├── .nvmrc # garantir a ultilização especifica de uma versão do nodejs
├── jest.confg.js # configuração do ambiente de test
├── jsconfig.json
├── package.json
└── README.md

## 💻 Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh

git clone https://github.com/Ar3secchim/project-77-days.git

cd project-77-days.git

npm install
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão Iron (20 LTS). Tudo detalhado no arquivo `.nvmrc`

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Além do Node.js, utilizamos o banco de dados PostgreSQL, e adivinha, para fazer as query nesse banco decide realizar na mão as query, sem utilizar um ORM (Object relational manage) para afim poder aprofundar meu conhecimento em bancos SQL.

```sh
# Copiar o arquivo com os dados de conexão e demais variáveis ambiente
mrkdir .env

# Vai Start aplicação web e subir um banco de dados locais com as váriaveis de ambiente setadas
npm run dev

# Subir o servidor HTTP
npm run start
```

## 💜 Tech Stack

**📱 Mobile:**

- [React](https://github.com/facebook/react/)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)

**🏧 Server:**

- [Express](https://github.com/expressjs/express)
- [PostgreSQL](https://github.com/postgres)

## 🔮 Libs adicionais

- shadcn/ui -> material UI baseado no Tailwind com modo dark/ligth automático
- Sem ultilização de ORM para poder treinar meus conhecimentos em Query.
- Deploy na Vercel
- NEON como o Banco de dados (PostgreSQL)
- StoryBook para documentação de componentes

## 💬 Feedback

Este projeto faz parte do meu portfólio, ficarei feliz em receber feedback sobre o projeto, sobre os códigos, estrutura ou qualquer coisa que me ajude a evoluir para me tornar uma desenvolvedora melhor. Abre uma PR ai ou um issues.

Email: renarasecchim@gmail.com

Conecte-se comigo [Linkedin](https://www.linkedin.com/in/renarasecchim/)
