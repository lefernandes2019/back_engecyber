import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";

import AdministradorController from "../controllers/administrador.controller.js";

const router = express.Router();

router.get("/", verifyJWT, AdministradorController.getAdministradores);

router.post("/", verifyJWT, AdministradorController.postAdministrador);

router.delete("/:id", verifyJWT, AdministradorController.deleteAdministrador);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;