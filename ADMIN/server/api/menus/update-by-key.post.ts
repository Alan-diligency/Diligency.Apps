import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { _key, ...menuData } = body

    try {
        const query = `*[_type == "menu" && _key == $key][0]._id`
        const id = await SANITY_CLIENT.fetch(query, { key: _key })

        if (!id) {
            throw new Error("Menu not found")
        }

        const result = await SANITY_CLIENT
            .patch(id)
            .set(menuData)
            .commit()

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
