import { Router } from "express";
import { getAll, getMedico, getPaciente } from "../controllers/cita.controller.js";

const appCita = Router();

appCita.get('/', getAll);
appCita.get('/paciente/:id', getPaciente);
appCita.get('/medico/:id',getMedico);

export default appCita;