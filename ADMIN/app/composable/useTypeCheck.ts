import { CtaType } from "~/helpers/types/cta-type";
import type { LocaleType } from "~/helpers/types/locale-type";

export function useTypeCheck() {
    function isString(obj: any): obj is string {
        return typeof obj === "string";
    }

    function isCtaType(obj: any): obj is CtaType {
        return typeof obj === "object"
            && obj !== null
            && typeof obj._key === "string"
            && typeof obj.icon === "string"
            && typeof obj.link === "string"
            && typeof obj.type === "string"
            && (
                obj.text === undefined || isLocaleType(obj.text)
            );
    }

    function isCtaTypeArray(obj: any): obj is CtaType[] {
        return Array.isArray(obj) && obj.every(isCtaType);
    }

    function isLocaleType(obj: any): obj is LocaleType {
        return typeof obj === "object"
            && obj !== null
            && typeof obj.en === "string"
            && typeof obj.fr === "string";
    }

    function isLocaleTypeArray(obj: any): obj is LocaleType[] {
        return Array.isArray(obj) && obj.every(isLocaleType);
    }

    const isArrayOfString = (data: any): data is string[] => {
        return Array.isArray(data) && data.every(item => typeof item === 'string')
    }

    return { isCtaType, isCtaTypeArray, isArrayOfString, isLocaleType, isLocaleTypeArray, isString }
}
