import dbConnection from "../database/mysqlConnection.js";

async function selectTotalChamados(dataIni, dataFim){
    try {
        const [rows] = await dbConnection.query(`
        SELECT abertos.idRes AS idRes, abertos.nomeRes AS nomeRes, abertos.chamadosAbertos, fechados.chamadosFechados
        FROM
            (SELECT condominio_id AS idRes, nome_condominio AS nomeRes, COUNT(status) AS chamadosAbertos
            FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id WHERE data_abertura_chamado BETWEEN ? AND ?
            GROUP BY nome_condominio) abertos
        LEFT JOIN
            (SELECT nome_condominio AS nomeRes, COUNT(status) AS chamadosFechados
            FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id WHERE status = 1 AND data_abertura_chamado BETWEEN ? AND ?
            GROUP BY nome_condominio) fechados
        ON abertos.nomeRes = fechados.nomeRes ORDER BY nomeRes
        `,[dataIni, dataFim, dataIni, dataFim]);
   
        return rows
    } catch (error) {
        throw error;
    } 
}

async function selectChamadosPorResidencial(residencial, dataIni, dataFim){
    try {
        const [rows] = await dbConnection.query(`
        SELECT chamado.id AS idCha, descricao AS descricaoCha, data_abertura_chamado AS dataAberturaCha, data_finalizacao AS dataFinalizacaoCha, nome_condominio AS nomeRes FROM chamado INNER JOIN condominio ON chamado.condominio_id = condominio.id WHERE chamado.condominio_id = ? AND chamado.data_abertura_chamado BETWEEN ? AND ? ORDER BY chamado.data_abertura_chamado ASC
        `,[residencial, dataIni, dataFim]);
        
        return rows
    } catch (error) {
        throw error;
    } 
}

async function selectConsumoMaterialPorResidencial(residencial, dataIni, dataFim){
    try {
        const [rows] = await dbConnection.query(`
        SELECT material_usado.id_material AS idConsMat, chamado.sindico_id AS solicitanteCha, chamado.descricao AS descricaoCha, chamado.data_abertura_chamado AS dataAberturaCha, chamado.data_finalizacao AS dataFinalizacaoCha, usuario.nome AS nomeTec, material.nome AS descricaoMat, material_usado.quantidade AS quantidadeConsMat, chamado.comentario AS observacoesTecnicasCha, condominio.nome_condominio AS nomeRes FROM material_usado INNER JOIN chamado ON material_usado.chamado_id = chamado.id INNER JOIN usuario ON usuario.id = chamado.usuario_finalizacao_chamado_id INNER JOIN material ON material_usado.material_codigo = material.codigo INNER JOIN condominio ON condominio.id = chamado.condominio_id WHERE chamado.condominio_id = ? AND chamado.data_finalizacao BETWEEN ? AND ? ORDER BY chamado.data_finalizacao ASC
        `,[residencial, dataIni, dataFim]);
   
        return rows
    } catch (error) {
        throw error;
    } 
}

async function selectProdutividadeTecnica(dataIni, dataFim){
    try {
        const [rows] = await dbConnection.query(`
        SELECT usuario.id AS idTec, usuario.nome AS nomeTec, usuario.cargo AS cargoTec, COUNT(usuario.nome) AS quantidade FROM chamado INNER JOIN usuario ON chamado.usuario_finalizacao_chamado_id = usuario.id WHERE chamado.data_finalizacao BETWEEN ? AND ? GROUP BY usuario.nome ORDER BY Quantidade DESC
        `,[dataIni, dataFim]);
   
        return rows
    } catch (error) {
        throw error;
    } 
}

export default {
    selectTotalChamados,
    selectChamadosPorResidencial,
    selectConsumoMaterialPorResidencial,
    selectProdutividadeTecnica
}