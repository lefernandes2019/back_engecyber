import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import CronogramaAtividadeController from "../controllers/cronogramaAtividade.controller.js";

const router = express.Router();

router.get("/:idResidencial/:mes", verifyJWT, CronogramaAtividadeController.getCronograma);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;