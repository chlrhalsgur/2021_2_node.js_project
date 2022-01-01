const Sequelize = require('sequelize');
const User = require('./user');
const Room = require('./room');
const Hosting = require('./hosting');
const Participating = require('./participating');
const Adm = require('./adm');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Room = Room;
db.Hosting = Hosting;
db.Participating = Participating;
db.Adm = Adm;

User.init(sequelize);
Room.init(sequelize);
Hosting.init(sequelize);
Participating.init(sequelize);
Adm.init(sequelize);

User.associate(db);
Hosting.associate(db);
Participating.associate(db);
Room.associate(db);

module.exports = db;
