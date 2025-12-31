import { MenuData } from "~/data/menu/menu.data";
import type { MenuType } from "~/data/menu/menu.type";

export const useMenuStore = defineStore('menu-store', () => {

    const currentMenu: Ref<MenuType> = ref(MenuData[0] as MenuType)
    const currentSubMenu: Ref<MenuType> = ref(currentMenu.value.children?.[0] as MenuType)
    const currentSubMenus: Ref<MenuType[]> = ref([] as any)


    const SetCurrentMenu = (menu: MenuType) => {
        currentMenu.value = menu
        currentSubMenus.value = menu.children ?? [] as any
        SetCurrentSubMenu(menu.children?.[0] as any)
    }

    const SetCurrentSubMenu = (menu: MenuType) => {
        currentSubMenu.value = menu
    }

    return {
        currentMenu,
        currentSubMenu,
        currentSubMenus,
        SetCurrentMenu,
        SetCurrentSubMenu
    }
});
