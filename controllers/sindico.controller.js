import SindicoService from "../services/sindico.service.js";

async function getSindicos(req, res, next){
    try {
        const sindicos = await SindicoService.getSindicos();
        
        res.send(sindicos);
    } catch (error) {
        next(error)
    }
}

async function postSindico(req, res, next){
    try {
        const nomeSin = req.body.nome;
        const telefoneSin = req.body.telefone;
        const codigoSin = req.body.codigo;
        const tipoSin = parseInt(req.body.tipo);
        const idResidencial = req.body.residencial;

        const result = await SindicoService.postSindico(nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial);

        res.send(result);
    } catch (error) {
        next(error)
    }
}

async function putSindico(req, res, next){
    try {
        const idSin = parseInt(req.params.id);

        const nomeSin = req.body.nome;
        const telefoneSin = req.body.telefone;
        const codigoSin = req.body.codigo;
        const tipoSin = parseInt(req.body.tipo);
        const idResidencial = req.body.residencial;

        const result = await SindicoService.putSindico(idSin, nomeSin, telefoneSin, codigoSin, tipoSin, idResidencial);
        
        res.send(result);
    } catch (error) {
        next(error)
    }
}

async function deleteSindico(req, res, next){
    try {
        const idSin = parseInt(req.params.id);

        const result = await SindicoService.deleteSindico(idSin);
        
        res.send(result);
    } catch (error) {
        next(error)
    }
}

async function addSindico(req, res, next){
    try {
        const nomeSin = req.body.nome;
        const tipoSin = req.body.tipo;
        const telefoneSin = req.body.telefone;
        const codigoSin = req.body.codigo;
        const idResidencial = req.body.residencial;

        const result = await SindicoService.addSindico(nomeSin, tipoSin, telefoneSin, codigoSin, idResidencial);

        res.send(result);
    } catch (error) {
        next(error)
    }
}

export default {
    getSindicos,
    postSindico,
    putSindico,
    deleteSindico,
    addSindico
}