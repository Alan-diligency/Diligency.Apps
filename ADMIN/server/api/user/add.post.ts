import { createError, readBody } from 'h3'
import { v4 as uuid4 } from 'uuid'
import { generateSaltedPasswordAsync } from '~/helpers/bcrypt'
import { ADD_USER_REQUEST } from '~/helpers/dto/requests/user.add.request'
import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event) => {
    const body = (await readBody(event)) as ADD_USER_REQUEST

    // Validate input
    if (!body.firstName || !body.lastName || !body.password || !body.email) {
        throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
    }

    // Check if user already exists
    const existingUser = await SANITY_CLIENT.fetch(
        `*[_type == "users" && email == $email][0]`,
        { email: body.email }
    )

    if (existingUser) {
        throw createError({ statusCode: 409, statusMessage: 'User already exists' })
    }

    // Hash password
    const hashedPassword = await generateSaltedPasswordAsync(body.password)

    // Prepare new user
    const newUser = {
        _key: uuid4(),
        _type: 'users',
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: hashedPassword,
        avatar: body.avatar ?? '',
        isActive: body.isActive,

        role: body.role ?? 'user'
    }

    const createdUser = await SANITY_CLIENT.create(newUser)

    return { success: true, user: createdUser }
})
