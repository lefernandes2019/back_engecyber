import AtividadeService from "../services/atividade.service.js";

async function getAtividades(req, res, next){
    try {
        const atividades = await AtividadeService.getAtividades();
        
        res.send(atividades);

    } catch (error) {
        next(error)
    }
}

async function postAtividade(req, res, next){
    try {
        const nomeAti = req.body.nome;
        const areaAti = parseInt(req.body.area);
        const periodicidadeAti = req.body.periodicidade;

        const result = await AtividadeService.postAtividade(nomeAti, areaAti, periodicidadeAti);

        res.send(result);
    } catch (error) {
        next(error)
    }
}

async function putAtividade(req, res, next){
    try {
        const idAti = parseInt(req.params.id);

        const nomeAti = req.body.nome;
        const areaAti = req.body.area;
        const periodicidadeAti = req.body.periodicidade;

        const result = await AtividadeService.putAtividade(idAti, nomeAti, areaAti, periodicidadeAti);

        res.send(result);
    } catch (error) {
        next(error)
    }
}

async function deleteAtividade(req, res, next){
    try {
        const idAti = parseInt(req.params.id); 

        const result = await AtividadeService.deleteAtividade(idAti);

        res.send(result);
    } catch (error) {
        next(error)
    }
}

// async function getAreas(req, res, next){
//     try {
//         const areas = await AtividadeService.getAreas();
        
//         res.send(areas);

//     } catch (error) {
//         next(error)
//     }
// }

// async function postArea(req, res, next){
//     try {
//         const nomeArea = req.body.area;

//         const result = await AtividadeService.postArea(nomeArea);

//         res.send(result);
//     } catch (error) {
//         next(error)
//     }
// }

export default {
    getAtividades,
    postAtividade,
    putAtividade,
    deleteAtividade,
    // getAreas,
    // postArea
}