# Mail queuer

API feita em [nestjs](https://nestjs.com/) e [redis](https://redis.io/) para servir como um enfilerador de emails. Ele também utiliza o modulo [bull](https://github.com/nestjs/bull) para cuidar das filas.

Para as rotas, verifique o swagger da aplicação. `/docs`


Feito o checkout, é necessário settar as variáveis de ambiente do sistema. O projeto usa a lib dotEnv para configura-las. Renomeie o arquivo `.example.env` que está na raiz do projeto para `dev.env`

```bash
# API
PORT=8888

# REDIS QUEUE
QUEUE_REDIS_URL=

# MAIL CONFIG
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=

```
Onde 
:

`PORT` é a porta onde deseja que a API suba

`QUEUE_REDIS_URL` o endereço do redis que sera usado

`MAIL_HOST` é endereço smtp

`MAIL_PORT` é a porta do serviço smtp

`MAIL_USER` é o usuário do serviço smtp
 
`MAIL_PASS` é a senha do usário do serviço smtp

Para instalar as dependências do projeto rode o comando abaixo:
``` 
yarn
```

