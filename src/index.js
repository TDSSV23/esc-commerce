import { } from "dotenv/config.js"
import express from "express";
import cors from "cors";
import { con } from "./config/database.js";
import routeCliente from "./routes/route.cliente.js";
import routeProduto from "./routes/route.produtos.js";
import routeCategoria from "./routes/route.categoria.js";



const app = express();

app.use(express.json());
app.use(cors());


//rotas tirar depois o (//)
app.use(routeCliente);
app.use(routeProduto);
app.use(routeCategoria)
// app.use(routeUsuario);


// Levanta o Servidor
app.listen(process.env.PORT, function () {
    console.log(`Servidor executando na porta `, process.env.PORT);
});
