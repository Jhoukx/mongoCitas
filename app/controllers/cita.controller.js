import { con } from "../../config/connection/atlas.js";

const db = await con();
const cita =  db.collection('cita');

const getAll = async(req, res) => {
    let result = await cita.find().sort({ fecha: 1 }).toArray();
    res.json(result);
}

export { getAll}