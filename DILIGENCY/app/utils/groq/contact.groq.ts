

export const GET_CONTACT_GROQ = `
*[_type == "contact"]{
    title,
    subtitle,
    form,
}`
