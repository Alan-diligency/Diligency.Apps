import type { CtaType, LocaleType } from "."


export interface BlockType {
    icon?: string
    action?: string
    template?: string
    title?: LocaleType[]
    name?: LocaleType
    subtitle?: LocaleType[] | LocaleType
    text?: LocaleType
    items?: string[] | BaseType | BaseType[]
    cta?: CtaType[]
    image?: string
}

export interface BaseType {
    id?: string
    icon?: string
    name?: LocaleType
    title?: LocaleType[]
    technos?: string[]
    link?: string,
    features?: FeatureType
    description?: LocaleType
    text?: LocaleType
    action?: string
    list?: BaseType[]
}

export interface FeatureType {
    type: string
    fr: string[]
    en: string[]
}