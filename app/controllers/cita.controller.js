import { con } from "../../config/connection/atlas.js";

const db = await con();
const cita =  db.collection('cita');

const getAll = async (req, res) => {
    try {
        let result = await cita.find().sort({ fecha: 1 }).toArray();
        res.json(result);
    } catch (error) {
        res.status(404).json({status:404,message:'Couldn´t find cita error'})
    }
}

const getPaciente = async (req, res) => {
    try {
        let result = await cita.find({ datosUsuario: Number(req.params.id) }).toArray();
        res.send(result)
    } catch (error) {
        res.status(404).json({ status: 404, message: 'Couldn´t find a cita from that usuario' })
    }
} 
export { getAll,getPaciente}