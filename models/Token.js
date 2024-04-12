// Importar Sequelize y la conexión a la base de datos
import Sequelize from 'sequelize';
import db from '../config/db.js';

// Define el modelo Token
const Token = db.define('Token', {
  idToken: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  token: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  expiracion: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

export default Token;
