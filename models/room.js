const Sequelize = require('sequelize');

module.exports = class Room extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      room_num: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
      },
      hall: {
        type: Sequelize.STRING(20),
        allowNull: true,
        primaryKey: true
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Room',
      tableName: 'room',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate (db) {
    db.Room.hasMany(db.Hosting, { foreignKey: 'hall', sourceKey: 'hall' });
    db.Room.hasMany(db.Hosting, { foreignKey: 'room_num', sourceKey: 'hall' });
  }
};
