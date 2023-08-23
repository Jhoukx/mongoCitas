import { Router } from "express";
import { getAll } from "../controllers/usuario.controller.js";

const appUsuario = Router();

appUsuario.get('/', getAll);

export default appUsuario;