# Project 77days

## 📃 Descrição geral

Um app que faz o acompanhamento de restramento de tasks (hábitos) realizados durante 77 dias. Que tem como obejetivo mostrar ao usuário um dashboard de checks das atividades e porcetagem de aproveitamento  dos dias já executados, além de dar um feedbacks para usuário aonde eles esteja errando mais durando o processo dele nesse desafio dos 77 Days.

Esse app foi pensado para resolver um problema meu durante os meus rastreamentos de novos hábitos durante um determinado e ter um acompanhemento de gráficos e saber como está minha evolução e como eu poderia melhorar durante o desafio.

&nbsp;
### Screenshot

![Group 2517](https://github.com/Ar3secchim/project-77-days/assets/82913620/d0979d6e-410a-4d4a-96cf-2f1f955910df)

&nbsp;

## 🚀 Requisitos

### 1. Requisitos funcionais principais pensados para entrega do mvp:
- [ ] Os usuários devem poder criar uma lista de tarefas/hábitos para rastrear durante os 77 dias.
- [ ] Os usuários devem poder marcar as tarefas concluídas diariamente.
- [ ] O aplicativo deve calcular a porcentagem de aproveitamento dos dias concluídos.
- [ ] O aplicativo deve fornecer um dashboard com gráficos e estatísticas sobre o desempenho do usuário.
- [ ] O aplicativo deve oferecer feedback ao usuário sobre áreas em que ele pode melhorar.
- [ ] Autenticação google
- [ ] Ser um Pwa (progressive web app development)  -> [Learn Pwa](https://web.dev/learn/pwa/)

### 2. Requisitos não funcionais:
  - [ ] A interface do usuário deve ser intuitiva e fácil de usar.
  - [ ] O aplicativo deve ser responsivo e funcionar em maiorias dos dispositivos móveis.
  - [ ] O aplicativo deve ser seguro, protegendo os dados do usuário.

&nbsp;

## 🔨 Arquitetura

- O aplicativo é desenvolvido utilizando uma arquitetura cliente-servidor.
- O cliente é aplicativo móvel desenvolvido para PWA com react.
- O servidor utiliza uma arquitetura RESTful, com uma API para lidar com as solicitações do cliente e armazenar os dados em um banco de dados MySQL.

&nbsp;

## 💻 Executando o projeto

### Front end
Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/Ar3secchim/project-77-days.git

cd project-77-days.git

npm install
```

&nbsp;

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Além do Node.js, utilizamos o banco de dados MySql vis ORM Prisma

```sh
cd apps/server

# Copiar o arquivo com os dados de conexão e demais variáveis ambiente
mrkdir .env.example .env

# Subir o servidor HTTP
npm run start
```

&nbsp;

## 💜 Tech Stack 

**📱 Mobile:**

- [React](https://github.com/facebook/react/)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)

**🏧 Server:**

- [Express](https://github.com/expressjs/express)
- [Prisma](https://github.com/prisma/prisma)
- [Mysql](https://github.com/mysql) 

&nbsp;

## 🔮 Libs adicionais

- shadcn/ui -> material UI baseado no Tailwind com modo dark/ligth automático
- Prisma como ORM 
- Deploy na Vercel
- PlanetScale como o Banco de dados (mysql)
- StoryBook para documentação de componentes


## 💬 Feedback
Este projeto faz parte do meu portfólio, ficarei feliz em receber feedback sobre o projeto, sobre os códigos, estrutura ou qualquer coisa que me ajude a evoluir para me tornar uma desenvolvedora melhor. Abre uma PR ai ou um issues.

Email: renarasecchim@gmail.com

Conecte-se comigo [Linkedin](https://www.linkedin.com/in/renarasecchim/)


## (c) License

MIT License
Copyright (c) 2023 Renara Secchim