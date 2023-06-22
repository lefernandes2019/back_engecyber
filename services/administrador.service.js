import AdministradorRepository from "../repositories/administrador.repository.js";
import bcrypt from "bcrypt";

async function getAdministradores(){
    return await AdministradorRepository.selectAdministradores();
}

async function postAdministrador(nomelUsu, usuarioUsu, senhaUsu){
    const encryptPassword = await bcrypt.hash(senhaUsu, 5);

    return await AdministradorRepository.insertAdministrador(nomelUsu, usuarioUsu, encryptPassword);
}

async function deleteAdministrador(idUsu){
    return await AdministradorRepository.deleteAdministrador(idUsu);
}

export default {
    getAdministradores,
    postAdministrador,
    deleteAdministrador,
}