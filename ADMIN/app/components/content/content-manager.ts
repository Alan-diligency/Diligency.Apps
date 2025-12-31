import {
    ContentApplication,
    ContentDesign,
    ContentInbox,
    ContentInsight,
    ContentSeed,
    ContentWebManagement,
    ContentWebManagementApplication,
    ContentWebManagementContact,
    ContentWebManagementFooter,
    ContentWebManagementMegaMenu,
    ContentWebManagementPages,
} from "#components";

export const SwitchCurrentPageContent = (content: string) => {

    const contentComponents: Record<string, any> = {
        "inbx": ContentInbox,
        "inst": ContentInsight,
        "webmngt": ContentWebManagement,
        "snd": ContentSeed,
        "dsn": ContentDesign,
        "aplctaon": ContentApplication,
    };

    const key = Object.keys(contentComponents).find((k) => content.startsWith(k));
    return key ? contentComponents[key] : undefined;
}

export const SwitchCurrentSubPageContent = (content: string) => {

    const contentComponents: Record<string, any> = {
        "mgmen": ContentWebManagementMegaMenu,
        "cntat": ContentWebManagementContact,
        "applcato": ContentWebManagementApplication,
        "fforter": ContentWebManagementFooter,
        "pgses": ContentWebManagementPages,
    };

    const key = Object.keys(contentComponents).find((k) => content.startsWith(k));
    return key ? contentComponents[key] : undefined;
}