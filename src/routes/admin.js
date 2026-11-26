import { Router } from 'express'
import { sanityConfigured } from '../sanity/content.js'

const router = Router()

router.get('/', (req, res) => {
    res.render('pages/admin.ejs', {
        sanityConfigured,
        studioUrl: process.env.SANITY_STUDIO_URL || 'http://localhost:3333'
    })
})

export default router