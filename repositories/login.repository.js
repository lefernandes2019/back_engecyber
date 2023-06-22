import dbConnection from "../database/mysqlConnection.js";

async function loginWeb(usuarioLogin){
    try {
        const [rows] = await dbConnection.query("SELECT id AS idUsu, user AS usuarioUsu, password AS senhaUsu FROM administrador WHERE user = ?", [usuarioLogin]);
      
        return rows        
    } catch (error) {
        throw error;
    } 
}

// async function loginApp(codigoAcesso){
//     try {
//         const [rowTecnico] = await dbConnection.query("SELECT idTec, nomeTec, cargoTec FROM tecnico WHERE codigoTec = ? AND deletedTec = 0", [codigoAcesso]);
//         const [rowSindico] = await dbConnection.query("SELECT idSin, nomeSin, tipoSin, idResidencial FROM sindico WHERE codigoSin = ? AND deletedSin = 0", [codigoAcesso]);
        
//         if(rowTecnico.length > 0){
//             const [resp] = rowTecnico
//             resp.login = true;
//             return resp
//         }

//         if(rowSindico.length > 0){
//             const [resp] = rowSindico
//             resp.login = true;
//             return resp
//         }

//         return {login: false}
        
//     } catch (error) {
//         throw error;
//     } 
// }

export default { loginWeb }