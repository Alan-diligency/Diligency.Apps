import type { BlockType } from "./block.type"

export interface LocaleType {
    en: string
    fr: string
}

export interface MenuType {
    _id: string
    key: string
    name: LocaleType
    icon?: string
    link?: string
    description?: LocaleType
    number?: string | number
    children?: MenuType[]
}

export interface CtaType {
    type: string
    text?: LocaleType
    icon?: string
    link?: string
}

export interface HeroType {
    title: LocaleType | Array<LocaleType>
    subtitle: LocaleType | Array<LocaleType>
    background?: string
    cta?: CtaType
}

export interface ContentType {
    _id: string,
    _type: string,
    id?: string
    hero: HeroType
    blocks: Array<BlockType>
    footers: Array<any>
}

export interface HubType {
    name?: string
    role?: LocaleType
    quote?: LocaleType
    author?: string
    topTags?: string[]
    bottomTags?: string[]
    image?: string
    thumbnail?: string
    title?: LocaleType
    content?: LocaleType
}

export interface FooterType {
    type?: string
    title?: LocaleType[]
    text?: LocaleType
    cta?: CtaType[]
    background?: string

}

export class FaqType {
    title?: LocaleType[]
    items?: FaqItemType[]
}

export class FaqItemType {
    question?: LocaleType
    response?: LocaleType
}

export type SanityFormField = {
    _key: string
    required?: boolean
    error?: Record<string, string>
    label?: Record<string, string>
    type?: string
    field?: string
    errorCode?: string
    radio?: Array<any>
    fieldKey?: string
};

export interface RadioOption {
    _key?: string
    default?: boolean
    error?: Record<string, string>
    errorColor?: string
    label?: Record<string, string>
    required?: boolean
    fieldKey?: string
}


export interface ApplicationFormType {
    _key: string;
    type: string;
    field: string;
    fieldKey: string;
    required: boolean;
    label: LocaleType;
    error: LocaleType;
    errorColor: string;
    radio?: RadioOption[]
    custom?: LocaleType
}

// Define the interface for the `buttons` object that contains the next and previous buttons' text in both languages
export interface ApplicationButtonsType {
    next: LocaleType;
    previous: LocaleType;
}

// Define the main interface, including the step, title, buttons, and form array
export interface ApplicationType {
    _key: string;
    step: string;
    title: LocaleType;
    subtitle: LocaleType;
    buttons: ApplicationButtonsType;
    form: ApplicationFormType[];
}