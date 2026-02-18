import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async () => {
    const result = await SANITY_CLIENT.delete({
        query: '*[_type == "users"]'
    })

    return {
        success: true,
        deleted: result
    }
})
