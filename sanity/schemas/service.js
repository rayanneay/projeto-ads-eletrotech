import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Serviço',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nome do serviço',
            type: 'string',
            validation: (rule) => rule.required().max(100)
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'text',
            rows: 5,
            validation: (rule) => rule.required().max(500)
        }),
        defineField({
            name: 'category',
            title: 'Categoria',
            type: 'string',
            initialValue: 'principal',
            options: {
                list: [
                    { title: 'Serviço principal', value: 'principal' },
                    { title: 'Outro serviço', value: 'outro' }
                ],
                layout: 'radio'
            },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Imagem',
            type: 'image',
            options: { hotspot: true },
            hidden: ({ parent }) => parent?.category !== 'principal'
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
            title: 'Publicar no site',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'order',
            title: 'Ordem de exibição',
            type: 'number',
            initialValue: 0,
            validation: (rule) => rule.integer().min(0)
        })
    ],
    orderings: [
        {
            title: 'Ordem de exibição',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }, { field: 'title', direction: 'asc' }]
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'image'
        }
    }
})
