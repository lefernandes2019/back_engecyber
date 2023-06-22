import CondominioService from "../services/condominio.service.js";

async function getCondominios(req, res, next){
    try {
        const condominios = await CondominioService.getCondominios();
        
        res.send(condominios);

    } catch (error) {
        next(error)
    }
}

async function postCondominio(req, res, next){
    try {
        const nomeRes = req.body.nome;
        const enderecoRes = req.body.endereco;
        const numeroBlocosRes = req.body.numeroBlocos;
        const dataCadRes = req.body.data;

        const result = await CondominioService.postCondominio(nomeRes, enderecoRes, numeroBlocosRes, dataCadRes);

        res.send(result);

    } catch (error) {
        next(error)
    }
}

async function putCondominio(req, res, next){
    try {

        const idRes = parseInt(req.params.id);

        const nomeRes = req.body.nome;
        const enderecoRes = req.body.endereco;
        const numeroBlocosRes = req.body.numeroBlocos;
        const dataCadRes = req.body.data;

        const result = await CondominioService.putCondominio(idRes, nomeRes, enderecoRes, numeroBlocosRes, dataCadRes);

        res.send(result);

    } catch (error) {
        next(error)
    }
}

async function deleteCondominio(req, res, next){
    try {
        const idRes = parseInt(req.params.id);

        const result = await CondominioService.deleteCondominio(idRes);

        res.send(result);

    } catch (error) {
        next(error)
    }
}

export default {
    getCondominios,
    postCondominio,
    putCondominio,
    deleteCondominio
}