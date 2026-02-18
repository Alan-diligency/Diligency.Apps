import { API_RESPONSE } from '~/helpers/dto/reponses/api.response'
import { GetPageNameResponse } from '~/helpers/dto/reponses/get-page-names.response'
import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event): Promise<API_RESPONSE<GetPageNameResponse>> => {
    const query = getQuery(event)
    const key = query._key as string

    const result: GetPageNameResponse = await SANITY_CLIENT.fetch(
        `*[_type == "page" && _key == $key]{_key, hero, blocks}[0]`,
        { key }
    )
    return {
        success: true,
        data: result
    }
})

