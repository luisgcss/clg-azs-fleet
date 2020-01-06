# Desafio AZShip

## Sistema de gerenciamento de Frota

Este sistema possuí o objetivo de gerenciar a frota de veículos e os funcionários da transportadora AZS.

## Como usar

**1. Clonar o repositório**
```bash
git clone https://github.com/luisgcs/clg-azs-fleet
cd clg-azs-fleet
```

**2. Criar o banco de dados**
```bash
create database azs;
```

As tabelas do banco de dados serão criadas automaticamente de acordo com o que foi definido nas classes que estão localizadas em `azsapi\src\main\java\br\com\azs\azsapi\models`.

**3. Mudar as configurações da aplicação de acordo com sua instalação**

+ Abra `azsapi/src/main/resources/application.properties`

+ E mude `spring.datasource.url`,`spring.datasource.username`, `spring.datasource.password` de acordo com sua instalação

### Front-end

```bash
cd azs
yarn start
```

### Back-end

```bash
cd azsapi
mvn spring-boot:run
```

Os endpoints da API são:

    GET /api/motoristas

    GET /api/motorista/{id_motorista}
    
    GET /api/motorista/nome={nome_motorista}

    GET /api/motorista/cpf={cpf_motorista}

    POST /api/cadmotorista
    
    PUT /api/cadmotorista/{id_motorista}
    
    DELETE /api/motorista/{id_motorista}

    GET /api/veiculos

    GET /api/veiculo/{id_veiculo}
    
    GET /api/veiculo/placa={placa_veiculo}

    POST /api/veiculo
    
    PUT /api/veiculo/{id_veiculo}
    
    DELETE /api/veiculo/{id_veiculo}

    GET /api/viagens

    GET /api/viagem/{id_viagem}

    POST /api/viagem