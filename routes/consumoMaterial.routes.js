import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import ConsumoMaterialController from "../controllers/consumoMaterial.controller.js";

const router = express.Router();

router.get("/", verifyJWT, ConsumoMaterialController.getConsumoMateriais);

router.get("/chamado/:id", verifyJWT, ConsumoMaterialController.getConsumoMateriaisPorChamado);

router.put("/:id", verifyJWT, ConsumoMaterialController.putConsumoMaterial);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;