import AtividadeRepository from "../repositories/atividade.repository.js"

async function getAtividades(){
    return await AtividadeRepository.selectAtividades();
}

async function postAtividade(nomeAti, areaAti, periodicidadeAti){    
    return await AtividadeRepository.insertAtividade(nomeAti, areaAti, periodicidadeAti);
}

async function putAtividade(idAti, nomeAti, areaAti, periodicidadeAti){    
    return await AtividadeRepository.updateAtividade(idAti, nomeAti, areaAti, periodicidadeAti);
}

async function deleteAtividade(idAti){
    return await AtividadeRepository.deleteAtividade(idAti)
}

// async function getAreas(){
//     return await AtividadeRepository.selectAreas();
// }

// async function postArea(nomeArea){    
//     return await AtividadeRepository.insertArea(nomeArea);
// }

export default {
    getAtividades,
    postAtividade,
    putAtividade,
    deleteAtividade,
    // getAreas,
    // postArea
}