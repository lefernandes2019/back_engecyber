import LoginRepository from "../repositories/login.repository.js";
import bcrypt from "bcrypt";

async function loginWeb(usuarioLogin, senhaLogin){

    const [resp] =  await LoginRepository.loginWeb(usuarioLogin);

    const pwdMatches = bcrypt.compareSync(senhaLogin, resp.senhaUsu);

    if(pwdMatches){
        return resp.idUsu;
    } else {
        return false;
    }
}

// async function loginApp(codigoAcesso){

//     const resp =  await LoginRepository.loginApp(codigoAcesso);    
//     return resp
// }

export default { loginWeb }