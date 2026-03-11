# Anotações Sobre Node.Js

## O que é Node.js?

- Ambiente que permite execução de código JS fora de um navegador(antigamente você só conseguia rodar código JS dentro de um navegador de internet);
- Utiliza V8 Engine (mesmo motor utilizado pelo Google Chrom, e transforma o código JS em código de maquina e retorna o resultado);
- Utilizado para construir APIs (back-ends);

---

## Como o Node.js funciona?

- Possui apenas um núcleo (single threaded);
- Suporta várias operações simultâneas (non-blocking)/ Ele tem apenas um núcleo, mas consegue fazer varias operações simultâneas;
- Ao receber uma requisição simultânea, ele não aguarda a primeira requisição ficar "pronta", ele faz tudo simultâneamente;

## Vantagens do Node.js

- Ótimo uso de memoria (baixo custo);
- Harmonia com o front-end (ambos utilizam JS);
- Rápido, seimples e escalável;
- Presença extremamente forte no mercado;

---

## Módulos Node.js

- Podemos criar nossos próprios módulos (nossos arquivos) e importá-los;
- O Node.js vem com módulos pré-instalados (path, fs, http, etc);
- Para importar um módulo, tulizados o CommonJS:
  Javascript
  `const patch = require('path');` <br>
  `const meuArquivo = require('./meu-arquivo.js')`

## NPM - NODE PACKAGE MANAGER

- Podemos instalar módulos de terceiros utilizando o NPM;
- Esses módulos são armanezados em uma pasta chamada "node_modules";
- Um arquivo chamado "package.json" lista todos os módulos que instalamos pelo NPM; <br>
  `-> npm init` // Cria o package.json <br>
  `-> npm install express` // Instala um pacote localmente<br>
  `-> npm -g install nodemon` // Instala um pacote globalmente<br>
