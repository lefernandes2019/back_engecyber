import MaterialService from "../services/material.service.js";

async function getMateriais(req, res, next){
    try {
        const materiais = await MaterialService.getMateriais();
        
        res.send(materiais);

    } catch (error) {
        next(error)
    }
}

async function postMaterial(req, res, next){
    try {
        const descricaoMat = req.body.descricao;

        const result = await MaterialService.postMaterial(descricaoMat);

        res.send(result);

    } catch (error) {
        next(error)
    }
}

async function putMaterial(req, res, next){
    try {
        const idMat = parseInt(req.params.id);

        const descricaoMat = req.body.descricao;

        const result = await MaterialService.putMaterial(idMat, descricaoMat);

        res.send(result);

    } catch (error) {
        next(error)
    }
}

async function deleteMaterial(req, res, next){
    try {
        const idMat = parseInt(req.params.id);

        const result = await MaterialService.deleteMaterial(idMat);

        res.send(result);
        
    } catch (error) {
        next(error)
    }
}

export default {
    getMateriais,
    postMaterial,
    putMaterial,
    deleteMaterial,
}