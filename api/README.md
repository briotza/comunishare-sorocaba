# Backend do Projeto ComuniShare Sorocaba

Este é o backend do projeto ComuniShare Sorocaba, uma aplicação web desenvolvida com Node.js e Express. Este backend é responsável por fornecer uma API para manipulação dos dados dos usuários no banco de dados MySQL.

## Instalação

Antes de executar o backend, você precisa instalar as dependências. Execute o seguinte comando na raiz do diretório do backend (server):

```
npm install
```

## Configuração do Banco de Dados

Para executar este projeto localmente, siga as instruções abaixo para configurar o banco de dados MySQL:

### Instalação do MySQL:

Se você ainda não possui o MySQL instalado localmente, faça o download e siga as instruções de instalação disponíveis no [site oficial do MySQL](https://www.mysql.com/).

### Criação do Banco de Dados:

1. Abra o terminal ou prompt de comando e conecte-se ao servidor MySQL utilizando o comando `mysql -u root -p`.
2. Crie um novo banco de dados com o nome `comunishare` utilizando o comando `CREATE DATABASE comunishare;`.

### Criação da Tabela de Usuários:

Utilize o seguinte comando para criar a tabela de usuários no banco de dados `comunishare`:

```sql
CREATE TABLE comunishare.usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(60) NOT NULL,
  nascimento DATE NOT NULL,
  email VARCHAR(70) NOT NULL,
  celular VARCHAR(20) NOT NULL,
  endereco VARCHAR(60) NOT NULL,
  numero INT NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);
```

### Criação da Tabela de Lojas:

Utilize o seguinte comando para criar a tabela de lojas no banco de dados `comunishare`:

```sql
CREATE TABLE comunishare.lojas (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  categoria VARCHAR(45) NOT NULL,
  email VARCHAR(70) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  endereco VARCHAR(60) NOT NULL,
  numero INT NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  usuario_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```


### Configuração das Variáveis de Ambiente:

Certifique-se de configurar as variáveis de ambiente para a conexão com o banco de dados no backend do projeto através do arquivo db.js, fazendo as alterações necessárias nos campos:

```js
host: "localhost",
user: "root",
password: "sua_senha_do_mysql",
database: "comunishare"
```

## Execução

Para iniciar o servidor, execute o seguinte comando na raiz do diretório do backend (server):

```
npm start
```

O servidor será iniciado na porta 8800 por padrão.