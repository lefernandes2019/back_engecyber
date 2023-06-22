import CondominioRepository from "../repositories/condominio.repository.js";

async function getCondominios(){
    return await CondominioRepository.selectCondominios();
}

async function postCondominio(nomeRes, enderecoRes, numeroBlocosRes, dataCadRes){
    return await CondominioRepository.insertCondominio(nomeRes, enderecoRes, numeroBlocosRes, dataCadRes);
}

async function putCondominio(idRes, nomeRes, enderecoRes, numeroBlocosRes, dataCadRes){
    return await CondominioRepository.updateCondominio(idRes, nomeRes, enderecoRes, numeroBlocosRes, dataCadRes);
}

async function deleteCondominio(idRes){
    return await CondominioRepository.deleteCondominio(idRes);
}

export default {
    getCondominios,
    postCondominio,
    putCondominio,
    deleteCondominio
}