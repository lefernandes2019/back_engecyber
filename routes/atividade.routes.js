import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import AtividadeController from "../controllers/atividade.controller.js";

const router = express.Router();

router.get("/", verifyJWT, AtividadeController.getAtividades);

router.post("/", verifyJWT, AtividadeController.postAtividade);

router.put("/:id", verifyJWT, AtividadeController.putAtividade);

router.delete("/:id", verifyJWT, AtividadeController.deleteAtividade);

// router.get("/area", verifyJWT, AtividadeController.getAreas);

// router.post("/area", verifyJWT, AtividadeController.postArea);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;