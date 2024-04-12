//Importar Sequelize y configuración de la base de datos
import Sequelize from 'sequelize';
import db from '../config/db.js'; //configuración de la base de datos
import bcrypt from 'bcrypt';

// Definir el modelo de Usuario
const Usuario = db.define('Usuario', {
  idUsuario: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  correo: {
    type: Sequelize.STRING(200),
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  // Opciones del modelo
  modelName: 'Usuario',
  timestamps: false // Si necesitas campos de fecha de creación/actualización
});


// APARTAR 
// Método para comparar contraseñas
Usuario.prototype.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Hooks para encriptar la contraseña antes de guardarla en la base de datos
Usuario.beforeCreate(async (usuario, options) => {
  if (usuario.changed('password')) {
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(usuario.password, salt);
  }
  
});

// Exportar el modelo como default
export default Usuario;
