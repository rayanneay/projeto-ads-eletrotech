import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || 'production'

export const sanityConfigured = Boolean(projectId)

const client = sanityConfigured
    ? createClient({
        projectId,
        dataset,
        apiVersion: '2025-01-01',
        useCdn: true
    })
    : null

export async function getProducts() {
    if (!client) return []

    return client.fetch(`*[_type == "product" && active == true] | order(order asc, title asc) {
        "titulo": title,
        "descricao": description,
        "imagem": image.asset->url,
        "link": buttonUrl
    }`)
}

export async function getServices() {
    if (!client) return []

    return client.fetch(`*[_type == "service" && active == true] | order(order asc, title asc) {
        "titulo": title,
        "descricao": description,
        "imagem": image.asset->url,
        "link": buttonUrl,
        "categoria": category
    }`)
}

export async function getHistoryEvents() {
    if (!client) return []

    return client.fetch(`*[_type == "historyEvent" && active == true] | order(order asc, title asc) {
        "data": date,
        "titulo": title,
        "descricao": description,
        "icone": icon
    }`)
}

export async function getCompanyValues() {
    if (!client) return []

    return client.fetch(`*[_type == "companyValue" && active == true] | order(order asc, title asc) {
        "icone": icon,
        "titulo": title,
        "texto": description
    }`)
}

export async function getPromotions() {
    if (!client) return []

    return client.fetch(`*[
        _type == "promotion" &&
        active == true &&
        (!defined(startDate) || startDate <= now()) &&
        (!defined(endDate) || endDate >= now())
    ] | order(order asc, title asc) {
        "title": title,
        "description": description,
        "imageUrl": image.asset->url,
        "buttonText": buttonText,
        "buttonUrl": buttonUrl
    }`)
}
