// Dependencias de desarrollo OK, nodemon (npm i --save-dev nodemon)
import express from "express"; 
import dotenv from 'dotenv';
import conectarDb from "./config/db.js";
import registrarRoute from './routes/registrarRoute.js';



const app = express();
app.use(express.json());
dotenv.config();

conectarDb();

app.use("/api/registrar", registrarRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(`servidor funcionando en el puerto ${PORT}`);
 });
