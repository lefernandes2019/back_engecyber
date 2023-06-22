import ChamadosRepository from "../repositories/chamados.repository.js";

async function getChamados(){
    return await ChamadosRepository.selectChamados();
}

async function getPesquisaChamados(idResidencialCha, statusCha){
    return await ChamadosRepository.selectPesquisaChamados(idResidencialCha, statusCha);
}

async function putAtenderChamado(chamado){
    return await ChamadosRepository.atenderChamado(chamado);
}

async function putFinalizarChamado(chamado){
    return await ChamadosRepository.finalizarChamado(chamado);
}

async function deleteChamado(idCha){
    return await ChamadosRepository.deleteChamado(idCha);
}


export default {
    getChamados,
    getPesquisaChamados,
    putAtenderChamado,
    putFinalizarChamado,
    deleteChamado,
}