# Install
```sh
yarn install
```

## Run Mysql Container
```sh
docker pull mysql
docker run --name leovegas-sql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=leoDB -e MYSQL_USER=webapi -e MYSQL_PASSWORD=webapi -d mysql
```

## Push Prisma Model to DB
```sh
nx run db-client:push:dev
```

## Generate Prisma Client
```sh
nx run db-client:gen-client
```

## Run API Server and Swagger UI
```sh
nx run leo-api:serve
# Navigate to http://localhost:3000/leo-api
```

## Seed some data through the API
```sh
# This curls the API
bash ./seed.user.sh
```

# DOCUMENTATION
## Swagger
```sh
curl localhost:3000/leo-api
```

## Authorize with Bearer Token in Swagger
```sh
# TOKEN for USER with id: user [number]
# TOEKEN for ADMIN: admin [number]
```

### Few short words:
  - I did the work on transition - I had to travel
  - It took well more than 6hrs in few trains - eventhough I knew what I'm doing, there's always surprises.
  - So, I stoped when got tired and when time went well over required, not completing the tasks (not all CRUD, no tests), but from where I left it, it takes little to finish and mayor issues are solved... I think
  - I used Swagger just to try it and to avoid making Next-app (eventually)
  - Swagger-Bearer-Token took me hours to solve, but aslo MySQL(Prisma connection), Nest decorators/guards to get what I need - simmulate JWT with role/id claims
  - Thank you, it was beneficial to me at least!