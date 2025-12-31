import { v4 as uuidv4 } from 'uuid';
import type { MenuType } from './menu.type';

export const MenuData: MenuType[] = [
    // {
    //     _id: uuidv4(),
    //     key: "inst",
    //     name: "Insight",
    //     icon: "lucide:activity",
    //     description: "Consultez les analyses détaillées et les performances de votre application."
    // },
    {
        _id: uuidv4(),
        key: "webmngt",
        name: "Gestion Web",
        icon: "lucide:settings",
        description: "Gérez facilement le contenu, la structure et les paramètres de votre site web.",
        children: [
            {
                _id: uuidv4(),
                key: "mgmen",
                name: "Mega Menus",
                icon: "lucide:album",
                description: "Gérez facilement le contenu, la structure et les paramètres de votre site web.",
            },
            {
                _id: uuidv4(),
                key: "cntat",
                name: "Contact",
                icon: "lucide:mail",
                description: "Gérez facilement le contenu, la structure et les paramètres de votre site web.",
            },
            {
                _id: uuidv4(),
                key: "applcato",
                name: "Applications",
                icon: "lucide:git-pull-request-draft",
                description: "Consultez vos messages, notifications et communications importantes."
            },
            {
                _id: uuidv4(),
                key: "fforter",
                name: "Footer",
                icon: "lucide:list",
                description: "Gérez facilement le contenu, la structure et les paramètres de votre site web.",
            },
            {
                _id: uuidv4(),
                key: "pgses",
                name: "Pages",
                icon: "lucide:globe",
                description: "Gérez facilement le contenu, la structure et les paramètres de votre site web.",
            },

        ]
    },
    {
        _id: uuidv4(),
        key: "inbx",
        name: "E-Mails",
        icon: "lucide:mails",
        description: "Consultez vos messages, notifications et communications importantes."
    },
    {
        _id: uuidv4(),
        key: "aplctaon",
        name: "Applications",
        icon: "lucide:git-pull-request-draft",
        description: "Consultez vos messages, notifications et communications importantes."
    },
    {
        _id: uuidv4(),
        key: "dsn",
        name: "Design",
        icon: "lucide:palette",
        description: "Gérez facilement le contenu, la structure et les paramètres de votre site web.",
    },
    {
        _id: uuidv4(),
        key: "snd",
        name: "Seed",
        icon: "lucide:database-zap",
        description: "Consultez vos messages, notifications et communications importantes."
    }
];