import AdministradorService from "../services/administrador.service.js";

async function getAdministradores(req, res, next){
    try {
        const usuarios = await AdministradorService.getAdministradores();
        
        res.send(usuarios);
    } catch (error) {
        next(error)
    }
}

async function postAdministrador(req, res, next){
    try {
        const nomeUsu = req.body.nome;
        const usuarioUsu = req.body.usuario;
        const senhaUsu = req.body.senha;
        const result = await AdministradorService.postAdministrador(nomeUsu, usuarioUsu, senhaUsu,);

        res.send(result);
    } catch (error) {
        next(error)
    }
}

async function deleteAdministrador(req, res, next){
    try {
        const idUsu = parseInt(req.params.id);

        const result = await AdministradorService.deleteAdministrador(idUsu);
        
        res.send(result);
    } catch (error) {
        next(error)
    }
}

export default {
    getAdministradores,
    postAdministrador,
    deleteAdministrador,
}