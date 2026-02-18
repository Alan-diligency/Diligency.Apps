import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        const result = await SANITY_CLIENT.createOrReplace(body)

        return {
            success: true,
            data: result
        }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            error
        }
    }
})
