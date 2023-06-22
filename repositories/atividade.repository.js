import dbConnection from "../database/mysqlConnection.js";

async function selectAtividades(){
    try {
        const [rows] = await dbConnection.query("SELECT id AS idAti, area AS nomeAre, nome_atividade AS nomeAti, periodicidade AS periodicidadeAti FROM atividade ORDER BY nome_atividade ASC");
        return rows;

    } catch (error) {
        throw error;
    } 
}

async function insertAtividade(nomeAti, areaAti, periodicidadeAti){
    try {
        const [result] = await dbConnection.query("INSERT INTO atividade (nome_atividade, area, periodicidade) VALUES (?, ?, ?)", [nomeAti, areaAti, periodicidadeAti]);

        return result
    } catch (error) {
        throw error;
    } 
}

async function updateAtividade(idAti, nomeAti, areaAti, periodicidadeAti){
    try {
        const [result] = await dbConnection.query("UPDATE atividade SET nome_atividade = ?, area = ?, periodicidade = ? WHERE id = ?", [nomeAti, areaAti, periodicidadeAti, idAti]);

        return result
    } catch (error) {
        throw error;
    } 
}

async function deleteAtividade(idAti){
    try {
        const [result] = await dbConnection.query("DELETE FROM atividade WHERE id = ?", [idAti]);
        // const [result] = await dbConnection.query("UPDATE atividade SET deletedAti = 1 WHERE idAti = ?", [idAti]);

        return result
    } catch (error) {
        throw error;
    } 
}

// async function selectAreas(){
//     try {
//         const [rows] = await dbConnection.query("SELECT * FROM area");

//         return rows;

//     } catch (error) {
//         throw error;
//     } 
// }

// async function insertArea(nomeArea){
//     try {
//         const [result] = await dbConnection.query("INSERT INTO area (nomeAre) VALUES (?)", [nomeArea]);

//         return result
//     } catch (error) {
//         throw error;
//     } finally {

//     }
// }

export default {
    insertAtividade,
    selectAtividades,
    updateAtividade,
    deleteAtividade,
    // selectAreas,
    // insertArea,
}