// import { defineEventHandler, readBody } from 'h3'
// import { SANITY_CLIENT } from '~/helpers/sanity.client'

// export default defineEventHandler(async (event) => {
//     const body = await readBody(event)

//     const { key, fieldPath, value } = body

//     if (!key || !fieldPath) {
//         return { success: false, message: 'Missing key or fieldPath' }
//     }

//     try {
//         const doc_id = await SANITY_CLIENT.fetch(
//             `*[_key == $key]{_id}[0]`,
//             { key }
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
    const { key, fieldPath, value } = body

    if (!key || !fieldPath) {
        return { success: false, message: 'Missing key or fieldPath' }
    }

    try {
        // fetch the _id of the document by _key
        let doc_id = null
        doc_id = await SANITY_CLIENT.fetch(
            `*[_key == $key]{_id}[0]`,
            { key }
        )

        if (!doc_id?._id) {
            return { success: false, message: 'Document not found' }
        }

        // patch the document
        const doc = await SANITY_CLIENT.patch(doc_id._id)
            .set({ [fieldPath]: value }) // fieldPath should be just "city"
            .commit()

        return { success: true, data: doc }
    } catch (err) {
        console.error(err)
        return { success: false, message: 'Failed to update', error: err }
    }
})

