
import type { BreadcrumbItem, NavigationMenuItem } from '@nuxt/ui';
import { defineStore } from 'pinia';
import { useConverter } from '~/composable/useConverter';
import type { GetPageNameResponse } from '~/helpers/dto/reponses/get-page-names.response';
import { capitalize } from '~/helpers/tools';
import { createNavigationMenus } from '~/layouts/navigations';
import { useAppStore } from './app.store';
export const PAGES_KEY = "e7b1c6d2-4f3a-4a2e-b8f3-1d9a2c5f7e6b";
export const INBOX_KEY = "a3f9e2c1-6b4d-4f9a-8d7e-2c1b3f4a5d6e";
export const STYLE_KEY = "d9c2b1a3-7e4f-4b6d-9f2a-3c5e7b1d8a9f";
export const ADMIN_KEY = "a3f9e2c1-6b4d-4a2e-8d7e-3c5e7b1d8a9f";
export const ADMIN_USER_KEY = "9f3a8c24-6b6a-4e8e-b4b2-2e5c6f0d8a72";
export const SECTION_KEY = "1f3a8c24-6b6a-4e8e-c5b2-2e5c6f0d8a73";
export const SECTION_FOOTER_KEY = "2f3a8c24-6b6a-4e8e-b4b2-2e5c6f0d8a74";
export const SECTION_MENU_KEY = "3f3a8c24-6b6a-4e8e-b2b2-2e5c6f0d8a75";
export const MENU_KEY = "3f3a8c24-4a2e-4e8e-6b6a-2e5c6f0d8a75"
export const INBOX_MAIL_KEY = "2f3a8c24-8d7e-6b4d-8d7e-2c1b3f4a5d6b"
export const SECTION_ARTICLES_KEY = "7f2c9e14-3b6a-4d8e-9c41-6a8e5f2d1b90"

export interface PageItem {
    _key: string
    icon: string | null
    page: string
    slug: string
    type: string
}

export const useNavigationStore = defineStore('navigation-store', () => {
    const pageStore = usePageStore()
    const appStore = useAppStore()

    const menus: Ref<NavigationMenuItem[]> = ref([]);
    const menuData = computed(() => menus.value)
    const menuStore = useMenuStore()
    const _currentNavigation = ref<NavigationMenuItem>()
    const currentNavigation = computed(() => _currentNavigation.value)
    const { ConvertIcon } = useConverter()

    const BuildNavigationAsync = async () => {
        const keysList = await appStore.fetchKeys()
        const NAVIGATION_MENUS = ref<NavigationMenuItem[]>(createNavigationMenus(clickedMenu, keysList))

        const pageList = await pageStore.GetPagesName()
        const menuList = await menuStore.GetMenus()

        menus.value = [
            {
                type: SECTION_MENU_KEY as any,
                label: 'Menus',
                icon: 'i-lucide-menu',
                defaultOpen: true,
                children: buildSanityMenuFactory(menuList, keysList)
            },
            {
                type: PAGES_KEY as any,
                label: 'Pages',
                icon: 'i-lucide-globe',
                defaultOpen: false,
                children: buildPageMenuFactory(pageList as any)
            },
            ...NAVIGATION_MENUS.value
        ] as NavigationMenuItem[]

        const selected: NavigationMenuItem = getFirstLeaf(menus.value[0])
        if (selected) clickedMenu(toRaw(selected as any))

        await appStore.RefreshAsync()
    }

    function getFirstLeaf(node: any): any {
        if (!node.children || node.children.length === 0) return node
        return getFirstLeaf(node.children[0])
    }

    const buildPageMenuFactory = (pages: GetPageNameResponse[]): NavigationMenuItem[] => {
        const grouped = pages.reduce<Record<string, GetPageNameResponse[]>>((acc, item) => {
            const key = item.page || '__root__'
            acc[key] ||= []
            acc[key].push(item)
            return acc
        }, {})

        return Object.entries(grouped).map(([page, items]) => {
            if (page === '__root__') {
                const item = items[0] as any
                const itemWithType = {
                    label: capitalize(item.slug),
                    key: item._key,
                    page: item.page,
                    slug: item.slug,
                    type: PAGES_KEY as any
                }
                return {
                    ...itemWithType,
                    onClick: () => clickedMenu(itemWithType as any)
                }
            }

            return {
                label: capitalize(page),
                children: items.map(i => {
                    const itemWithType = {
                        label: capitalize(i.slug),
                        key: i._key,
                        page: i.page,
                        slug: i.slug,
                        type: PAGES_KEY as any
                    }
                    return {
                        ...itemWithType,
                        onClick: () => clickedMenu(itemWithType as any)
                    }
                })
            }
        }) as NavigationMenuItem[]
    }

    const clickedMenu = (item: NavigationMenuItem) => {
        setMenuActiveAndOpen(item)
        _currentNavigation.value = item
    }

    const buildSanityMenuFactory = (
        menus: any[],
        keysList: SanityKeyItem[],
        parentIdentifier?: SanityKeyItem
    ): NavigationMenuItem[] => {
        if (!menus || !Array.isArray(menus)) return []

        return menus.map(menu => {

            // Parent gets identifier from keysList
            const currentIdentifier =
                parentIdentifier ??
                keysList.find(k => k._id === menu._id)

            const baseItem: NavigationMenuItem = {
                label: capitalize(menu._id.replace('menu-', '')),
                key: menu._key,
                icon: ConvertIcon(menu.icon),
                page: 'menu',
                slug: menu._id,
                type: MENU_KEY as any,
                identifier: currentIdentifier, // ✅ parent identifier
            }

            const hasChildren = Array.isArray(menu.children) && menu.children.length > 0

            if (hasChildren) {
                return {
                    ...baseItem,
                    children: buildSanityMenuFactory(
                        menu.children,
                        keysList,
                        currentIdentifier // ✅ pass parent identifier to children
                    ),
                    onClick: undefined
                }
            }

            return {
                ...baseItem,
                children: undefined,
                onClick: () => clickedMenu(baseItem)
            }
        })
    }



    const breadcrumbItems = computed<BreadcrumbItem[]>(() => {
        if (!currentNavigation.value?.key) return []

        const path = findMenuPath(menus.value, currentNavigation.value.key)

        if (!path) return []

        return path.map(item => ({
            label: item.label,
            icon: item.icon
        }))
    })

    const findMenuPath = (
        menus: any[],
        activeKey: string,
        path: any[] = []
    ): any[] | null => {
        for (const menu of menus) {
            const newPath = [...path, menu]

            // match current item
            if (menu.key === activeKey) {
                return newPath
            }

            // search in children
            if (menu.children?.length) {
                const found = findMenuPath(menu.children, activeKey, newPath)
                if (found) return found
            }
        }
        return null
    }

    const setMenuActiveAndOpen = (selectedItem: NavigationMenuItem) => {
        if (!selectedItem?.key) return

        const markPath = (nodes: NavigationMenuItem[], key: string): boolean => {
            for (const node of nodes) {
                if (node.key === key) {
                    node.defaultOpen = true
                    node.active = true // mark the selected item as active
                    return true
                }

                if (node.children?.length) {
                    const foundInChild = markPath(node.children, key)
                    if (foundInChild) {
                        node.defaultOpen = true // mark parent open
                        node.active = false // parent is not active
                        return true
                    }
                }
            }
            return false
        }

        // reset all previous active states
        const resetActive = (nodes: NavigationMenuItem[]) => {
            for (const node of nodes) {
                node.active = false
                if (node.children?.length) resetActive(node.children)
            }
        }

        resetActive(menus.value)
        markPath(menus.value, selectedItem.key)
    }


    const refreshAsync = async () => {
        await BuildNavigationAsync()
    }
    return {
        menuData,
        currentNavigation,
        breadcrumbItems,
        BuildNavigationAsync,
        refreshAsync
    }
})