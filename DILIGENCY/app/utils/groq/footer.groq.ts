

export const GET_FOOTER_GROQ = `
*[_type == "footer"]`

export const GET_FOOTER_FOR_CONTACT = `
*[_type == 'footer']{
    city,
    postalCode
}`