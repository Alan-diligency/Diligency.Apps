// navigation.menus.ts

import type { NavigationMenuItem } from "@nuxt/ui"


export function createNavigationMenus(clickedMenu: (item: NavigationMenuItem) => void, keysList: SanityKeyItem[]): NavigationMenuItem[] {

    const footerKey = keysList.find(k => k._type === "footer")
    const articleKey = keysList.find(k => k._type === "article")
    const emailKey = keysList.find(k => k._type === "email")
    const userKey = keysList.find(k => k._type === "user")

    return [
        {
            key: SECTION_KEY,
            label: 'Section',
            icon: 'i-lucide-layout-grid',
            defaultOpen: false,
            children: [
                {
                    label: 'Footer',
                    active: false,
                    icon: "i-lucide-fold-vertical",
                    onClick: () => {
                        clickedMenu({
                            label: "Footer",
                            icon: "i-lucide-fold-vertical",
                            key: SECTION_FOOTER_KEY,
                            type: SECTION_KEY as any,
                            page: "section",
                            slug: "footer",
                            identifier: footerKey
                        })
                    }
                },
                {
                    label: 'Articles',
                    icon: "i-lucide-newspaper",
                    active: false,
                    onClick: () => {
                        clickedMenu({
                            label: "Articles",
                            icon: "i-lucide-newspaper",
                            key: SECTION_ARTICLES_KEY,
                            type: SECTION_KEY as any,
                            page: "section",
                            slug: "articles",
                            identifier: articleKey
                        })
                    }
                },
            ]
        },

        {
            key: INBOX_KEY,
            label: 'Reception',
            icon: 'i-lucide-inbox',
            defaultOpen: false,
            children: [
                {
                    label: 'E-Mails',
                    icon: 'i-lucide-mail',
                    active: false,
                    badge: '1',
                    onClick: () => {
                        clickedMenu({
                            label: "E-mails",
                            key: INBOX_KEY,
                            page: "inbox",
                            slug: "email",
                            type: INBOX_MAIL_KEY as any,
                            identifier: emailKey
                        })
                    }
                },
            ]
        },

        {
            key: ADMIN_KEY,
            label: 'Admin',
            icon: 'i-lucide-lock',
            defaultOpen: false,
            children: [
                {
                    label: 'Utilisateurs',
                    active: false,
                    onClick: () => {
                        clickedMenu({
                            label: "Utilisateurs",
                            key: ADMIN_USER_KEY,
                            page: "admin",
                            slug: "user",
                            type: ADMIN_USER_KEY as any,
                            identifier: userKey
                        })
                    }
                },
            ]
        },
    ]
}
