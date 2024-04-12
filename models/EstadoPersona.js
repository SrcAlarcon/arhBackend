// Importar Sequelize y la conexión a la base de datos
import Sequelize from 'sequelize';
import db from '../config/db.js';

// Define el modelo EstadoPersona
const EstadoPersona = db.define('EstadoPersona', {
  idEstadoPersona: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  estado: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: Sequelize.STRING(300),
    allowNull: true
  }
});

export default EstadoPersona;
