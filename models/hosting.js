const Sequelize = require('sequelize');

module.exports = class Hosting extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      code: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true
      },
      date: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      time: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      num:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      title:{
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      detail:{
        type: Sequelize.STRING(45),
        allowNull: true,
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Hosting',
      tableName: 'hosting',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Hosting.hasMany(db.Participating, { foreignKey: 'h_code', sourceKey: 'code' });

    db.Hosting.belongsTo(db.User, { foreignKey: 'host_id', targetKey: 'id' });
    db.Hosting.belongsTo(db.Room, { foreignKey: 'room_num', targetKey: 'room_num' });
    db.Hosting.belongsTo(db.Room, { foreignKey: 'hall', targetKey: 'hall' });
  }
};
