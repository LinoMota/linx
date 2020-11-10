# Desafio Linx

Desafio do processo seletivo da Linx, se trata da criação de 2 apis e de uma aplicação frontend.

## Instruções de execução

  1) Criar um .env neste modelo :
     ```
      COMPOSE_CONVERT_WINDOWS_PATHS=1
      API_CATALOGO_PORT=3334
      API_RECOMENDACAO_PORT=3335
      FRONTEND_PORT=3336
      MONGO_PORT=27017
     ```
  2) docker-compose up  
  3) Aguardar as migrações (em torno de 5 segundos)
  3) Acessar localhost:3260 (O port está apontando para o numero colocado no FRONTEND_PORT no .env )

## Escolhas

  * Node.js : 
  Ultilizei Node.js nos 3 projetos pois creio que ele seja o mais flexível e de rápido desenvolvimento que eu conheço e que estava no meu alcance devido experiências.
  
  * MongoDB : 
    Como SGBD usei mongo por uma questão de opção mesmo, queria ultiliza-lo em um projeto e como me surgiu esta oportunidade resolvi experimentar.
  
  * Docker : 
    Queria muito ver os projetos em containers diferentes portanto criei um composer seguido de um dockerfile para cada, para que os 3 projetos subissem juntos e que fosse mais fácil executa-los.

  
## Problemas/Dificuldades no desenvolvimento

  * Tive problemas na tratativa dos dados em questão de modelagem, pois creio que talvez existam mais relações que talvez eu não tenha percebido, possível que eu tenha pecado na composição dos modelos.
  * No uso das apis fornecidas alguns dados não estavam distados no catálogo, logo tive que realizar tratativas.
  * Na busca de produtos com descontos alguns não haviam descontos de fato portanto tive que contornar isso também.
  * Devido o primeiro problema, acabo tento incertezas no rankeamento dos mais vendidos.
  

## Api de catálogo

### Descrição
Esta api foi desenvolvida com o simples propósito de buscar um produto recebendo seu id. Apresenta também a feature de recuperar informações de forma compacta e completa.

### Funcionamento
Seu funcionamento se da através de primeiramente uma conexão no banco de dados, a migração dos dados via um arquivo json que foi fornecido no desafio, e por fim a disponibilidade do endpoint "/products/" que recebe sua consulta de id via params e o seu format via body.

exemplo de uso :
  ```
  url : '/products/:id'
  RequestType : get
  headers : { "Content-Type" : "application/json" }
  requestBody : {
    "format" : "complete" || "compact"
  }
  
  Retorno:
    Sucesso : Um objeto produto (productSchema).
    Erro : Caso contrário será fornecido um json com a mensagem de erro.
```

#### Tecnologias ultilizadas

  * Backend 
    * Node.js
      * Express
      * body-parser
      * CORS
      * mongoose
      * morgan
      
  * SGBD
    * MongoDB

## Api de recomendação

### Descrição
Esta api consome a apis externas(fornecidas no desafio) recuperando IDs de produtos, onde com esses IDs faz a busca na api de catálogo.

### Funcionamento
A api disponibiliza um endpoint "/", onde no mesmo pode receber o parametro de query "maxProducts" quer define o máximo de registros para recuperar, onde seu valor mínimo é 10. 

exemplo de uso :
  ```
  RequestType : get
  headers : { "Content-Type" : "application/json" }
  query : {
    "maxProducts" : val >= 10 
  }
  
  Retorno:
    Sucesso : Um objeto que possui dois arrays de produtos se trata dos
               mais vendidos e os que baixaram o preço.
    Erro :  Uma mensagem informando indisponibilidade da api de catálogo.
  ```
  
 
#### Tecnologias ultilizadas

  * Backend 
    * Node.js
      * Express
      * body-parser
      * CORS
      * mongoose
      * morgan
      

## Aplicação frontend

### Descrição
A aplicação frontend consome a api de recomendação, onde permite que seja carregada a interface com os produtos no modelo solicitado.

### Funcionamento
Existe um build pela parte do webpack, onde logo em seguida ele sobe um servidor com a aplicação.

#### Tecnologias ultilizadas

  * Node.js
  * Webpack
  * Saas
  
  
