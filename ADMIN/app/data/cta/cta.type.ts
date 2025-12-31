import type { LocaleType } from "../locale/locale.type"

export interface CtaType {
    _key: string
    type: string
    text?: LocaleType
    icon?: string
    link?: string
}
