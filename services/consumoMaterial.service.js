import ConsumoMaterialRepository from "../repositories/consumoMaterial.repository.js";

async function getConsumoMateriais(){
    return await ConsumoMaterialRepository.selectConsumoMateriais();
}

async function getConsumoMateriaisPorChamado(idChamado){
    return await ConsumoMaterialRepository.selectConsumoMateriaisPorChamado(idChamado);
}

async function putConsumoMaterial(idConsMat, materialConsMat, quantidadeConsMat){
    return await ConsumoMaterialRepository.updateConsumoMaterial(idConsMat, materialConsMat, quantidadeConsMat);
}

export default {
    getConsumoMateriais,
    getConsumoMateriaisPorChamado,
    putConsumoMaterial,
}