import ChamadoService from "../services/chamados.service.js";

async function getChamados(req, res, next){
    try {
        const chamados = await ChamadoService.getChamados();

        res.send(chamados);
    } catch (error) {
        next(error);
    }
}

async function getPesquisaChamados(req, res, next){
    try {
        const idResidencialCha = parseInt(req.params.idResidencial);
        const statusCha = req.params.status;

        const result = await ChamadoService.getPesquisaChamados(idResidencialCha, statusCha);
        
        res.send(result);
    } catch (error) {
        next(error);   
    }
}

async function putAtenderChamado(req, res, next){
    try {
        const chamado = req.body.chamado

        const result = await ChamadoService.putAtenderChamado(chamado);
        
        res.send(result);
    } catch (error) {
        next(error);
    }
}

async function putFinalizarChamado(req, res, next){
    try {
        const chamado = req.body.chamado

        const result = await ChamadoService.putFinalizarChamado(chamado);
        
        res.send(result);
    } catch (error) {
        next(error);
    }
}

async function deleteChamado(req, res, next){
    try {
        const idCha = parseInt(req.params.id);

        const result = await ChamadoService.deleteChamado(idCha);
        
        res.send(result);
    } catch (error) {
        next(error);
    }
}


export default {
    getChamados,
    getPesquisaChamados,
    putAtenderChamado,
    putFinalizarChamado,
    deleteChamado,
}