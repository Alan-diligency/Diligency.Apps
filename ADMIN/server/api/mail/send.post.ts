import nodemailer from 'nodemailer'
import type { MailContentType } from '~/helpers/utils/interfaces'

export default defineEventHandler(async (event) => {
    const body = await readBody<MailContentType>(event)

    // 1️⃣ Validate input
    if (!body?.from || !body?.to || !body?.subject || !body?.html) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing mail content'
        })
    }

    // 2️⃣ Create transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'naoj8lius@gmail.com',
            pass: 'bdgl slwd imdx htur'
        }
    })

    // 3️⃣ Send mail
    await transporter.sendMail({
        from: body.from,
        to: body.to,
        subject: body.subject,
        html: body.html
    })

    return { ok: true }
})
