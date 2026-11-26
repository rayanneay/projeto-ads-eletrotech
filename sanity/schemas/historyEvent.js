import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'historyEvent',
    title: 'Evento da linha do tempo',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (rule) => rule.required().max(100)
        }),
        defineField({
            name: 'date',
            title: 'Data ou período',
            type: 'string',
            description: 'Exemplo: Agosto de 2018. Deixe vazio se não houver data.',
            validation: (rule) => rule.max(60)
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'text',
            rows: 4,
            validation: (rule) => rule.required().max(500)
        }),
        defineField({
            name: 'icon',
            title: 'Ícone',
            type: 'string',
            initialValue: 'ajustes',
            options: {
                list: [
                    { title: 'Casa', value: 'casa' },
                    { title: 'Documento', value: 'documento' },
                    { title: 'Automação', value: 'ajustes' },
                    { title: 'Celular', value: 'celular' },
                    { title: 'Localização', value: 'local' },
                    { title: 'Produtos', value: 'carrinho' },
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
            title: 'Exibir na linha do tempo',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'order',
            title: 'Ordem da linha do tempo',
            type: 'number',
            initialValue: 0,
            validation: (rule) => rule.integer().min(0)
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date'
        }
    }
})
