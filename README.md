Desenvolvimento <br /><br/>

Versão deploy com firebase acesse: https://impar-challenge.web.app/ <br/><br/>

Tecnologias Utilizadas: <br />
HTML 5<br />
CSS3<br />
React<br />
React Hooks<br />
Node<br />
MongoDb<br />
Firebase<br />
Jest<br />
Material UI<br />
ESlint<br />
Babel<br />

Pré-requisitos: <br />
Para execução localmente e desenvolvimento do projeto é necessário possuir o Node instalado em sua máquina e o firebase. <br />
$ npm install -g firebase-tools<br /><br />

Setup Dev<br />
Para ver o projeto localmente, primeiro clone o repositório.<br /><br />

$ git clone https://github.com/ricardobsn/impar-challenge.git<br />
Navegue até o diretório e instale as dependências do projeto.<br />

$ cd impar-challange/ <br />
$ npm install ou yarn<br />
Feito isso, as dependências do Frontend estarão instaladas. Agora, bastar executar o comando abaixo e abrirá uma aba no seu browser principal com o projeto rodando.<br />
$ yarn start<br /><br />

Agora é preciso instalar as dependências do Backend, para isso é necessário entrr na pasta functions (backend do projeto)<br />
$ cd functions<br />
$ npm install<br />
Para rodar em dev digite:<br />
$ firebase emulators:start<br />
<br />
Testes<br />
Para execução de testes automatizados, na raiz do projeto execute:<br />
<br />
$ npm test<br />

O projeto foi feito utilizando React para o frontend e Node para o backend. O banco utilizado foi o mongoDb. <br />
O Firebase foi utilizado a parte de cloud functions e deploy.  
