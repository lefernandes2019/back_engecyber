import MaterialRepository from "../repositories/material.repository.js";

async function getMateriais(){
    return await MaterialRepository.selectMateriais();
}

async function postMaterial(descricaoMat){
    return await MaterialRepository.insertMaterial(descricaoMat);
}

async function putMaterial(idMat, descricaoMat){
    return await MaterialRepository.updateMaterial(idMat, descricaoMat);
}

async function deleteMaterial(idMat){
    return await MaterialRepository.deleteMaterial(idMat);
}

export default {
    getMateriais,
    postMaterial,
    putMaterial,
    deleteMaterial,
}