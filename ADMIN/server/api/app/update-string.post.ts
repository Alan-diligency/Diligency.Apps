import { defineEventHandler, readBody } from 'h3'
import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { fieldPath, value, identifier } = body

    if (!fieldPath || !identifier) {
        return { success: false, message: 'Missing key, fieldPath or identifier' }
    }

    const key = identifier._key
    try {
        const doc_id = await SANITY_CLIENT.fetch(
            `*[_key == $key]{_id}[0]`,
            { key }
        )

        const doc = await SANITY_CLIENT.patch(doc_id._id)
            .set({ [fieldPath]: value })
            .commit()

        return { success: true, data: doc }
    } catch (err) {
        console.error(err)
        return { success: false, message: 'Failed to update' }
    }

    // const { key, fieldPath, value } = body

    // if (!key || !fieldPath) {
    //     return { success: false, message: 'Missing key or fieldPath' }
    // }

    // try {
    //     const doc_id = await SANITY_CLIENT.fetch(
    //         `*[_key == $key]{_id}[0]`,
    //         { key }
    //     )

    //     const doc = await SANITY_CLIENT.patch(doc_id._id)
    //         .set({ [fieldPath]: value })
    //         .commit()

    //     return { success: true, data: doc }
    // } catch (err) {
    //     console.error(err)
    //     return { success: false, message: 'Failed to update' }
    // }
})