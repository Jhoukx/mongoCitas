import { Router } from "express";
import { getAll } from "../controllers/cita.controller.js";

const appCita = Router();

appCita.get('/', getAll);


export default appCita;