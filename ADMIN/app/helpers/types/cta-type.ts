import type { LocaleType } from "./locale-type"

export type CtaItemType = (typeof CTA_ITEMS_TYPE)[number]
export const CTA_ITEMS_TYPE = [
    "cta-link", "cta-primary", "cta-secondary", "cta-tertiary"
]

export class CtaType {
    "_key": string
    "icon": string
    "link": string
    "text": LocaleType
    "type": string
}