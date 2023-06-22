import SindicoRepository from "../repositories/sindico.repository.js";

async function getSindicos(){
    return await SindicoRepository.selectSindicos();
}

async function postSindico(nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial){
    return await SindicoRepository.insertSindico(nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial);
}

async function putSindico(idSin, nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial){
    return await SindicoRepository.updateSindico(idSin, nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial);
}

async function deleteSindico(idSin){
    return await SindicoRepository.deleteSindico(idSin)
}

async function addSindico(nomeSin, tipoSin, telefoneSin, codigoSin, idResidencial){
    return await SindicoRepository.addSindico(nomeSin, tipoSin, telefoneSin, codigoSin, idResidencial);
}

export default {
    getSindicos,
    postSindico,
    putSindico,
    deleteSindico,
    addSindico
}