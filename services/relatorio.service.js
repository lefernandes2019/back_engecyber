import RelatorioRepository from "../repositories/relatorio.repository.js";

async function postRelatorio(radio, residencial, dataIni, dataFim){

    switch (radio) {
        case 'relatorioTotalChamados':
            return await RelatorioRepository.selectTotalChamados(dataIni, dataFim);

        case 'relatorioChamadosResidencial':
            return await RelatorioRepository.selectChamadosPorResidencial(residencial, dataIni, dataFim);

        case 'relatorioConsumoMaterial':
            return await RelatorioRepository.selectConsumoMaterialPorResidencial(residencial, dataIni, dataFim);
            
        case 'relatorioProdutividade':
            return await RelatorioRepository.selectProdutividadeTecnica(dataIni, dataFim);
    }
    return
}

export default {
    postRelatorio,
}