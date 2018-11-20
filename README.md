<p align="center">
  <img src="https://cdn-std.dprcdn.net/files/acc_687327/AmwiMZ">
</p>

<p align="center">
  <img src="https://badgen.net/npm/v/graphql-auth-example">
  <img src="https://badgen.net/badge/license/MIT/blue">
</p>

## :hammer: &nbsp; Install and Usage


First, you need to clone de **graphql-auth-example** project:

```sh
git clone git@github.com:caioflores/graphql-auth-example.git
```

Install dependecies:

```sh
yarn
```

Than create a .env file in the root folder with these variables (values are examples):

```sh
PG_USERNAME=postgres
PG_PASSWORD=1234
PG_DATABASE=test_database
PG_HOST=localhost
PG_PORT=5432

ENVIRONMENT=development

API_SECRET=BwdwtN%h6%FL05GrtFG
```

Now you can create the database and run the project: 
```sh
./node_modules/.bin/sequelize db:create

yarn start
```

That's it. Your project is running in http://localhost:3000/test