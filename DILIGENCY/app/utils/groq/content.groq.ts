export const GET_CONTENT_GROQ_BY_SLUG = (page: string, slug: string) => `
  *[page == "${page ?? ''}" && slug == "${slug ?? ''}"]{
    _id,
    _type,
    slug,
    hero,
    blocks,
    faq,
    footer
  }
`;
