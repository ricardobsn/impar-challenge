Desenvolvimento
Tecnologias Utilizadas:
HTML 5,
CSS3,
React,
React Hooks,
Node,
MongoDb,
Firebase,
Jest,
Material UI,
ESlint,
Babel,

Pré-requisitos:
Para execução e desenvolvimento do projeto é necessário possuir o Node instalado em sua máquina e o firebase.
$ npm install -g firebase-tools

Setup Dev
Para ver o projeto rodando, primeiro clone o repositório.

$ git clone https://github.com/ricardobsn/impar-challenge.git
Navegue até o diretório e instale as dependências do projeto.

$ cd impar-challange/
$ npm install ou yarn
Feito isso, as dependências do Frontend estarão instaladas. Agora, bastar executar o comando abaixo e abrirá uma aba no seu browser principal com o projeto rodando.
$ yarn start

Agora é preciso instalar as dependências do Backend, para isso
$ cd functions
$ npm install
Para rodar em dev digite:
$ firebase emulators:start

Testes
Para execução de testes automatizados, basta executar

$ npm test
