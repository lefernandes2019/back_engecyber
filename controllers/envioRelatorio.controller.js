import EnvioRelatorioService from "../services/envioRelatorio.service.js";

async function getEnvioRelatorios(req, res, next){
    try {
        const envioRelatorios = await EnvioRelatorioService.getEnvioRelatorios();

        res.send(envioRelatorios);
        
    } catch (error) {
        next(error)
    }
}

async function postEnvioRelatorio(req, res, next){
    try {
        const residencialEnvRel = req.body.residencial;
        const nomeArquivoEnvRel = req.body.nome;
        const dtReferenciaEnvRel = req.body.data;

        const result = await EnvioRelatorioService.postEnvioRelatorio(residencialEnvRel, nomeArquivoEnvRel, dtReferenciaEnvRel);

        res.send(result);

    } catch (error) {
        next(error)
    }
}

async function deleteEnvioRelatorio(req, res, next){
    try {
        const idEnvRel = parseInt(req.params.id);

        const result = await EnvioRelatorioService.deleteEnvioRelatorio(idEnvRel);

        res.send(result);

    } catch (error) {
        next(error)
    }
}

export default {
    getEnvioRelatorios,
    postEnvioRelatorio,
    deleteEnvioRelatorio,
}