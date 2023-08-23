import { con } from "../../config/connection/atlas.js";

export const incrementID = async (coleccion) => {
    try {
        let db = await con();
        const sequenceDocument = await db.collection("autoincrement").findOneAndUpdate(
            { _id: `${coleccion}Id` },
            { $inc: { sequence_value: 1 } },
            { returnDocument: "after" }
        );
        return sequenceDocument.value.sequence_value;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};