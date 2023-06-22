import EnvioRelatorioRepository from "../repositories/envioRelatorio.repository.js";

async function getEnvioRelatorios(){
  return await EnvioRelatorioRepository.selectEnvioRelatorios();
}

async function postEnvioRelatorio(residencialEnvRel, nomeArquivoEnvRel, dtReferenciaEnvRel){  
  return await EnvioRelatorioRepository.insertEnvioRelatorio(residencialEnvRel, nomeArquivoEnvRel, dtReferenciaEnvRel);
}

async function deleteEnvioRelatorio(idEnvRel){
  return await EnvioRelatorioRepository.deleteEnvioRelatorio(idEnvRel);
}

export default {
    getEnvioRelatorios,
    postEnvioRelatorio,
    deleteEnvioRelatorio,
}