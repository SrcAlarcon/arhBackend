// Importar Sequelize y la conexión a la base de datos
import Sequelize from 'sequelize';
import db from '../config/db.js';

// Define el modelo Direccion
const Direccion = db.define('Direccion', {
  idDireccion: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  calle: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

export default Direccion;
