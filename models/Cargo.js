import Sequelize from 'sequelize';
import db from '../config/db.js';

const Cargo = db.define('Cargo', {
  idCargo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombreCargo: {
    type: Sequelize.STRING(150),
    allowNull: false
  }
 
});

export default Cargo;
