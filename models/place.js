const Sequelize = require('sequelize');

module.exports = class Place extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      code: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true
      },
      hall: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      room_num: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Place',
      tableName: 'Place',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
