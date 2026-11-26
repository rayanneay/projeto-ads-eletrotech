import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index.js'

export default defineConfig({
  name: 'default',
  title: 'Eletrotech',

  projectId: 'qf991f2o',
  dataset: 'production',

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
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
