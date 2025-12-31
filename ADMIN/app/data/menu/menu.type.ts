export interface MenuType {
    _id: string
    key: string
    name: string
    icon: string
    description: string
    children?: MenuType[]
}