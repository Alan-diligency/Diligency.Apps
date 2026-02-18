
import { GET_MENU_LIST_GROQ } from "~/utils/groq/menu.groq";
import type { MenuType } from "~/utils/types";

export const useMenuStore = defineStore('menu-store', () => {

    const permanentTertiaryHeaderBackground = [
        "/contact", "/application", "/article"
    ]
    const menuList = ref<MenuType[]>([])
    const subMenuList = ref<MenuType[]>([])
    const openMenu = ref<MenuType | null>(null)
    const isHumberger = ref<Boolean>()

    const SetMenuList = (menus: MenuType[]) => {
        menuList.value = menus
    }

    const SetSubMenuList = (menu: MenuType) => {
        if (openMenu.value?._id === menu._id) {
            openMenu.value = null
            subMenuList.value = []
        } else {
            openMenu.value = menu
            subMenuList.value = menu.children ? [...menu.children] : []
        }
    }

    const SetHumberger = (state: boolean) => {
        isHumberger.value = state;
        if (!state) {
            subMenuList.value = [];
            openMenu.value = null
        }
    }

    const GetMenuListAsync = async (): Promise<MenuType[]> => {
        try {
            const menus = await SANITY_CLIENT.fetch<MenuType[]>(GET_MENU_LIST_GROQ);

            // Helper to safely get a numeric value for sorting
            const getNumber = (value: string | number | undefined) => {
                const num = typeof value === "number" ? value : parseInt(value || "", 10);
                return isNaN(num) ? 9999 : num; // fallback if NaN
            };

            // Sort menus
            menus.sort((a, b) => getNumber(a.number) - getNumber(b.number));

            // Sort children if any
            menus.forEach(menu => {
                if (menu.children && menu.children.length > 0) {
                    menu.children.sort((a, b) => getNumber(a.number) - getNumber(b.number));
                }
            });

            return menus;
        } catch (err) {
            console.error("Error fetching menu data:", err)
            return []
        }
    }


    return {
        menuList,
        subMenuList,
        openMenu,
        isHumberger,
        permanentTertiaryHeaderBackground,
        GetMenuListAsync,
        SetMenuList,
        SetSubMenuList,
        SetHumberger
    }
});
