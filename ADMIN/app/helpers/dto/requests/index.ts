export type UpdateParameter = {
    parentId: string
    patch: string
    value: any
}

export type AddParameter = {
    _type: string
    _key: string
    _id: string
}

export type DeleteParam = {
    parentId: string
    patch: string
    _key: string
}