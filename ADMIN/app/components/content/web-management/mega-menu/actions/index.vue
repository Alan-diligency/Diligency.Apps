<template>
    <div class="flex gap-2 z-20">
        <button type="button" @click="deleteData()"
            class="cursor-pointer inline-flex text-red-800 items-center justify-center   bg-red-200 hover:bg-gray-800 hover:text-white   w-8 h-8">
            <Icon name="lucide:trash" />
            <span class="sr-only">Icon description</span>
        </button>
    </div>
    <div id="delete-menu-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/60">
        <div class="relative p-4 w-full max-w-3xl max-h-full">
            <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                    <h3 class="text-lg font-medium text-heading text-center w-full">
                        {{ message }}
                    </h3>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                    <button data-modal-hide="static-modal" type="button" @click="confirm()"
                        class="cursor-pointer text-white bg-red-500 box-border border border-transparent hover:bg-red-700 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">Supprimer</button>
                    <button data-modal-hide="static-modal" type="button" @click="hideModal"
                        class="cursor-pointer text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">Annuler</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Modal } from 'flowbite';
const sanityStore = useSanityStore()
const contentStore = useContentStore()
const deleteMenuModal = ref<any>(null)
const message = ref<string>("Voulez-vous vraiment supprimer ce menu?")
const props = defineProps({

    id: {
        type: String,
        required: false
    },
})

const deleteData = () => {
    deleteMenuModal.value?.show()
    if (!props.id) {
        message.value = "Impossible de supprimer ce menu"
    };

}

const hideModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    deleteMenuModal.value?.hide()
}

const confirm = async () => {
    if (props.id) {
        deleteMenuModal.value?.hide()
        var result = await sanityStore.deleteDataAsync(props.id)
        if (result) {
            contentStore.menusList = contentStore.menusList.filter(x => x._id != props.id)
            contentStore.currentSubMenu = contentStore.menusList.filter(x => x._id != props.id)?.[0]
        }
    };
}

onMounted(() => {
    const $el = document.getElementById("delete-menu-modal");
    const options = {
        placement: "center",
        backdrop: "static",
        closable: false,
    };
    const instanceOptions = { id: "new-menu-modal", override: true };
    deleteMenuModal.value = new Modal($el!, options as any, instanceOptions);
})
</script>