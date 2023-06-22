import CronogramaAtividadeService from "../services/cronogramaAtividade.service.js";

async function getCronograma(req, res, next){
    try {
        const idResidencialCro = parseInt(req.params.idResidencial)
        const mesCro = parseInt(req.params.mes);

        const cronograma = await CronogramaAtividadeService.getCronograma(idResidencialCro, mesCro);
        
        res.send(cronograma);

    } catch (error) {
        next(error)
    }
}

export default {
    getCronograma,
}