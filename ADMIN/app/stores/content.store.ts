import type { DiligencyMenuType } from "~/data/menu/diligency.menu.type";

export const useContentStore = defineStore('content-store', () => {

    const menusList = ref<DiligencyMenuType[]>([])
    const currentSubMenus = ref<DiligencyMenuType[]>([])
    const currentSubMenu = ref<DiligencyMenuType>()

    const SetCurrentSubMenus = (content: DiligencyMenuType[]) => {
        currentSubMenus.value = content
    }

    const SetCurrentMenu = (content: DiligencyMenuType) => {
        currentSubMenu.value = content
        currentSubMenus.value = content?.children ?? []
    }

    return {
        currentSubMenu,
        currentSubMenus,
        menusList,
        SetCurrentMenu,
        SetCurrentSubMenus
    }
});
