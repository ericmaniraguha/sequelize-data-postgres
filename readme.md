npm i typescript @types/node ts-node-dev -D
npm i express
npm express dotenv
npm i sequelize pg pg-hstore

# create a typescript tsconfig

tsc --init

# configure sequelize-cli for migration

npm i sequelize-cli -D

# generate config, migration and seeds

npx sequelize-cli init

npm i --save-dev @types/express

# run the project

npm run dev

# create model

npx sequelize-cli model:generate --name User --attributes name:string

npx sequelize-cli model:generate --name Project --attributes title:string
