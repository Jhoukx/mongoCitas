import { Router } from "express";
import { getAll, getPaciente } from "../controllers/cita.controller.js";

const appCita = Router();

appCita.get('/', getAll);
appCita.get('/paciente/:id', getPaciente);

export default appCita;