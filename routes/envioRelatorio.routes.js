import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import EnvioRelatorioController from "../controllers/envioRelatorio.controller.js";

const router = express.Router();

router.get("/", verifyJWT, EnvioRelatorioController.getEnvioRelatorios);

router.post("/", verifyJWT, EnvioRelatorioController.postEnvioRelatorio);

router.delete("/:id", verifyJWT, EnvioRelatorioController.deleteEnvioRelatorio);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;