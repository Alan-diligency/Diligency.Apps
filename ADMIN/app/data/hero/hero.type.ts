import type { CtaType } from "../cta/cta.type";
import type { LocaleType } from "../locale/locale.type";

export interface HeroType {
    title: LocaleType | Array<LocaleType>
    subtitle: LocaleType | Array<LocaleType>
    background?: string
    cta?: CtaType
}