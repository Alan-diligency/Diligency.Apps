export const GET_FOUR_LAST_ARTICLE_GROQ = `
*[_type == "article"]
| order(_createdAt desc)[0...3]{
    title,
    author,
    thumbnail,
    image,
    topTags,
    bottomTags,
    content
}
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
