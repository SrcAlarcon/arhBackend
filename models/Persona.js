// Importar Sequelize y la configuración de la base de datos
import Sequelize from 'sequelize';
import db from '../config/db.js'; // Asegúrate de que esta ruta apunte al archivo de configuración de la base de datos

// Definir el modelo de Persona
const Persona = db.define('Persona', {
  idPersona: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rut: {
    type: Sequelize.INTEGER(7),
    unique: true,
    allowNull: false
  },
  dv: {
    type: Sequelize.STRING(1),
    allowNull: false
  },
  nombre: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  apellidoPaterno: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  apellidoMaterno: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  estadoCivil: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  sexo: {
    type: Sequelize.ENUM('Masculino', 'Femenino'),
    allowNull: false
  },
  telefono: {
    type: Sequelize.INTEGER(9),
    allowNull: false
  },
  profesion: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  fechaCreacion: {
    type: Sequelize.DATE,
    allowNull: false
  },
  fechaSalida: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  // Opciones del modelo
  modelName: 'Persona',
  timestamps: false // Si no necesitas campos de fecha de creación/actualización
});

// Exportar el modelo como default
export default Persona;
