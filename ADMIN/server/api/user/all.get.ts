
import { SANITY_CLIENT } from '~/helpers/sanity.client'

import { API_RESPONSE } from '~/helpers/dto/reponses/api.response'
import { GetPageNameResponse } from '~/helpers/dto/reponses/get-page-names.response'


export default defineEventHandler(async (event): Promise<API_RESPONSE<GetPageNameResponse[]>> => {
    const result: any[] = await SANITY_CLIENT.fetch(
        `*[_type == "users"]`
    )
    return {
        success: true,
        data: result
    }
})
