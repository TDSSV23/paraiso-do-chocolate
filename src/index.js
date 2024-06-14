import {} from "dotenv/config.js";
import express from "express";
import cors from "cors";
import routeProduto from "./routes/route.produto.js";
import routePedido from "./routes/route.pedido.js";
import routeUsuario from "./routes/route.usuario.js";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.use(routeProduto);
app.use(routePedido);
app.use(routeUsuario);

//Levanta O Servidor
app.listen(process.env.PORT, function(){
    console.log("Servidor executando na porta: ", process.env.PORT);
});