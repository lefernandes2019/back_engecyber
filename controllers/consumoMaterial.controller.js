import ConsumoMaterialService from "../services/consumoMaterial.service.js";

async function getConsumoMateriais(req, res, next){
    try {
        const consumoMateriais = await ConsumoMaterialService.getConsumoMateriais();
        
        res.send(consumoMateriais);

    } catch (error) {
        next(error)
    }
}

async function getConsumoMateriaisPorChamado(req, res, next){
    try {
        const idChamado = parseInt(req.params.id);
        const consumoMateriais = await ConsumoMaterialService.getConsumoMateriaisPorChamado(idChamado);
        
        res.send(consumoMateriais);

    } catch (error) {
        next(error)
    }
}

async function putConsumoMaterial(req, res, next){
    try {
        const idConsMat = parseInt(req.params.id);

        const descricaoConsMat = req.body.material;
        const quantidadeConsMat = req.body.quantidade;

        const result = await ConsumoMaterialService.putConsumoMaterial(idConsMat, descricaoConsMat, quantidadeConsMat);

        res.send(result);
    } catch (error) {
        next(error)
    }
}

export default {
    getConsumoMateriais,
    getConsumoMateriaisPorChamado,
    putConsumoMaterial,
}