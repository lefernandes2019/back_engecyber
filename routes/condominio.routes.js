import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import CondominioController from "../controllers/condominio.controller.js"

const router = express.Router();

router.get("/", verifyJWT, CondominioController.getCondominios);

router.post("/", verifyJWT, CondominioController.postCondominio);

router.put("/:id", verifyJWT, CondominioController.putCondominio);

router.delete("/:id", verifyJWT, CondominioController.deleteCondominio);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;