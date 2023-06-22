import dbConnection from "../database/mysqlConnection.js";

async function selectAdministradores(){
    try {
        const [rows] = await dbConnection.query("SELECT id AS idUsu, user AS usuarioUsu, nome AS nomeUsu FROM administrador");
   
        return rows
    } catch (error) {
        throw error;
    } 
}

async function insertAdministrador(nomeUsu, usuarioUsu, encryptPassword){
    try {
        const [result] = await dbConnection.query("INSERT INTO administrador (nome, user, password) VALUES (?, ?, ?)", [nomeUsu, usuarioUsu, encryptPassword]);

        return result
    } catch (error) {
        throw error;
    } 
}

async function deleteAdministrador(idUsu){
    try {
        const [result] = await dbConnection.query("DELETE FROM administrador WHERE id = ?", [idUsu]);

        return result
    } catch (error) {
        throw error;
    } 
}

export default {
    selectAdministradores,
    insertAdministrador,
    deleteAdministrador
}