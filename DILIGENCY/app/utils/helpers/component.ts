import { FormCheck, FormInput, FormRadio, FormText, TemplatesBlocksA, TemplatesBlocksB, TemplatesBlocksC, TemplatesBlocksD, TemplatesBlocksE, TemplatesBlocksF, TemplatesBlocksG, TemplatesBlocksH, TemplatesBlocksI, TemplatesBlocksJ, TemplatesBlocksNoContentA, TemplatesCtaLink, TemplatesCtaSecondary, TemplatesCtaTertiary, TemplatesFootersA, TemplatesFootersB, TemplatesFootersC } from "#components";


const ctaTemplates: Record<string, any> = {
    "cta-link": TemplatesCtaLink,
    "cta-secondary": TemplatesCtaSecondary,
    "cta-tertiary": TemplatesCtaTertiary,
};

export const GetCtaTemplate = (type: string) => {
    if (!type) return;
    const key = Object.keys(ctaTemplates).find((k) => type.startsWith(k));
    return key ? ctaTemplates[key] : undefined;
};

export const blockComponents: Record<string, any> = {
    "no-content-a": TemplatesBlocksNoContentA,
    "template-a": TemplatesBlocksA,
    "template-b": TemplatesBlocksB,
    "template-c": TemplatesBlocksC,
    "template-d": TemplatesBlocksD,
    "template-e": TemplatesBlocksE,
    "template-f": TemplatesBlocksF,
    "template-g": TemplatesBlocksG,
    "template-h": TemplatesBlocksH,
    "template-i": TemplatesBlocksI,
    "template-j": TemplatesBlocksJ,
};

export const GetBlockTemplate = (type: string) => {
    if (!type) return;
    const key = Object.keys(blockComponents).find((k) => type.startsWith(k));
    return key ? blockComponents[key] : undefined;
};

const FooterTemplate: Record<string, any> = {
    "footer-a": TemplatesFootersA,
    "footer-b": TemplatesFootersB,
    "footer-c": TemplatesFootersC,
};

export const GetFooterTemplate = (type: string) => {
    if (!type) return;
    const key = Object.keys(FooterTemplate).find((k) => type.startsWith(k));
    return key ? FooterTemplate[key] : undefined;
};

const FormTemplate: Record<string, any> = {
    "textinput": FormInput,
    "textarea": FormText,
    "radio": FormRadio,
    "check": FormCheck,
};
export const GetFormTemplate = (type: string) => {
    if (!type) return;
    const key = Object.keys(FormTemplate).find((k) => type.toLocaleLowerCase().startsWith(k));
    return key ? FormTemplate[key] : undefined;
}

export const sortFormFields = (form: any[]) => {
    const typeOrder = {
        'TextInput': 1,
        'TextArea': 2,
        'Check': 3,
        'Radio': 4,


    } as any;

    return form.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
};
