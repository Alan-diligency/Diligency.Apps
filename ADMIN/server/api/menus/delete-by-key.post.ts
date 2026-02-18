import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { ids } = body as { ids: string[] }

    if (!ids?.length) {
        return { success: false, error: 'No IDs provided' }
    }

    try {
        const result = await Promise.all(ids.map(id => SANITY_CLIENT.delete(id)))
        return { success: true, data: result }
    } catch (error) {
        console.error(error)
        return { success: false, error }
    }
})
