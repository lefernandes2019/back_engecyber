import CronogramaAtividadeRepository from "../repositories/cronogramaAtividade.repository.js";

async function getCronograma(idResidencialCro, mesCro){
    return await CronogramaAtividadeRepository.selectCronograma(idResidencialCro, mesCro);
}

export default {
    getCronograma,
}