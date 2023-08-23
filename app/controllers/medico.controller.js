import { con } from '../../config/connection/atlas.js';

const db = await con();
const cita = db.collection('medico');

const getEspecialidad = async (req, res) => {
    try {
        let result = await cita.find({ especialidad: req.query.especialidad }).toArray();
        if (!req.query.especialidad) return res.status(404).json({ status: 404, message: 'Especialidad not found' })
        res.json(result);
    } catch (error) {
        res.status(404).json({status:404,message:'Especialidad not found'})
    }
}

export {getEspecialidad}