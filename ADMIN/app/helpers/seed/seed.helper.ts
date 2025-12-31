import { v4 as uuidv4 } from "uuid";
import type { DiligencyMenuType } from "~/data/menu/diligency.menu.type";
import { SANITY_CLIENT } from "../sanity/sanity.client";
import { replaceSpecialCharsWithRandomNumber } from "../utils";

export const seedOneItem = async (item: any) => {
    return await SANITY_CLIENT.createOrReplace({
        _id: item._id,
        _type: "article",

        key: replaceSpecialCharsWithRandomNumber(item.name.fr),

        name: {
            fr: item.name.fr,
            en: item.name.en
        },

        icon: item.icon ?? "",
        link: item.link ?? "",

        // description is optional
        description: item.description
            ? {
                fr: item.description.fr,
                en: item.description.en
            }
            : undefined,

        // children embedded as full menu objects, same format
        children: Array.isArray(item.children)
            ? item.children.map((child: DiligencyMenuType) => ({
                _id: child._id,
                key: replaceSpecialCharsWithRandomNumber(child.name.fr),
                name: {
                    fr: child.name.fr,
                    en: child.name.en
                },
                icon: child.icon,
                link: child.link ?? "",
                description: child.description ?? undefined,
                children: child.children ?? []
            }))
            : []
    });
};



export const seedContent = async (item: any, type: string) => {
    return await SANITY_CLIENT.createOrReplace({
        _id: type,
        _type: type,
        hero: item?.home?.hero,
        blocks: item?.home?.blocks,
        footer: item?.home?.footer
    });
};

export const seedAgencyService = async (item: any, type: string) => {

    return await SANITY_CLIENT.createOrReplace({
        _id: uuidv4(),
        _type: "agency",
        ...item
    });
};

export const seedPages = async (item: any) => {
    return await SANITY_CLIENT.createOrReplace({
        _id: `${item?.page}_${item?.slug}`,
        _type: "page",
        ...item
    });
};

export const seedContact = async (item: any) => {
    return await SANITY_CLIENT.createOrReplace({
        _id: "contact",
        _type: "contact",
        ...item
    });
};

export const seedFooter = async (item: any) => {
    return await SANITY_CLIENT.createOrReplace({
        _id: "footer",
        _type: "footer",
        ...item
    });
};

export const seedApplication = async (item: any) => {
    return await SANITY_CLIENT.createOrReplace({
        _id: uuidv4(),
        _type: "application",
        ...item
    });
};

export const seedArticle = async (item: any) => {
    return await SANITY_CLIENT.createOrReplace({
        _id: uuidv4(),
        _type: 'article',
        ...item
    });
};

export const seedMenu = async (item: any) => {
    return await SANITY_CLIENT.createOrReplace({
        _id: item._id,
        _key: uuidv4(),
        _type: "menu",

        key: replaceSpecialCharsWithRandomNumber(item.name.fr),

        name: {
            fr: item.name.fr,
            en: item.name.en
        },
        number: item.number ?? 0,
        icon: item.icon ?? "",
        link: item.link ?? "",

        // description is optional
        description: item.description
            ? {
                fr: item.description.fr,
                en: item.description.en
            }
            : undefined,

        // children embedded as full menu objects, same format
        children: Array.isArray(item.children)
            ? item.children.map((child: DiligencyMenuType) => ({
                _id: child._id,
                _key: uuidv4(),
                key: replaceSpecialCharsWithRandomNumber(child.name.fr),
                name: {
                    fr: child.name.fr,
                    en: child.name.en
                },
                icon: child.icon,
                link: child.link ?? "",
                description: child.description ?? undefined,
                children: child.children ?? []
            }))
            : []
    });
};
