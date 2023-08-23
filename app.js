import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const config = JSON.parse(process.env.SERVER);

app.listen(config, () => {
   console.log(`Server is running on http://${config.host}:${config.port}`) 
});