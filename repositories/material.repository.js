import dbConnection from "../database/mysqlConnection.js";

async function selectMateriais(){
    try {
        const [rows] = await dbConnection.query("SELECT codigo AS idMat, nome AS descricaoMat FROM material WHERE ativo = 1 ORDER BY nome ASC");

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function insertMaterial(descricaoMat){
    try {
        const [rows] = await dbConnection.query("INSERT INTO material (nome) VALUES (?)", [descricaoMat]);

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function updateMaterial(idMat, descricaoMat){
    try {
        const [rows] = await dbConnection.query("UPDATE material SET nome = ? WHERE codigo = ?", [descricaoMat, idMat]);

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function deleteMaterial(idMat){
    try {
        // const [rows] = await dbConnection.query("DELETE FROM material WHERE idMat = ?", [id]);
         const [rows] = await dbConnection.query("UPDATE material SET ativo = 0 WHERE codigo = ?", [idMat]);

        return rows;
    } catch (error) {
        throw error;
    } 
}

export default {
    selectMateriais,
    insertMaterial,
    updateMaterial,
    deleteMaterial
}