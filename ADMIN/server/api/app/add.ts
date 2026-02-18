import { readBody } from 'h3'
import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event) => {
    const body = (await readBody(event))


    const result = await SANITY_CLIENT.create(body)

    return { success: true, data: result }
})
