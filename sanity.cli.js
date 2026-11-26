import 'dotenv/config'
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.SANITY_PROJECT_ID

if (!projectId) {
    throw new Error('Defina SANITY_PROJECT_ID no arquivo .env para executar os comandos do Sanity.')
}

export default defineCliConfig({
    api: {
        projectId,
        dataset: process.env.SANITY_DATASET || 'production'
    }
})
