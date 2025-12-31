<template>
    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
        class="rounded-l cursor-pointer inline-flex items-center justify-center text-white bg-brand hover:bg-brand-medium shadow-xs font-medium leading-5 text-md px-4 py-2.5 focus:outline-none"
        type="button">
        {{ selectedMenu?.name?.fr }}
        <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 9-7 7-7-7" />
        </svg>
    </button>
    <div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-strong shadow-lg w-50">
        <ul class="p-1 pl-4 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
            <li v-for="(item, index) in listMenu" :key="index">
                <a href="#" @click="onSelectMenu(item)"
                    class="inline-flex items-center w-full p-2 bg-gray-200 py-2 hover:bg-gray-500  hover:text-heading capitalize">
                    {{ item.name?.fr }}
                </a>
            </li>

            <li class="pt-2">
                <button type="button" @click="addNewMenu"
                    class="cursor-pointer w-full text-white bg-brand box-border border border-transparent leading-5 text-sm px-4 py-2.5 focus:outline-none flex items-center gap-1">
                    <Icon name="lucide:plus" size="20" />
                    <span>
                        Ajouter
                    </span>
                </button>
            </li>
        </ul>
    </div>

    <!-- New menu modal -->

    <div id="new-menu-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/60">
        <div class="relative p-4 w-full max-w-3xl max-h-full">
            <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                    <h3 class="text-lg font-medium text-heading">
                        Nouveau Menu
                    </h3>
                </div>
                <!-- Modal body -->
                <div class="space-y-4 md:space-y-6 py-4 md:py-6 w-full">
                    <div class="leading-relaxed text-body">
                        <form @submit.prevent="save">
                            <div class="space-y-3">
                                <div class="w-full flex gap-2">
                                    <div class="w-full">
                                        <label class="block mb-1">Nom (FR)</label>
                                        <input v-model="form.nameFr" type="text" class="input w-full" required />
                                    </div>

                                    <div class="w-full">
                                        <label class="block mb-1">Nom (EN)</label>
                                        <input v-model="form.nameEn" type="text" class="input w-full" required />
                                    </div>
                                </div>

                                <div class="w-full">
                                    <label class="block mb-1">Icon</label>
                                    <div class="flex gap-2 items-center">
                                        <div
                                            class="h-10 aspect-square flex items-center justify-center bg-gray-200 border-1 ">
                                            <Icon :name="form.icon" size="20" />
                                        </div>
                                        <input v-model="form.icon" type="text" class="input w-full" required />
                                    </div>
                                </div>

                                <div class="w-full">
                                    <label class="block mb-1">Lien</label>
                                    <input v-model="form.link" type="text" class="input w-full" />
                                </div>

                                <div class="w-full flex gap-2">
                                    <div class="w-full ">
                                        <label class="block mb-1">Description (FR)</label>
                                        <textarea v-model="form.descriptionFr" class="input w-full min-h-40"></textarea>
                                    </div>

                                    <div class="w-full ">
                                        <label class="block mb-1 ">Description (EN)</label>
                                        <textarea v-model="form.descriptionEn" class="input w-full min-h-40"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                                <button data-modal-hide="static-modal" type="button" @click="save()"
                                    class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">Créer</button>
                                <button data-modal-hide="static-modal" type="button" @click="hideModal"
                                    class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">Annuler</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { initDropdowns, Modal } from 'flowbite'
import type { DiligencyMenuType } from '~/data/menu/diligency.menu.type'



const sanityStore = useSanityStore()
const contentStore = useContentStore()
const newMenuModal = ref<any>(null)
const selectedMenu = computed(() => contentStore.currentSubMenu)
const listMenu = computed(() => contentStore.menusList)

const onSelectMenu = (item: DiligencyMenuType) => {
    contentStore.currentSubMenu = item
    contentStore.SetCurrentMenu(item)
}
const form = ref({
    nameFr: '',
    nameEn: '',
    icon: 'lucide:minus',
    link: '',
    descriptionFr: "",
    descriptionEn: ""
})

const save = async () => {
    newMenuModal.value?.hide()
    // Prepare the data for saving (ignore children)
    const result = await sanityStore.CreateMenuAsync(form.value)
    if (result) {
        contentStore.menusList = [
            result as DiligencyMenuType,
            ...contentStore.menusList
        ]
        contentStore.currentSubMenu = result as DiligencyMenuType
    }
}

const hideModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    newMenuModal.value?.hide()
}

const addNewMenu = async () => {
    newMenuModal.value?.show()
}

onMounted(async () => {
    useFlowbite(() => {
        initDropdowns();
    })

    const $el = document.getElementById("new-menu-modal");
    const options = {
        placement: "center",
        backdrop: "static",
        closable: false,
    };
    const instanceOptions = { id: "new-menu-modal", override: true };
    newMenuModal.value = new Modal($el!, options as any, instanceOptions);
})

</script>