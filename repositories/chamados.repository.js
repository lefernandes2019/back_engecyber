import dbConnection from "../database/mysqlConnection.js";

async function selectChamados(){
    try {
        const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id ORDER BY data_abertura_chamado DESC LIMIT 500");
        
        return rows;
    } catch (error) {
        throw error;
    } 
}

async function selectPesquisaChamados(idResidencialCha, statusCha){
    try {
        if(idResidencialCha === 0 && statusCha === 'Todos'){
            const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id ORDER BY data_abertura_chamado DESC LIMIT 500");
            return rows;
        }

        if(idResidencialCha === 0 && statusCha === 'AbertoAndamento'){            
            const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.status = 0 OR chamado.status = 2 ORDER BY data_abertura_chamado DESC LIMIT 300");
            return rows;        
        }
        
        if(idResidencialCha !== 0 && statusCha === 'AbertoAndamento'){
            const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.condominio_id = ? AND chamado.status = 0 OR chamado.condominio_id = ? AND chamado.status = 2 ORDER BY data_abertura_chamado DESC LIMIT 300", [idResidencialCha, idResidencialCha]);
            return rows;        
        }

        if(idResidencialCha === 0 && statusCha !== 'Todos'){
            
            if(statusCha === 'Aberto') {
                const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.status = 0 ORDER BY data_abertura_chamado DESC LIMIT 300");
                return rows;        
            }

            if(statusCha === 'Andamento') {
                const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.status = 2 ORDER BY data_abertura_chamado DESC LIMIT 300");
                return rows;  
            }

            if(statusCha === 'Finalizado') {
                const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.status = 1 ORDER BY data_abertura_chamado DESC LIMIT 300");
                return rows;  
            }

            if(statusCha === 'AbertoAndamento') {
                const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.status = 0 OR chamado.status = 2 ORDER BY data_abertura_chamado DESC LIMIT 300");
                return rows;  
            }
        }

        if(idResidencialCha !== 0 && statusCha === 'Todos'){
            const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.condominio_id = ? ORDER BY data_abertura_chamado DESC LIMIT 200", [idResidencialCha]);
            return rows;        
        }

        if(idResidencialCha !== 0 && statusCha !== 'Todos'){
            if(statusCha === 'Aberto') {
                const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.status = 0 AND chamado.condominio_id = ? ORDER BY data_abertura_chamado DESC LIMIT 100", [idResidencialCha]);
                return rows;        
            }

            if(statusCha === 'Andamento') {
                const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.status = 2 AND chamado.condominio_id = ? ORDER BY data_abertura_chamado DESC LIMIT 100", [idResidencialCha]);
                return rows;  
            }

            if(statusCha === 'Finalizado') {
                const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.status = 1 AND chamado.condominio_id = ? ORDER BY data_abertura_chamado DESC LIMIT 100", [idResidencialCha]);
                return rows;  
            }

            if(statusCha === 'AbertoAndamento') {
                const [rows] = await dbConnection.query("SELECT chamado.id AS idCha, chamado.descricao AS descricaoCha, u1.nome AS solicitanteCha, u1.cargo AS cargoCha,  condominio.nome_condominio AS nomeRes, chamado.data_abertura_chamado AS dataAberturaCha,  chamado.data_finalizacao AS dataFinalizacaoCha, u2.nome AS nomeTec, chamado.status AS statusCha, chamado.andar, chamado.bloco, chamado.area_externa, chamado.comentario AS observacoesTecnicasCha, chamado.foto AS imagemCha, chamado.foto2 AS imagemCha2 FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN usuario u1 ON chamado.sindico_id = u1.id LEFT JOIN usuario u2 ON chamado.usuario_finalizacao_chamado_id = u2.id WHERE chamado.condominio_id = ? AND chamado.status = 0 OR chamado.condominio_id = ? AND chamado.status = 2 ORDER BY data_abertura_chamado DESC LIMIT 200", [idResidencialCha, idResidencialCha]);
                return rows;  
            }       
        }       

    } catch (error) {
        throw error;
    } 
}

async function atenderChamado(chamado){
    try {
        const [rows] = await dbConnection.query("UPDATE chamado SET status = 2 WHERE id = ?", [chamado.idCha]);
        return rows;
    } catch (error) {
        throw error;
    } 
}

async function finalizarChamado(chamado){
    try {
        await dbConnection.query("UPDATE chamado SET status = 1 , data_finalizacao = ?, usuario_finalizacao_chamado_id = ? WHERE id = ?", [chamado.dataFinalizacaoCha, 283, chamado.idCha]);
        
        return;

    } catch (error) {
        throw error;
    } 
}

async function deleteChamado(idCha){
    try {
        await dbConnection.query("DELETE FROM material_usado WHERE chamado_id = ?", [idCha]);
        const [rows] = await dbConnection.query("DELETE FROM chamado WHERE id = ?", [idCha]);
        
        return rows;
    } catch (error) {

        throw error;
    } 
}

export default {
    selectChamados,
    selectPesquisaChamados,
    atenderChamado,
    finalizarChamado,
    deleteChamado
}