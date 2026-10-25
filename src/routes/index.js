/*

Rotas do site

*/

import { Router } from 'express';

const router = Router();

// Página inicial
router.get('/', (req, res) => {
    res.render('pages/index.ejs');
});

// Página de oxilifefish
router.get('/oxilifefish', (req, res) => {
    res.render('pages/oxilifefish.ejs');
});

// Página de servicos-e-produtos
router.get('/servicos-e-produtos', (req, res) => {
    res.render('pages/servicos-e-produtos.ejs');
});

// Página sobre a sobre-nos
router.get('/sobre-nos', (req, res) => {
    res.render('pages/sobre-nos.ejs');
});

// Página sobre a contato
router.get('/contato', (req, res) => {
    res.render('pages/contato.ejs');
});

export default router;