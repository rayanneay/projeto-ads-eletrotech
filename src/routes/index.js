/*

Rotas do site

*/

import { Router } from 'express';
import { getProducts, getPromotions, getServices, getHistoryEvents, getCompanyValues, sanityConfigured } from '../sanity/content.js'

const router = Router();

// Página inicial
router.get('/', async (req, res) => {
    const promotions = await getPromotions()
    res.render('pages/index.ejs', { promotions })
});

// Página de oxilifefish
router.get('/oxilifefish', (req, res) => {
    res.render('pages/oxilifefish.ejs');
});

// Página de servicos-e-produtos
router.get('/servicos-e-produtos', async (req, res) => {
    const [products, services] = await Promise.all([getProducts(), getServices()])
    res.render('pages/servicos-e-produtos.ejs', {
        products,
        services,
        sanityConfigured
    })
});

// Página sobre a sobre-nos
router.get('/sobre-nos', async (req, res) => {
    const [historyEvents, companyValues] = await Promise.all([
        getHistoryEvents(),
        getCompanyValues()
    ])
    res.render('pages/sobre-nos.ejs', {
        historyEvents,
        companyValues,
        sanityConfigured
    });
});

// Página sobre a contato
router.get('/contato', (req, res) => {
    res.render('pages/contato.ejs');
});

export default router;