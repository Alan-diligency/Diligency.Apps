<template>
    <div class="p-6 bg-neutral-secondary text-medium text-body rounded-base w-full">
        <h3 class="text-lg font-semibold text-heading mb-4">Information Basique</h3>
        <div class="bg-white border border-gray-200 rounded">
            <table class="w-full text-sm text-left">
                <thead class="bg-gray-100 border-b border-gray-300">
                    <tr>
                        <th class="px-4 py-2 font-semibold">Clé</th>
                        <th class="px-4 py-2 font-semibold">Valeur</th>
                        <th class="px-4 py-2 font-semibold"></th>
                    </tr>
                </thead>

                <tbody class="relative">
                    <LoaderInlineLoader />
                    <tr v-for="key in parentVisibleKeys" :key="key"
                        class="border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                        <td class="px-4 py-2 font-medium capitalize text-gray-700 w-50">
                            {{ key }}
                        </td>
                        <td class="px-4 py-2 text-gray-700">
                            <TableViewsLocale :data="data[key]" />
                            <TableViewsHorizontalList :data="data[key]" />
                            <TableViewsText :data="data[key]" />
                            <TableViewsNumber :data="data[key]" />
                        </td>
                        <td class="flex p-2 justify-end">
                            <button type="button" @click="editMenu(key)"
                                class="cursor-pointer inline-flex text-gray-800 items-center justify-center bg-gray-200 hover:bg-gray-800 hover:text-white h-8 aspect-square">
                                <Icon name="lucide:pen" />
                                <span class="sr-only">Icon description</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Edit Modal -->
    <div id="edit-table-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/70">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-3">
                <div class="space-y-4 md:space-y-6">
                    <div class="leading-relaxed text-body" v-if="editKey">
                        <label for="field">{{ editKey }}</label>
                        <TableEditText v-model:input-model-value="editValue" :data="editValue" />
                        <TableEditLocale v-model:locale-model-value="editValue" :data="editValue" />
                        <TableEditHorizontalList @update:deleteItem="deleteItem" :data="editValue" />
                    </div>
                </div>
                <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                    <button type="button" @click="save()"
                        class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                        Enregistrer
                    </button>
                    <button type="button" @click="hideModal()"
                        class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Modal } from 'flowbite';
import { v4 as uuidv4 } from "uuid";

const sanityStore = useSanityStore()
const modal = ref<any>(null)
const editKey = ref<string | null>(null)
const editValue = ref<any>(null)
const ctaTypes = ['cta-tertiary', 'cta-link', 'cta-secondary']

const props = defineProps({
    excludedKeys: {
        type: Array,
        required: false,
        default: []
    },
    data: {
        type: Object,
        required: false,
        default: null
    },
})
const parentVisibleKeys = computed(() => {
    if (!props.data) return [];
    return Object.keys(props.data).filter(k => !props.excludedKeys?.includes(k))
});

const emit = defineEmits<{
    (e: 'get-result', value: any): void
}>();

const editMenu = async (key: string) => {
    editKey.value = key;
    editValue.value = props.data?.[key] as any
    modal.value?.show();
};

const hideModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    modal.value?.hide();
    editKey.value = null;
    editValue.value = null;
};

const save = async () => {
    if (!editKey.value) return;
    const target = props.data
    if (target) {
        target[editKey.value] = editValue.value;
        const modifiedField = {
            _id: target._id,
            parentId: target?._id,
            [editKey.value]: editValue.value
        };
        hideModal();
        const result = await sanityStore.UpdateDataAsync(modifiedField, "parent")
        if (result) {
            emit('get-result', result);
        }
    }
};

const deleteItem = (key: string) => {
    if (!key || !editValue.value) return;
    const index = editValue.value.findIndex((x: any) => x._key === key);
    if (index !== -1) {
        editValue.value.splice(index, 1);
    }
}

const addNewItem = (section: string) => {
    if (!section) return;
    if (!editValue.value) editValue.value = [];
    editValue.value.push(
        section == 'cta'
            ? { "_key": uuidv4(), "icon": "lucide:circle", "link": "/", "text": { "en": "", "fr": "" }, "type": "cta-tertiary" }
            : { "_key": uuidv4(), "icon": "lucide:circle", "link": "/", "name": "" }
    )
}

onMounted(() => {
    const $el = document.getElementById("edit-table-modal");
    const options = {
        placement: "center",
        backdrop: "static",
        closable: false,
    };
    const instanceOptions = { id: "edit-table-modal", override: true };
    modal.value = new Modal($el!, options as any, instanceOptions);
})
</script>