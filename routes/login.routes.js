import express from "express";
import LoginController from "../controllers/login.controller.js";

const router = express.Router();

router.post("/", LoginController.postLoginWeb);
// router.post("/app", LoginController.postLoginApp);

//Tratamento de Erros
router.use((err, req, res, next) => {
    res.status(400).send({error: err.message})     
})

export default router;