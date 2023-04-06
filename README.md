# Project 77days
Um app que faz o acompanhamento de restramento de tasks (hábitos) realizados durante 77 dias. Que tem como obejetivo mostrar ao cliente um dashboard de checks das atividades e porcetagem de aproveitamento.

&nbsp;
## Screenshot


&nbsp;
## Executando o projeto

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

Além do Node.js, utilizamos o banco de dados PostgreSQL e **recomendamos** o uso do Docker para executar o banco em sua máquina.

> Você pode instalar o Docker seguindo [esse guia](https://www.youtube.com/watch?v=Gpal5KsSHMQ).

Após instalar o Node.js e o Docker, vamos acessar a pasta do projeto back-end, subir o serviço do banco de dados, configurar nossas variáveis ambiente e, então, subir o servidor HTTP.

```sh
cd apps/server

# Copiar o arquivo com os dados de conexão e demais variáveis ambiente
cp .env.example .env

# Subir o serviço do PostgreSQL via docker (caso não tenha instalado o PostgreSQL em seu computador)
docker compose up -d

# Subir o servidor HTTP
npm run start:dev
```

### Mobile

Para executar o app mobile do RS/XP utilizamos o Expo, uma ferramenta incrível da comunidade React Native. Além do Expo, é necessário que você utilize algum emulador local ou um dispositivo físico pra visualizar a aplicação.

> Você pode instalar o Expo e os emuladores seguindo esse guia.


Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
# Caso esteja usando Android
npm run android

# Caso esteja usando iOS
npm run ios

# Caso esteja usando um dispositivo físico
npm start
```

&nbsp;
## 💜 Tech Stack 

**📱 Mobile:**

- [Expo](https://github.com/expo/expo)
- [NativeWind](https://github.com/marklawlor/nativewind) _(Tailwind para o React Native)_

**🏧 Server:**

- [Express](https://github.com/expressjs/express)
- [Prisma](https://github.com/prisma/prisma)
- [PostgreSQL](https://github.com/postgres) 

&nbsp;

## 🚀 Funcionalidades: 
Até o momento, levando em consideração o prazo de 2 meses (Due: 05/07/2023), listamos algumas funcionalidades básicas para ser entregue.

### Funcionalidades 1.0 (MVP): 

- [x] **Configuração  do projeto**
        setup de mobile e back-end
        
- [ ] **Autenticação google**

- [ ] **Dashboard de atividades**
      Criar uma tela que estára todas as tasks que precisão ser feitas
      
- [ ] **Feed de progresso**
      Criar uma tela para mostrar o progresso e a porcetagem de aproveitamento do projeto

- [ ] **Configuração  da data do projeto**
        Criar um formulário para a configuração do inicio e fim do projeto


## Feedback
Este projeto faz parte do meu portfólio, ficarei feliz em receber feedback sobre o projeto, sobre os códigos, estrutura ou qualquer coisa que me ajude a evoluir para me tornar uma desenvolvedora melhor

Email: renarasecchim@hotmail.com

Conecte-se comigo [Linkedin](https://www.linkedin.com/in/renarasecchim/)
