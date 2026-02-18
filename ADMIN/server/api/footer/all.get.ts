
import { SANITY_CLIENT } from '~/helpers/sanity.client'

import { API_RESPONSE } from '~/helpers/dto/reponses/api.response'


export default defineEventHandler(async (event): Promise<API_RESPONSE<any[]>> => {
    const result: any[] = await SANITY_CLIENT.fetch(
        `*[_type == "footer"]`
    )
    return {
        success: true,
        data: result
    }
})
