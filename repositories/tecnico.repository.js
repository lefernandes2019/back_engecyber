import dbConnection from "../database/mysqlConnection.js";

async function selectTecnicos(){
    try {
        const [rows] = await dbConnection.query("SELECT id AS idTec, codigo AS codigoTec, cargo AS cargoTec, nome AS nomeTec, telefone AS telefoneTec FROM usuario WHERE status = 0 AND (cargo = 3 OR cargo = 4 OR cargo = 5) ORDER BY nome ASC");

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function insertTecnico(codigoTec, nomeTec, telefoneTec, cargoTec){
    try {
        const [rowSindico] = await dbConnection.query("SELECT id FROM usuario WHERE codigo = ?", [codigoTec]);

        if(rowSindico.length > 0) return {codigoEmUso: true}

        await dbConnection.query("INSERT INTO usuario (codigo, nome, telefone, cargo) VALUES (?, ?, ?, ?)", [codigoTec, nomeTec, telefoneTec, cargoTec]);
        return {codigoEmUso: false}

    } catch (error) {
        const sqlMessage = error.sqlMessage;

        if(sqlMessage.includes('Duplicate')) return {codigoEmUso: true}
        
        throw error;
    } 
}

async function updateTecnico1(idTec, codigoTec, nomeTec, telefoneTec, cargoTec){
    try {
        const [rowTecnico] = await dbConnection.query("SELECT id FROM usuario WHERE codigo = ?", [codigoTec]);

        if(rowTecnico.length === 0){
            await dbConnection.query("UPDATE usuario SET codigo = ?, nome = ?, telefone = ?, cargo = ? WHERE id = ?", [codigoTec, nomeTec, telefoneTec, cargoTec, idTec]);
            return {codigoEmUso: false}
        }

        if(rowTecnico[0].id !== idTec) return {codigoEmUso: true}

    } catch (error) {
        const sqlMessage = error.sqlMessage;

        if(sqlMessage.includes('Duplicate')) return {codigoEmUso: true}
        
        throw error;
    } 
}

async function updateTecnico(idTec, codigoTec, nomeTec, telefoneTec, cargoTec){
    try {
        const [rowTecnico] = await dbConnection.query("SELECT id FROM usuario WHERE codigo = ?", [codigoTec]);
        var mesmoTecnico = false;

        if(rowTecnico.length > 0){

            for (var row of rowTecnico){
                if (row.id === idTec) {                    
                    mesmoTecnico = true;
                }
            }

            if(!mesmoTecnico) return {codigoEmUso: true}
        } 

        if(rowTecnico.length === 0 || mesmoTecnico === true){
            await dbConnection.query("UPDATE usuario SET codigo = ?, nome = ?, telefone = ?, cargo = ? WHERE id = ?", [codigoTec, nomeTec, telefoneTec, cargoTec, idTec]);
            return {codigoEmUso: false}
        }

    } catch (error) {
        const sqlMessage = error.sqlMessage;

        if(sqlMessage.includes('Duplicate')) return {codigoEmUso: true}
        
        throw error;
    } 
}

async function deleteTecnico(idTec){
    try {
        // const [rows] = await dbConnection.query("DELETE FROM usuario WHERE id = ?", [idTec]);
        const [rows] = await dbConnection.query("UPDATE usuario SET status = 1 WHERE id = ?", [idTec]);

        return rows;
    } catch (error) {
        throw error;
    } 
}

export default {
    selectTecnicos,
    insertTecnico,
    updateTecnico,
    deleteTecnico
}