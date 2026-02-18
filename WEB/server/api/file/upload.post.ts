
import { createError, readMultipartFormData } from 'h3'
import { SANITY_CLIENT } from '~/utils/sanity.client'
export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event)

    if (!formData) {
        throw createError({ statusCode: 400, statusMessage: 'No form data' })
    }

    const file = formData.find(f => f.name === 'file')
    const title = formData.find(f => f.name === 'title')?.data?.toString()

    if (!file || !title) {
        throw createError({ statusCode: 400, statusMessage: 'Missing file or title' })
    }

    if (file.type !== 'application/pdf') {
        throw createError({ statusCode: 400, statusMessage: 'Only PDF allowed' })
    }

    // Upload PDF to Sanity
    const asset = await SANITY_CLIENT.assets.upload(
        'file',
        file.data,
        {
            filename: file.filename,
            contentType: 'application/pdf'
        }
    )

    // Create document
    const doc = await SANITY_CLIENT.create({
        _type: 'pdfDocument',
        title,
        file: {
            _type: 'file',
            asset: {
                _type: 'reference',
                _ref: asset._id
            }
        }
    })

    return {
        success: true,
        documentId: doc._id,
    }
})
