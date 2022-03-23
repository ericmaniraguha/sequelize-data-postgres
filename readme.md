npm install sequelize pg pg-hstore
npm install -g sequelize-cli
sequelize init
npm install
sequelize db:create
# create table 1.-User model
sequelize model:generate --name user --attributes name:string,email:string,role:string
# create table 2.-channel
# create table 3.-video

Relationship:
user-channel-video

npx sequelize-cli db:seed:all
