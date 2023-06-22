import express from "express";
import cors from "cors";
import helmet from "helmet";

import AtividadeRouter from "./routes/atividade.routes.js";
import ChamadosRouter from "./routes/chamados.routes.js";
import ConsumoMaterialRouter from "./routes/consumoMaterial.routes.js";
import CronogramaAtividadeRouter from "./routes/cronogramaAtividade.routes.js";
import EnvioRelatorioRouter from "./routes/envioRelatorio.routes.js";
import MaterialRouter from "./routes/material.routes.js";
import RelatorioRouter from "./routes/relatorio.routes.js";
import CondominioRouter from "./routes/condominio.routes.js";
import SindicoRouter from "./routes/sindico.routes.js";
import TecnicoRouter from "./routes/tecnico.routes.js";
import AdministradorRouter from "./routes/administrador.routes.js";
import LoginRouter from "./routes/login.routes.js";

const app = express();
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json());
app.use("/files", express.static("uploads"));
app.use("/atividade", AtividadeRouter);
app.use("/chamados", ChamadosRouter);
app.use("/consumoMaterial", ConsumoMaterialRouter);
app.use("/cronogramaAtividade", CronogramaAtividadeRouter);
app.use("/envioRelatorio", EnvioRelatorioRouter);
app.use("/material", MaterialRouter);
app.use("/relatorio", RelatorioRouter);
app.use("/residencial", CondominioRouter);
app.use("/sindico", SindicoRouter);
app.use("/tecnico", TecnicoRouter);
app.use("/usuario", AdministradorRouter);
app.use("/login", LoginRouter);

app.listen(process.env.URL_BACK, () => {
    console.log("API Iniciada");
})
