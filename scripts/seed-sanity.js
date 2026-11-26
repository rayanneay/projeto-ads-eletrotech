import 'dotenv/config'
import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN

if (!projectId) {
    throw new Error('Defina SANITY_PROJECT_ID no arquivo .env.')
}

if (!token) {
    throw new Error('Defina SANITY_AUTH_TOKEN no arquivo .env com permissão de escrita no dataset.')
}

const client = createClient({
    projectId,
    dataset,
    apiVersion: '2025-01-01',
    token,
    useCdn: false
})

const products = [
    {
        title: 'Oxímetro Manual',
        description: 'Aparelho para medição de oxigênio dissolvido, temperatura e saturação para uso em tanques de peixes.',
        buttonUrl: '/contato',
        active: true,
        order: 0
    },
    {
        title: 'Produtos Zagonel',
        description: 'Diversos produtos Zagonel, chuveiros e torneiras eletrônicas de diferentes modelos.',
        buttonUrl: '/contato',
        active: true,
        order: 1
    },
    {
        title: 'Materiais para Instalação de Painéis',
        description: 'Materiais diversos para painéis e instalações elétricas como contatores, relés térmicos, disjuntores e outros componentes.',
        buttonUrl: '/contato',
        active: true,
        order: 2
    },
    {
        title: 'Motores Elétricos Hércules',
        description: 'Motores elétricos Hércules novos de diferentes modelos, potência e rotações.',
        buttonUrl: '/contato',
        active: true,
        order: 3
    },
    {
        title: 'Sistema de Alarme para Piscicultura',
        description: 'Sistema sem fio e com Wi-Fi para monitoramento e alertas de oxigênio pelo celular.',
        buttonUrl: '/contato',
        active: true,
        order: 4
    }
]

const services = [
    {
        title: 'Montagem de Painéis Elétricos e Automação',
        description: 'Montagem e adequação de painéis elétricos industriais e comerciais com componentes de alta qualidade, garantindo segurança operacional, conformidade normativa e alta eficiência.',
        category: 'principal',
        buttonUrl: '/contato',
        active: true,
        order: 0
    },
    {
        title: 'Rebobinagem e Manutenção de Motores Elétricos e Bombas d’água',
        description: 'Serviço especializado em rebobinamento, manutenção preventiva e corretiva para motores elétricos monofásicos e trifásicos, além de bombas d’água industriais e agrícolas.',
        category: 'principal',
        buttonUrl: '/contato',
        active: true,
        order: 1
    },
    {
        title: 'Automação Industrial',
        description: 'Desenvolvimento e integração de sistemas automatizados para otimizar linhas de produção, acionamentos e controle de processos.',
        category: 'outro',
        buttonUrl: '/contato',
        active: true,
        order: 0
    },
    {
        title: 'Instalação de Equipamentos Liga/Desliga com Controle ou Celular',
        description: 'Soluções inteligentes de acionamento remoto via controle ou aplicativo móvel para sistemas de bombeamento, iluminação e motores.',
        category: 'outro',
        buttonUrl: '/contato',
        active: true,
        order: 1
    }
]

const historyEvents = [
    {
        date: 'Agosto de 2018',
        title: 'O Início',
        description: 'Começamos com rebobinagem e manutenção de motores elétricos e bombas d’água, além de serviços elétricos básicos.',
        icon: 'casa',
        active: true,
        order: 0
    },
    {
        title: 'Projetos elétricos',
        description: 'Passamos a montar painéis elétricos e a atender projetos elétricos na área industrial.',
        icon: 'documento',
        active: true,
        order: 1
    },
    {
        title: 'Automação',
        description: 'Ampliamos para automação industrial e instalação de equipamentos liga/desliga, com controle também pelo celular.',
        icon: 'ajustes',
        active: true,
        order: 2
    },
    {
        title: 'OxilifeFish',
        description: 'Desenvolvemos a sonda que monitora e controla o oxigênio em tanques de peixe, com acesso remoto pelo aplicativo.',
        icon: 'celular',
        active: true,
        order: 3
    },
    {
        title: 'Atendimento na região',
        description: 'Atendemos todo o oeste do Paraná, inclusive fora do horário comercial, com visita técnica no mesmo dia sempre que possível.',
        icon: 'local',
        active: true,
        order: 4
    },
    {
        title: 'Produtos',
        description: 'Passamos a oferecer produtos Zagonel, motores Hércules e materiais para painéis e instalações elétricas.',
        icon: 'carrinho',
        active: true,
        order: 5
    }
]

const companyValues = [
    {
        title: 'Qualidade',
        description: 'Equipamentos de nível industrial e serviço feito com excelência.',
        icon: 'maleta',
        active: true,
        order: 0
    },
    {
        title: 'Inovação',
        description: 'Automação e controle pelo celular, como na sonda OxilifeFish.',
        icon: 'livro',
        active: true,
        order: 1
    },
    {
        title: 'Segurança',
        description: 'Alarmes e acionamentos confiáveis, para o produtor trabalhar tranquilo.',
        icon: 'escudo',
        active: true,
        order: 2
    },
    {
        title: 'Compromisso',
        description: 'Prazo combinado é prazo cumprido, até fora do horário comercial.',
        icon: 'check',
        active: true,
        order: 3
    }
]

async function seedType(type, documents) {
    const count = await client.fetch('count(*[_type == $type])', { type })
    if (count > 0) {
        console.log(`${type}: ${count} documento(s) já existente(s); não alterado.`)
        return
    }

    for (const document of documents) {
        await client.create({ _type: type, ...document })
    }
    console.log(`${type}: ${documents.length} documento(s) criado(s).`)
}

await seedType('product', products)
await seedType('service', services)
await seedType('historyEvent', historyEvents)
await seedType('companyValue', companyValues)
