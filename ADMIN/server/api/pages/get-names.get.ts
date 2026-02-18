
import { SANITY_CLIENT } from '~/helpers/sanity.client'

import { API_RESPONSE } from '~/helpers/dto/reponses/api.response'
import { GetPageNameResponse } from '~/helpers/dto/reponses/get-page-names.response'


export default defineEventHandler(async (event): Promise<API_RESPONSE<GetPageNameResponse[]>> => {
    const result: GetPageNameResponse[] = await SANITY_CLIENT.fetch(
        `*[_type == "page"]{ page, slug, _key, icon}`
    )
    return {
        success: true,
        data: result
    }
})
