import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";

import TecnicoController from "../controllers/tecnico.controller.js";

const router = express.Router();

router.get("/", verifyJWT, TecnicoController.getTecnicos);

router.post("/", verifyJWT, TecnicoController.postTecnico);

router.put("/:id", verifyJWT, TecnicoController.putTecnico);

router.delete("/:id", verifyJWT, TecnicoController.deleteTecnico);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;