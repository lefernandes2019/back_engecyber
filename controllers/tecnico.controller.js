import TecnicoService from "../services/tecnico.service.js";

async function getTecnicos(req, res, next){
    try {
        const tecnicos = await TecnicoService.getTecnicos();
        
        res.send(tecnicos);

    } catch (error) {
        next(error)
    }
}

async function postTecnico(req, res, next){
    try {
        const codigoTec = req.body.codigo;
        const nomeTec = req.body.nome;
        const telefoneTec = req.body.telefone;
        const cargoTec = parseInt(req.body.cargo);

        const result = await TecnicoService.postTecnico(codigoTec, nomeTec, telefoneTec, cargoTec);

        res.send(result);
    } catch (error) {
        next(error)
    }
}

async function putTecnico(req, res, next){
    try {
        const idTec = parseInt(req.params.id);

        const codigoTec = req.body.codigo;
        const nomeTec = req.body.nome;
        const telefoneTec = req.body.telefone;
        const idCargoTec = req.body.cargo;

        const result = await TecnicoService.putTecnico(idTec, codigoTec, nomeTec, telefoneTec, idCargoTec);
        
        res.send(result);
    } catch (error) {
        next(error)
    }
}

async function deleteTecnico(req, res, next){
    try {
        const idTec = parseInt(req.params.id);

        const result = await TecnicoService.deleteTecnico(idTec);
        
        res.send(result);
    } catch (error) {
        next(error)
    }
}

export default {
    getTecnicos,
    postTecnico,
    putTecnico,
    deleteTecnico
}