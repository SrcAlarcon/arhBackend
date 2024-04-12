import express from 'express';
const router = express.Router();
import { registrar, perfil } from '../controllers/registroController.js';

//Ruta para el registro de usuarios (POST)
router.post("/", registrar);


// Ruta para ver el perfil (Solicitud Get)
router.get("/perfil", perfil);

export default router;