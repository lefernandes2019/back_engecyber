import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import SindicoController from "../controllers/sindico.controller.js";

const router = express.Router();

router.get("/", verifyJWT, SindicoController.getSindicos);

router.post("/", verifyJWT, SindicoController.postSindico);

router.put("/:id", verifyJWT, SindicoController.putSindico);

router.delete("/:id", verifyJWT, SindicoController.deleteSindico);

router.post("/add", verifyJWT, SindicoController.addSindico);


//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;