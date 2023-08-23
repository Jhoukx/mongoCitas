import { Router } from "express";
import { getEspecialidad } from '../controllers/medico.controller.js'

const appMedico = Router();

appMedico.get('/', getEspecialidad);

export default appMedico;