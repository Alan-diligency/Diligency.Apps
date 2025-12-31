import type { LocaleType } from "../locale/locale.type"

export interface DiligencyMenuType {
    _id: string
    _key?: string
    key: string
    name: LocaleType
    icon: string
    description: LocaleType
    link?: string
    children?: DiligencyMenuType[]
    [key: string]: unknown;
}