import TecnicoRepository from "../repositories/tecnico.repository.js";

async function getTecnicos(){
    return await TecnicoRepository.selectTecnicos();
}

async function postTecnico(codigoTec, nomeTec, telefoneTec, cargoTec){
    return await TecnicoRepository.insertTecnico(codigoTec, nomeTec, telefoneTec, cargoTec);
}

async function putTecnico(idTec, codigoTec, nomeTec, telefoneTec, cargoTec){
    return await TecnicoRepository.updateTecnico(idTec, codigoTec, nomeTec, telefoneTec, cargoTec);
}

async function deleteTecnico(idTec){
    return await TecnicoRepository.deleteTecnico(idTec);
}

export default {
    getTecnicos,
    postTecnico,
    putTecnico,
    deleteTecnico
}