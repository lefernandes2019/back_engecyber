import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import RelatorioController from "../controllers/relatorio.controller.js";

const router = express.Router();

router.post("/", verifyJWT, RelatorioController.postRelatorio);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;