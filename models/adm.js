const Sequelize = require('sequelize');

module.exports = class Adm extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.STRING(20),
        allowNull: true,
        unique: true,
        primaryKey: true
      },
      pwd: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'adm',
      tableName: 'adm',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
