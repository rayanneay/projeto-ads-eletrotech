import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'product',
    title: 'Produto',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nome do produto',
            type: 'string',
            validation: (rule) => rule.required().max(100)
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'text',
            rows: 4,
            validation: (rule) => rule.required().max(500)
        }),
        defineField({
            name: 'image',
            title: 'Imagem',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Destino do botão',
            type: 'string',
            initialValue: '/contato',
            validation: (rule) => rule.required().custom((value) => {
                if (!value || value.startsWith('/') || /^https?:\/\//i.test(value)) {
                    return true
                }

                return 'Informe um caminho interno ou uma URL iniciando com http:// ou https://.'
            })
        }),
        defineField({
            name: 'active',
            title: 'Exibir no catálogo',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'order',
            title: 'Ordem no catálogo',
            type: 'number',
            initialValue: 0,
            validation: (rule) => rule.integer().min(0)
        })
    ],
    orderings: [
        {
            title: 'Ordem no catálogo',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }, { field: 'title', direction: 'asc' }]
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
})
