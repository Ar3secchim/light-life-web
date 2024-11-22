### Screenshot

https://github.com/user-attachments/assets/630e33d4-f125-4336-9b04-c26f2fad37b0

## 📃 Descrição geral

Um aplicativo que acompanha o rastreamento de tarefas (hábitos) realizadas durante N dias configurada pelo o usuário. Seu objetivo é fornecer aos usuários um painel de verificações de atividades e uma porcentagem de aproveitamento dos dias já executados, além de feedbacks sobre onde eles estão errando mais durante os dias.

Esse app foi desenvolvido para resolver um problema pessoal durante rastreamentos de novos hábitos durante um determinado período. A minha maior dor comparada com outros app  era a falta de  um acompanhamento visual em gráficos, saber como está minha evolução e como eu poderia melhorar durante o determinado período. Então desenvolvi o app pensando nessas dores,

## 🚀 Requisitos

### Requisitos funcionais principais  para entrega do mvp

- [ ] Os usuários devem poder criar uma lista de tarefas/hábitos para rastrear durante os N dias.
- [ ] Os usuários devem poder marcar as tarefas concluídas diariamente.
- [ ] O aplicativo deve calcular a porcentagem de aproveitamento dos dias concluídos.
- [ ] O aplicativo deve fornecer um dashboard com gráficos e estatísticas sobre o desempenho do usuário.
- [x] Ser um Pwa (progressive web app development) -> [Learn Pwa](https://web.dev/learn/pwa/)

## 🔨 Arquitetura

### Front End  (Mobile via PWA)

![[Pasted image 20240724084441.png]]

- O aplicativo é desenvolvido utilizando uma arquitetura CSR (Client-Side Rendering).
- O cliente é aplicativo móvel desenvolvido para PWA com react.

### Back End

- O servidor utiliza uma API REST, para lidar com as solicitações HTTP realizada pelo cliente.

### Banco de dados

- Armazenar os dados em um banco de dados MySQL
- Sem ORM por decisão de aprofundar conhecimento em Query de banco de dados

### Infra

- Todo projeto vai ser hospedado na AWS
- Front End em um maquina Ec2 com Ngnix para subir aplicação
- Pipes, CD/CI e ambientes de homologação e produção em um servidor diferente para criar um esteira segura.

## 🏗️ Estrutura do projeto

Um repositorio monolitico por ainda não a ver necessidade de criar vários serviços para um projeto desso porte.

```
├── api/
│  ├── .husky/
│  ├── infra/
│  │ ├── migrations/ # Migrações do banco de dados
│  │ ├── compose.yaml
│  │ └── database.js/ #abstração de coneção com o banco de dados
│  ├── test/
│  │ ├── integration/ # pasta de testes integração
│  │ └──unitario/ # pasta de testes unitários
│
├── .editorconfig # arquivo responsável por manter a projeto em formatanção consistente
├── .env.example # Exemplo de arquivo de variáveis de ambiente
├── .gitignore # arquivo responsável por especificar arquivos que não vão ser "tracking" pelo o git
├── .nvmrc # garantir a ultilização especifica de uma versão do nodejs
├── jest.confg.js # configuração do ambiente de test
├── jsconfig.json
├── package.json
│
├── web/
│  ├── components/
│  ├── pages/ # todas as paginas da aplicação
│  │ ├── auth/ # todas rotas que precisa esta autenticado para acessar
│  ├── styles/ # todas as estilizações globais
│
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
```

## 💻 Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.
Comece clonando o repositório e instalando suas dependências:

```sh

git clone https://github.com/Ar3secchim/project-77-days.git

cd project-77-days.git

# subir o serviço de banco de dados

# subir o servidor HTTP
cd api
npm install
npm run start

# lembrando que é monolitico então tem que rodar os dois serviços
# subir o serviço web
cd web
npm install
npm run dev
```

O projeto é construído em Node.js, mais especificamente sua versão Iron (20 LTS). Tudo detalhado no arquivo `.nvmrc`

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

## 💜 Tech Stack

**📱 Mobile:**

- [React](https://github.com/facebook/react/)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)

**🏧 Server:**

- [NodeJS](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f)

**🎲 Banco de dados:**

- [PostgreSQL](https://github.com/postgres)

## 🔮 Libs adicionais

- Express que fornece recursos mínimos para construção de servidores web com NodeJS
- Shadcn/ui para reutilização de components
- NEON para o Banco de dados (PostgreSQL)

## 💬 Feedback

Este projeto faz parte do meu portfólio, ficarei feliz em receber feedback sobre o projeto, sobre os códigos, estrutura ou qualquer coisa que me ajude a evoluir para me tornar uma desenvolvedora melhor. Abre uma PR ai ou um issues.

Email: <renarasecchim@gmail.com>

Conecte-se comigo [Linkedin](https://www.linkedin.com/in/renarasecchim/)
