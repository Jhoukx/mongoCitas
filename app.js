import express from 'express';
import dotenv from 'dotenv';
import appUsuario from './app/routes/usuario.routes.js';
import appCita from './app/routes/cita.routes.js';
dotenv.config();

const app = express();
app.use(express.json());

const config = JSON.parse(process.env.SERVER);

app.use('/usuario', appUsuario);
app.use('/cita', appCita);

app.listen(config, () => {
   console.log(`Server is running on http://${config.host}:${config.port}`) 
});