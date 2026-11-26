import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'promotion',
    title: 'Promoção da página inicial',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (rule) => rule.required().max(100)
        }),
        defineField({
            name: 'description',
            title: 'Texto de destaque',
            type: 'string',
            validation: (rule) => rule.required().max(160)
        }),
        defineField({
            name: 'image',
            title: 'Imagem do banner',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'buttonText',
            title: 'Texto do botão',
            type: 'string',
            initialValue: 'Saiba mais',
            validation: (rule) => rule.required().max(40)
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Destino do botão',
            type: 'string',
            validation: (rule) => rule.required().custom((value) => {
                if (!value || value.startsWith('/') || /^https?:\/\//i.test(value)) {
                    return true
                }

                return 'Informe um caminho interno ou uma URL iniciando com http:// ou https://.'
            })
        }),
        defineField({
            name: 'active',
            title: 'Publicar na página inicial',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'order',
            title: 'Ordem de exibição',
            type: 'number',
            initialValue: 0,
            validation: (rule) => rule.integer().min(0)
        }),
        defineField({
            name: 'startDate',
            title: 'Início da promoção (opcional)',
            type: 'datetime'
        }),
        defineField({
            name: 'endDate',
            title: 'Fim da promoção (opcional)',
            type: 'datetime',
            validation: (rule) => rule.custom((endDate, context) => {
                const startDate = context.document?.startDate
                if (!endDate || !startDate || Date.parse(endDate) > Date.parse(startDate)) {
                    return true
                }

                return 'A data final deve ser posterior à data inicial.'
            })
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
            subtitle: 'description',
            media: 'image'
        }
    }
})
