import { defineEventHandler } from 'h3'
import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async () => {
    const data = await SANITY_CLIENT.fetch(`
    *[_type in ["menu","article","footer", "email","user", "page" ]]{
      _type,
      _key,
      _id
    }
  `)

    return {
        success: true,
        data
    }
})
