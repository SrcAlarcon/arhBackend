import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const conectarDb = async () => {
    try {
        // Crea una instancia de Sequelize
        const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: 'mysql', 
            logging: false // Desactiva los logs de Sequelize (opcional)
        });

        // Prueba la conexión
        await sequelize.authenticate();

        return sequelize;
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1);
    }
};

export default conectarDb;