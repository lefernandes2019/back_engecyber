import dbConnection from "../database/mysqlConnection.js";

async function selectCondominios(){
    try {
        const [rows] = await dbConnection.query("SELECT id AS idRes, nome_condominio AS nomeRes, data_cadastro AS dataRes, quantidade_blocos AS numeroBlocos, logradouro, bairro, cidade, numero FROM condominio WHERE ativo = 1 ORDER BY nome_condominio ASC");

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function insertCondominio(nomeRes, enderecoRes, numeroBlocosRes, dataCadRes){
    try {
        const [rows] = await dbConnection.query("INSERT INTO condominio (nome_condominio, logradouro, quantidade_blocos, data_cadastro, ativo) VALUES (?, ?, ?, ?, 1)", [nomeRes, enderecoRes, numeroBlocosRes, dataCadRes]);

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function updateCondominio(idRes, nomeRes, enderecoRes, numeroBlocosRes, dataCadRes){
    try {
        const [rows] = await dbConnection.query("UPDATE condominio SET nome_condominio = ?, logradouro = ?, quantidade_blocos = ?, data_cadastro = ? WHERE id = ?", [nomeRes, enderecoRes, numeroBlocosRes, dataCadRes, idRes]);

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function deleteCondominio(idRes){
    try {
        // const [rows] = await dbConnection.query("DELETE FROM condominio WHERE idRes = ?", [idRes]);
        const [rows] = await dbConnection.query("UPDATE condominio SET ativo = 0 WHERE id = ?", [idRes]);

        return rows;
    } catch (error) {
        throw error;
    } 
}

export default {
    selectCondominios,
    insertCondominio,
    updateCondominio,
    deleteCondominio
}