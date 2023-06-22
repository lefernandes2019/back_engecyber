import dbConnection from "../database/mysqlConnection.js";

async function selectCronograma(idResidencialCro, mesCro){

    try {
        const [row] = await dbConnection.query('SELECT data_cadastro AS dataRes FROM condominio WHERE ativo = 1 AND id = ?', [idResidencialCro])
        
        const [residencial] = row;
        let mesResidencial = residencial.dataRes.getMonth();
        mesResidencial++
        
        if(mesResidencial === mesCro){
            const [rows] = await dbConnection.query("SELECT id AS idAti, nome_atividade AS nomeAti, area AS nomeAre, periodicidade AS periodicidadeAti FROM atividade ORDER BY periodicidade ASC");
            return rows; 
        }

        if((mesResidencial + 3) === mesCro){
            const [rows] = await dbConnection.query("SELECT id AS idAti, nome_atividade AS nomeAti, area AS nomeAre, periodicidade AS periodicidadeAti FROM atividade WHERE periodicidade = 5 OR periodicidade = 6 OR periodicidade = 0 ORDER BY periodicidade ASC");
            return rows; 
        }

        if (mesResidencial + 3 > 12){
            if((mesResidencial + 3 - 12) === mesCro){
                const [rows] = await dbConnection.query("SELECT id AS idAti, nome_atividade AS nomeAti, area AS nomeAre, periodicidade AS periodicidadeAti FROM atividade WHERE periodicidade = 5 OR periodicidade = 6 OR periodicidade = 0 ORDER BY periodicidade ASC");
                return rows;     
            }
        }

        if((mesResidencial + 6) === mesCro){
            const [rows] = await dbConnection.query("SELECT id AS idAti, nome_atividade AS nomeAti, area AS nomeAre, periodicidade AS periodicidadeAti FROM atividade WHERE  periodicidade = 5 OR periodicidade = 6 OR periodicidade = 0 OR periodicidade = 3 ORDER BY periodicidade ASC");
            return rows; 
        }

        if (mesResidencial + 6 > 12){
            if((mesResidencial + 6 - 12) === mesCro){
                const [rows] = await dbConnection.query("SELECT id AS idAti, nome_atividade AS nomeAti, area AS nomeAre, periodicidade AS periodicidadeAti FROM atividade WHERE periodicidade = 5 OR periodicidade = 6 OR periodicidade = 0 OR periodicidade = 3 ORDER BY periodicidade ASC");
                return rows;     
            }
        }

        if((mesResidencial + 9) === mesCro){
            const [rows] = await dbConnection.query("SELECT id AS idAti, nome_atividade AS nomeAti, area AS nomeAre, periodicidade AS periodicidadeAti FROM atividade WHERE periodicidade = 5 OR periodicidade = 6 OR periodicidade = 0 ORDER BY periodicidade ASC");
            return rows; 
        }

        if (mesResidencial + 9 > 12){
            if((mesResidencial + 9 - 12) === mesCro){
                const [rows] = await dbConnection.query("SELECT id AS idAti, nome_atividade AS nomeAti, area AS nomeAre, periodicidade AS periodicidadeAti FROM atividade WHERE periodicidade = 5 OR periodicidade = 6 OR periodicidade = 0 ORDER BY periodicidade ASC");
                return rows;     
            }
        }

        const [rows] = await dbConnection.query("SELECT id AS idAti, nome_atividade AS nomeAti, area AS nomeAre, periodicidade AS periodicidadeAti FROM atividade WHERE periodicidade != 4 AND periodicidade != 3 ORDER BY periodicidade ASC");
        return rows;

    } catch (error) {
        throw error;
    } 
}

export default {
    selectCronograma
}