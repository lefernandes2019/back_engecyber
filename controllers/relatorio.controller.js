import RalatorioService from "../services/relatorio.service.js";

async function postRelatorio(req, res, next){
    try {
        const radio = req.body.radio;
        const residencial = req.body.residencial;
        const dataIni = req.body.dataIni;
        const dataFim = req.body.dataFim;

        const result = await RalatorioService.postRelatorio(radio, residencial, dataIni, dataFim);

        res.send(result);

    } catch (error) {
        next(error)
    }
}

export default {
    postRelatorio,
}