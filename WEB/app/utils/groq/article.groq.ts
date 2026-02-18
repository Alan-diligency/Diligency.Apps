export const GET_FOUR_LAST_ARTICLE_GROQ = `
*[_type == "article"]
| order(_createdAt desc)[0...3]
`;

export const GET_ARTICLE_BY_ID_GROQ = `
*[_type == "article" && _id == $id][0]
`;


export const GET_LAST_ARTICLE_GROQ = `
*[_type == "article"]
| order(_createdAt desc)[0]{
    title,
    author,
    thumbnail,
    image,
    topTags,
    bottomTags,
    content
}
`;

