# API microsservice
Basic structure of a microservice API REST

### Variáveis de ambiente

```
  HTTP_PORT=3000
  HTTP_HOST=127.0.0.1
  NODE_ENV=development
```

### NPM
```sh
# doc API
npm run doc 

# run tests
npm test

# build JavaScript
npm run build

# run development
npm run dev

# run production
npm start
```

### Sample
```sh
curl http://127.0.0.1:3000/api/ping
# output: {"pong":"2020-05-20T19:11:26.778Z"}

```