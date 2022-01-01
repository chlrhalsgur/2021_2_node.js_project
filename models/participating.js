const Sequelize = require('sequelize');

module.exports = class Participating extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      p_code: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
      },
      attendance: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Participating',
      tableName: 'participating',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Participating.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
    db.Participating.belongsTo(db.Hosting, { foreignKey: 'h_code', targetKey: 'code' });
  }
};
