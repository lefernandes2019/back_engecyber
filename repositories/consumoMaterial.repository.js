import dbConnection from "../database/mysqlConnection.js";

async function selectConsumoMateriais(){
    try {
        const [rows] = await dbConnection.query("SELECT material_usado.id_material AS idConsMat, usuario.nome AS nomeTec, condominio.nome_condominio AS nomeRes, chamado.descricao AS descricaoCha, chamado.data_finalizacao AS dataFinalizacaoCha, material.nome AS descricaoMat, material_usado.quantidade AS quantidadeConsMat FROM material_usado INNER JOIN chamado ON material_usado.chamado_id = chamado.id INNER JOIN usuario ON chamado.usuario_finalizacao_chamado_id = usuario.id INNER JOIN condominio ON chamado.condominio_id = condominio.id INNER JOIN material ON material_usado.material_codigo = material.codigo WHERE chamado.status = 1 ORDER BY chamado.data_finalizacao DESC LIMIT 1500");
        
        return rows;
    } catch (error) {
        throw error;
    } 
}

async function selectConsumoMateriaisPorChamado(idChamado){
    try {
        
        const [rows] = await dbConnection.query("SELECT material.nome AS descricaoMat, material_usado.quantidade AS quantidadeConsMat from material_usado INNER JOIN material ON material_usado.material_codigo = material.codigo INNER JOIN chamado ON material_usado.chamado_id = chamado.id WHERE chamado.id = ?", [idChamado]);
        
        return rows;
    } catch (error) {
        throw error;
    } 
}

async function updateConsumoMaterial(idConsMat, materialConsMat, quantidadeConsMat){
    try {
        const [rows] = await dbConnection.query("UPDATE material_usado SET material_codigo = ?, quantidade = ? WHERE id_material = ?", [materialConsMat, quantidadeConsMat, idConsMat]);
        
        return rows;
    } catch (error) {
        throw error;
    } 
}

export default {
    selectConsumoMateriais,
    selectConsumoMateriaisPorChamado,
    updateConsumoMaterial
}