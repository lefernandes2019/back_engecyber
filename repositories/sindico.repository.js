import dbConnection from "../database/mysqlConnection.js";

async function selectSindicos(){
    try {
        const [rows] = await dbConnection.query("SELECT usuario.id AS idSin, usuario.codigo AS codigoSin, usuario.cargo AS tipoSin, usuario.nome AS nomeSin, usuario.telefone AS telefoneSin, condominio.nome_condominio AS nomeRes from usuario INNER JOIN condominio ON usuario.condominio_id = condominio.id WHERE status = 0 AND (usuario.cargo = 2 OR usuario.cargo = 9) ORDER BY nome ASC");

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function insertSindico(nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial){
    try {
        const [rowTecnico] = await dbConnection.query("SELECT id FROM usuario WHERE codigo = ?", [codigoSin]);
        
        if(rowTecnico.length > 0) return {codigoEmUso: true}

        await dbConnection.query("INSERT INTO usuario (nome, telefone, codigo, cargo, condominio_id) VALUES (?, ?, ?, ?, ?)", [nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial]);

        return {codigoEmUso: false}

    } catch (error) {
        const sqlMessage = error.sqlMessage;

        if(sqlMessage.includes('Duplicate')) return {codigoEmUso: true}
        
        throw error;
    } 
}

async function updateSindico1(idSin, nomeSin, telefoneSin, tipoSin, idResidencial){   
    try {
        await dbConnection.query("UPDATE usuario SET nome = ?, telefone = ?, cargo = ?, condominio_id = ? WHERE id = ?", [nomeSin, telefoneSin, tipoSin, idResidencial ,idSin]);

    } catch (error) {
        const sqlMessage = error.sqlMessage;

        if(sqlMessage.includes('Duplicate')) return {codigoEmUso: true}
        
        throw error;
    } 
}

async function updateSindico(idSin, nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial){   
    try {
        const [rowSindico1] = await dbConnection.query("SELECT id FROM usuario WHERE codigo = ?", [codigoSin]);
        var mesmoSindico = false;

        if(rowSindico1.length > 0){

            for (var row of rowSindico1){
                if (row.id === idSin) {                    
                    mesmoSindico = true;
                }
            }

            if(!mesmoSindico) return {codigoEmUso: true}
        } 
        
        if(rowSindico1.length === 0 || mesmoSindico === true){
            const [rowSindico2] = await dbConnection.query("SELECT id, nome, telefone, cargo FROM usuario WHERE id = ?", [idSin]);

            const nome = rowSindico2[0].nome;
            const telefone = rowSindico2[0].telefone;
            const cargo = rowSindico2[0].cargo;

            const [rowSindico3] = await dbConnection.query("SELECT id FROM usuario WHERE nome = ? AND telefone = ? AND cargo = ?", [nome, telefone, cargo]);

            if(rowSindico3.length > 1){
                for (var row of rowSindico3){
                    await dbConnection.query("UPDATE usuario SET codigo = ?, nome = ?, telefone = ?, cargo = ? WHERE id = ?", [codigoSin, nomeSin, telefoneSin, tipoSin, row.id]);
                }
            } 

            await dbConnection.query("UPDATE usuario SET codigo = ?, nome = ?, telefone = ?, cargo = ?, condominio_id = ? WHERE id = ?", [codigoSin, nomeSin, telefoneSin, tipoSin, idResidencial ,idSin]);
            return {codigoEmUso: false}
        }

    } catch (error) {
        const sqlMessage = error.sqlMessage;

        if(sqlMessage.includes('Duplicate')) return {codigoEmUso: true}
        
        throw error;
    } 
}

async function deleteSindico(idSin){
    try {        
        // const [rows] = await dbConnection.query("DELETE FROM usuario WHERE id = ?", [idSin]);
        const [rows] = await dbConnection.query("UPDATE usuario SET status = 1 WHERE id = ?", [idSin]);        

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function addSindico(nomeSin, tipoSin, telefoneSin, codigoSin, idResidencial){
    try {
        const [rows] = await dbConnection.query("INSERT INTO usuario (nome, cargo, telefone, codigo, condominio_id) VALUES (?, ?, ?, ?, ?)", [nomeSin, tipoSin, telefoneSin, codigoSin, idResidencial]);

        return rows;
    } catch (error) {
        throw error;
    } 
}

export default {
    selectSindicos,
    insertSindico,
    updateSindico,
    deleteSindico,
    addSindico
}