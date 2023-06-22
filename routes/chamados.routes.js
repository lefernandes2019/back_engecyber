import express from "express";
import verifyJWT from "../helpers/verifyJWT.js";
import ChamadosController from "../controllers/chamados.controller.js";
import multer from "multer";
import { storage } from "../helpers/multerConfig.js";

const router = express.Router();
const upload = multer({storage});

router.get("/", verifyJWT, ChamadosController.getChamados);

router.get("/pesquisa/:idResidencial/:status", verifyJWT, ChamadosController.getPesquisaChamados);

router.put("/atender", verifyJWT, ChamadosController.putAtenderChamado);

router.put("/finalizar", verifyJWT, ChamadosController.putFinalizarChamado);

router.delete("/:id", verifyJWT, ChamadosController.deleteChamado);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})


export default router;