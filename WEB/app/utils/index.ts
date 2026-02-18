export const ALL_UPPERCASE = [
    "faq"
]

//const storageKey = 'application_form_step';
//const humanFormStorageKey = 'humanized_form_data';
export const APP_STORAGE_KEY = '3f2c9c5e-7a1b-4e62-9f3d-1b4e8c2a6d91';
export const APP_HUMANIZED_KEY = 'a8d4f1c2-5b39-4e7a-8c6e-92d3f7b1a054';
export const doUppercase = (text?: string): string => {
    if (!text) return ''

    if (ALL_UPPERCASE.includes(text.toLowerCase())) {
        return text.toUpperCase()
    }

    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const isGuid = (value: string): boolean => {
    const guidRegex =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

    return guidRegex.test(value);
}

export const isGuidOrContainsGuid = (value: any): boolean => {
    if (typeof value !== "string") return false;
    return value.split("|").some(part => isGuid(part));
};