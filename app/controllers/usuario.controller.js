import { con } from '../../config/connection/atlas.js';

const db = await con();
const usuario = await db.collection('usuario');

const getAll = async (req, res) => {
    try {
        const result = await usuario.find().sort({ nombre :1}).toArray()
        res.send(result);
        
    } catch (error) {
        res.status(404).json({status:404,message:"Data was not found"})
    }
}

export {getAll}