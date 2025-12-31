import { string } from "zod";
import type { CtaType } from "~/data/cta/cta.type";
import type { LocaleType, ObjectOfFieldType, SocialType } from "~/helpers/utils/interfaces";

export const isString = (data: any): boolean => {
    return typeof data === 'string';
}

export const isBoolean = (value: any): value is boolean => {
    return typeof value === 'boolean';
};

export const isNumber = (data: any): data is string | number => {
    return typeof data === 'number';
};

export const isArrayOfLocale = (data: any): data is Array<LocaleType> => {
    return Array.isArray(data) && data.every(item =>
        item && typeof item.fr === 'string' && typeof item.en === 'string'
    );
}

export const isObjectOfLocale = (data: any): data is LocaleType => {
    return data !== null && typeof data === 'object' && typeof data.fr === 'string' && typeof data.en === 'string';
};

export const isApplicationButtons = (data: any): boolean => {
    return (
        data &&
        typeof data === 'object' &&
        typeof data.begin === 'object' &&
        typeof data.begin.fr === 'string' &&
        typeof data.begin.en === 'string' &&
        typeof data.next === 'object' &&
        typeof data.next.fr === 'string' &&
        typeof data.next.en === 'string' &&
        typeof data.previous === 'object' &&
        typeof data.previous.fr === 'string' &&
        typeof data.previous.en === 'string'
    );
};

export const isArrayOfCta = (data: any): data is CtaType[] => {
    return Array.isArray(data) && data.every(item =>
        item &&
        typeof item.type === 'string' &&
        (item.text === undefined || (item.text && typeof item.text.en === 'string' && typeof item.text.fr === 'string')) &&
        (item.icon === undefined || typeof item.icon === 'string') &&
        (item.link === undefined || typeof item.link === 'string')
    );
};

export const isArrayOfSocial = (data: any): data is SocialType[] => {
    return Array.isArray(data) && data.every(item =>
        item &&
        typeof item._key === 'string' &&
        typeof item.icon === 'string' &&
        typeof item.link === 'string' &&
        typeof item.name === 'string'
    );
};

export const isArrayOfString = (data: any): data is string[] => {
    return Array.isArray(data) && data.every(item => typeof item === 'string');
};

export const camelToUnderscore = (camelCaseString: string): string => {
    if (!string) return '';
    return camelCaseString?.replace(/([a-z0-9])([A-Z])/g, '$1_$2')?.toUpperCase();
}

export const isObjectOfFieldType = (data: any): data is ObjectOfFieldType => {
    return (
        typeof data === 'object' &&
        data !== null &&
        '_key' in data &&
        'error' in data &&
        'errorColor' in data &&
        'field' in data &&
        'fieldKey' in data &&
        'label' in data &&
        'required' in data &&
        'type' in data
    );
};

export const isArrayOfFieldType = (data: any): data is ObjectOfFieldType[] => {
    return Array.isArray(data) && data.every(isObjectOfFieldType);
};