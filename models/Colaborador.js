// Importar Sequelize y la configuración de la base de datos
import Sequelize from 'sequelize';
import db from '../config/db.js'; // Asegúrate de que esta ruta apunte al archivo de configuración de la base de datos

// Definir el modelo de Colaborador
const Colaborador = db.define('Colaborador', {
  idColaborador: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idUsuario: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idPersona: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idCargo: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idDireccion: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idToken: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  // Opciones del modelo
  modelName: 'Colaborador',
  timestamps: false // Si no necesitas campos de fecha de creación/actualización
});

// Exportar el modelo como default
export default Colaborador;
