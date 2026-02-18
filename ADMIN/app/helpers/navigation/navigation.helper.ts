import type { NavigationMenuItem } from "@nuxt/ui";
import type { GetPageNameResponse } from "../dto/reponses/get-page-names.response";

export const FormatPagesList = (items: GetPageNameResponse[]): NavigationMenuItem[] => {

    let formated: NavigationMenuItem[] = []
    items.forEach((element: GetPageNameResponse) => {
        return {
            label: element.page,
            key: element._key,
            onClick: () => {

            }
        } as NavigationMenuItem
    })
    return []
}


//         return {
//             label: "Home",
//             key: homeItemWithParent?._key,
//             parentKey: PAGES_KEY,
//             onClick: () => {
//                 if (homeItemWithParent) {
//                     clickNavigation(homeItemWithParent as any)
//                 }
//             }
//         } as NavigationMenuItem