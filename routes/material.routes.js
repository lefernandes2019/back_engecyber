import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import MaterialController from "../controllers/material.controller.js";

const router = express.Router();

router.get("/", verifyJWT, MaterialController.getMateriais);

router.post("/", verifyJWT, MaterialController.postMaterial);

router.put("/:id", verifyJWT, MaterialController.putMaterial);

router.delete("/:id", verifyJWT, MaterialController.deleteMaterial);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;