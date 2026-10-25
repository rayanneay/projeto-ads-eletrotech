// src/server.js
import 'dotenv/config'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'
// import adminRoutes from './routes/admin.js'
/*

Não estamos importando as rotas de admin pois antes colocar as rotas de admin vamos tentar garantir o bom funcionamento das rotas normais do site. (todas aquelas no index.js)

*/

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json())

// app.get("/", (req, res) => {
//     res.render("pages/index"); todas as rotas estão sendo declaradas no /routes/index.js
// });

app.use("/", indexRoutes); // Linha de comando que substitui o app.get

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
