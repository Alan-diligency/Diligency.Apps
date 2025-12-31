import type { LocaleType } from "./interfaces";

export const replaceSpecialCharsWithRandomNumber = (input: string): string => {
    return input.replace(/[^a-zA-Z0-9]/g, () => {
        return Math.floor(Math.random() * 100).toString(); // random 0–99
    });
}

export const isLocaleObject = (val: any): val is LocaleType => {
    return val && typeof val === 'object' && !Array.isArray(val) && ('fr' in val || 'en' in val);
}

export const isInputFormObject = (val: any) => {
    return (
        val &&
        typeof val === "object" &&
        "field" in val &&
        "fieldKey" in val &&
        "label" in val &&
        "error" in val
    );
};

export const isRadioObject = (val: any) => {
    return (
        val &&
        typeof val === "object" &&
        val.field === "radio" &&
        Array.isArray(val.radio)
    );
};