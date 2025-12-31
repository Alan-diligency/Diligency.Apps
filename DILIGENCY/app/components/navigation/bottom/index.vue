<template>
    <footer
        class="bg-gradient-to-b from-tertiary-600 via-tertiary-400  to-gray-400 text-white py-16 px-4 md:px-10 2xl:px-35 flex flex-col w-full">
        <div class="w-full mx-auto">
            <h1 ref="FooterTitleRef"
                class="text-[4rem]/15  xl:text-[5rem]/20  py-10 font-regular text-center cursor-pointer overflow-hidden">
                {{ data?.title?.[locale] }}
            </h1>
            <div class="w-2/3 mx-auto text-2xl text-center">
                {{ data?.subtitle?.[locale] }}
            </div>
            <div class="flex items-center justify-center py-10 gap-10">
                <component :is="getCta(item.type!)" v-for="(item, index) in data?.cta" :key="index" :data="item"
                    :custom-class="getCustomCtaClass(item.type)" />
            </div>
        </div>
        <div class="w-full md:w-2/3 mx-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-between pt-20">
            <div class="w-full flex flex-col gap-4">
                <span class="text-4xl font-bold pb-4 text-center md:text-left">
                    {{ data?.vision }}
                </span>
                <div class="text-lg w-full md:w-2/3 cursor-pointer text-center md:text-left">
                    <ul class="w-full">
                        <li v-for="(item, index) in [data?.city, data?.postalCode, data?.email]" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <div class=" w-full flex gap-2 justify-center items-center md:justify-start">
                    <a v-for="(item, index) in data?.social" :key="index" :href="item.link"
                        class="text-primary hover:text-secondary transition-fast transition-all duration-500">
                        <Icon :name="item.icon" class="size-6" />
                    </a>
                </div>
                <div class="w-full flex justify-center md:justify-start ">
                    <ButtonLocaleSwitch />
                </div>
            </div>

            <div class="w-full">
                <div class="flex justify-between gap-4 text-xl text-center md:text-left">
                    <ul class="flex-1 space-y-2">
                        <li v-for="(item, index) in leftColumn" :key="index">
                            <a :href="item.link" class="text-gray-300 hover:text-white transition-fast">
                                {{ item?.name?.[locale] }}
                            </a>
                        </li>
                    </ul>
                    <ul class="flex-1 space-y-2">
                        <li v-for="(item, index) in rightColumn" :key="index">
                            <a :href="item.link" class="text-gray-300 hover:text-white transition-fast">
                                {{ item?.name?.[locale] }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useFooterStore } from '~/stores/footer.store';
import { useMenuStore } from '~/stores/menu.store';
import { GetCtaTemplate } from '~/utils/helpers/component';
import type { LocaleType, MenuType } from '~/utils/types';

const menuStore = useMenuStore()
const { locale } = useI18n()
const footerStore = useFooterStore()
const data = ref()

onMounted(async () => {
    data.value = await footerStore.GetData()

})

const getCta = (type: string) => {
    return GetCtaTemplate(type)
}

const getCustomCtaClass = (type: string) => {
    switch (type) {
        case "cta-link":
            return "text-secondary-500 hover"

        default:
            break;
    }
}
/**
 * Recursively extract all visible menu links
 */
function extractLinks(menus: MenuType[]): MenuType[] {
    const links: MenuType[] = []

    menus.forEach((menu) => {
        links.push({
            name: menu.name as LocaleType,
            link: menu.link ?? '#',
        } as MenuType)

        if (menu.children?.length) {
            links.push(...extractLinks(menu.children))
        }
    })

    return links
}

/**
 * Compute the two columns dynamically
 */
const leftColumn = computed(() => {
    const links = extractLinks(menuStore.menuList || [])
    const half = Math.ceil(links.length / 2)
    return links.slice(0, half)
})

const rightColumn = computed(() => {
    const links = extractLinks(menuStore.menuList || [])
    const half = Math.ceil(links.length / 2)
    return links.slice(half)
})
</script>