import 'dotenv/config'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas/index.js'

const projectId = process.env.SANITY_PROJECT_ID

if (!projectId) {
    throw new Error('Defina SANITY_PROJECT_ID no arquivo .env para iniciar o Sanity Studio.')
}

export default defineConfig({
    name: 'eletrotech',
    title: 'Eletrotech Marechal',
    projectId,
    dataset: process.env.SANITY_DATASET || 'production',
    plugins: [
        structureTool({
            structure: (S) => S.list()
                .title('Conteúdo do site')
                .items([
                    S.documentTypeListItem('product').title('Produtos'),
                    S.documentTypeListItem('promotion').title('Promoções da página inicial'),
                    S.documentTypeListItem('service').title('Serviços'),
                    S.documentTypeListItem('historyEvent').title('Linha do tempo'),
                    S.documentTypeListItem('companyValue').title('Valores da empresa')
                ])
        })
    ],
    schema: {
        types: schemaTypes
    }
})
