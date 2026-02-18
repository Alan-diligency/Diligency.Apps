import type { LocaleType } from "../types/locale-type"

export class MenuType {
    "_id": string
    "_key": string
    "_type": string
    "children": MenuType[]
    "description": LocaleType
    "icon": string
    "key": string
    "link": string
    "name": LocaleType
    "number": string | number
}