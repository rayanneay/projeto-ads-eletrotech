import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'companyValue',
    title: 'Valor da empresa',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (rule) => rule.required().max(60)
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required().max(300)
        }),
        defineField({
            name: 'icon',
            title: 'Ícone',
            type: 'string',
            initialValue: 'check',
            options: {
                list: [
                    { title: 'Maleta', value: 'maleta' },
                    { title: 'Livro', value: 'livro' },
                    { title: 'Escudo', value: 'escudo' },
                    { title: 'Conferido', value: 'check' }
                ],
                layout: 'radio'
            },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'active',
            title: 'Exibir no site',
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
    preview: {
        select: {
            title: 'title',
            subtitle: 'description'
        }
    }
})
