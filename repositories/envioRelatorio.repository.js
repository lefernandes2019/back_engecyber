async function selectEnvioRelatorios(){
    try {
        const [rows] = await dbConnection.query("SELECT * FROM material");

        return rows;
    } catch (error) {
        throw error;
    } 
}

async function insertEnvioRelatorio(residencialEnvRel, nomeArquivoEnvRel, dtReferenciaEnvRel){
    try {
        return `postEnvioRelatorio - ${residencialEnvRel} - ${nomeArquivoEnvRel} - ${dtReferenciaEnvRel}`;
    } catch (error) {
        throw error;
    } 
}

async function deleteEnvioRelatorio(idEnv){
  // Criar Trigger para deletar a cada 90 dias os false deleted
    try {
        return `deleteEnvioRelatorio - ${idEnv}`;
    } catch (error) {
        throw error;
    } 
}

export default {
    selectEnvioRelatorios,
    insertEnvioRelatorio,
    deleteEnvioRelatorio
}