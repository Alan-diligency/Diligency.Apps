// import { defineEventHandler, readBody } from 'h3'
// import { SANITY_CLIENT } from '~/helpers/sanity.client'

// export default defineEventHandler(async (event) => {
//     const body = await readBody(event)
//     const { key, fieldPath, value, query } = body

//     if (!key || !fieldPath || !query) {
//         return { success: false, message: 'Missing key, fieldPath, query or identifier' }
//     }
//     try {
//         const doc_id = await SANITY_CLIENT.fetch(
//             query, { key }
//         )

//         const doc = await SANITY_CLIENT.patch(doc_id._id)
//             .set({ [fieldPath]: value })
//             .commit()

//         return { success: true, data: doc }
//     } catch (err) {
//         console.error(err)
//         return { success: false, message: 'Failed to update' }
//     }
// })



import { defineEventHandler, readBody } from 'h3'
import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { parentId, patch, value } = body

    if (!parentId || !patch || !value) {
        return { success: false, message: 'Missing parameters' }
    }
    try {
        const result = await SANITY_CLIENT
            .patch(parentId)
            .set({
                [patch]: value
            })
            .commit()

        return { success: true, data: result }
    } catch (err) {
        console.error(err)
        return { success: false, message: 'Failed to update' }
    }
})