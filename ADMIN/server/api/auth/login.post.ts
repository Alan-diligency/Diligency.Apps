import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '~/helpers/bcrypt';
import { SANITY_CLIENT } from '~/helpers/sanity.client';

export default defineEventHandler(async (event) => {
    const body = await readBody(event) as { email: string; password: string }

    const user = await SANITY_CLIENT.fetch(
        `*[_type == "users" && email == $email][0]`,
        { email: body.email }
    )

    if (!user) {
        throw createError({ statusCode: 401, statusMessage: 'User not found' })
    }

    const passwordMatches = await bcrypt.compare(body.password, user.password)
    if (!passwordMatches || !user.isActive) {
        throw createError({ statusCode: 401, statusMessage: 'Invalid password or user is inactive' })
    }

    // payload stored in JWT
    const payload = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isActive: user.isActive,
        role: user.role
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
    return { success: true, user: payload, token: token }
})