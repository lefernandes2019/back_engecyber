import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config()

import LoginService from "../services/login.service.js";

async function postLoginWeb(req, res, next){
    try {
        const usuario = req.body.usuario;
        const senha = req.body.senha;

        const result = await LoginService.loginWeb(usuario, senha);

        if(result){
            const token = jwt.sign({userId: result}, process.env.SECRET, {expiresIn: 7200}); //expireIn: 1800 equivale a 30minutos
            return res.json({auth: true, token});
        }

        res.status(401).end();
    } catch (error) {
        next(error)
    }
}

// async function postLoginApp(req, res, next){
//     try {
//         const codigoAcesso = req.body.codigo;

//         const result = await LoginService.loginApp(codigoAcesso);

//         if(result){
//             const token = jwt.sign({userId: result}, process.env.SECRET, {expiresIn: 3600}); //expireIn: 1800 equivale a 30minutos
//             return res.json({auth: true, token});
//         }

//         return result

//     } catch (error) {
//         next(error)
//     }
// }

export default { postLoginWeb }