export const GET_MENU_LIST_GROQ = `
  *[_type == "menu"] 
    | order(number asc) {
      _id,
      key,
      name,
      icon,
      description,
      number,
      link,
      "children": children[]
    }
`
