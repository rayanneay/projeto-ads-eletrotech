// src/server.js
import 'dotenv/config'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'
import adminRoutes from './routes/admin.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json())

// Disponibiliza o caminho atual para todas as views (usado no menu do header)
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.use("/", indexRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));