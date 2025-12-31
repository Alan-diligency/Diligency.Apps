<template>
    <div class="p-6 bg-neutral-secondary text-medium text-body rounded-base w-full">
        <div class="w-full text-lg font-semibold text-heading mb-4 flex items-center justify-between">
            Information sur les composants
            <button v-if="!isMenu()" type="button" @click="addNewChild()"
                class="cursor-pointer inline-flex text-green-800 items-center justify-center   bg-green-200 hover:bg-green-800 hover:text-white rounded-full   w-8 h-8">
                <Icon name="lucide:plus" />
                <span class="sr-only">Icon description</span>
            </button>
            <div class="flex gap-2" v-if="isMenu()">
                <button type="button" @click="editMenuChild('menu')"
                    class="cursor-pointer inline-flex text-orange-800 items-center rounded-full justify-center bg-orange-200 hover:bg-gray-800 hover:text-white h-8 aspect-square">
                    <Icon name="lucide:pen" />
                    <span class="sr-only">Icon description</span>
                </button>
                <button type="button" @click="addNewMenuChild('menu')"
                    class="cursor-pointer inline-flex text-green-800 items-center justify-center   bg-green-200 hover:bg-green-800 hover:text-white rounded-full   w-8 h-8">
                    <Icon name="lucide:plus" />
                    <span class="sr-only">Icon description</span>
                </button>
            </div>
        </div>
        <div class="bg-white border border-t-0 border-gray-200 rounded-xl">
            <div class="w-full p-0 space-y-3">
                <div class="sm:hidden">
                    <label for="tabs-icons" class="sr-only">Select your country</label>
                    <select id="tabs-icons"
                        class="block w-full p-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body">
                        <option>Profile</option>
                        <option>Dashboard</option>
                        <option>setting</option>
                        <option>Invoice</option>
                    </select>
                </div>
                <ul class="hidden text-sm font-medium text-center text-body sm:flex -space-x-px bg-white"
                    v-if="tabData">
                    <li class="w-full focus-within:z-10" v-for="(item, index) in tabData" :key="index">
                        <a @click="switchTab(item)"
                            :class="isCurrentMenuChildTab(item) ? 'bg-gray-200' : 'bg-neutral-primary-soft'"
                            class="cursor-pointer inline-flex items-center justify-center w-full text-body  border border-default hover:bg-gray-200 hover:text-heading  font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
                            aria-current="page">
                            <Icon :name="item?.icon" size="20" class="mr-2" />
                            {{ item?.name?.fr }}
                        </a>
                    </li>
                </ul>
                <table class="w-full text-sm text-left ">
                    <tbody class="relative w-full">
                        <LoaderInlineLoader />
                        <TableViewsTableFieldRow v-for="key in visibleKeys" :key="key"
                            @update:delete-table-row="onDeleteTableRow" @update:edit-table-row="onEditTableRow"
                            :data="data?.[key]" :keyable="key" />
                    </tbody>
                </table>
                <div class=" w-full p-2" v-if="!tabData">
                    <div class="rounded h-full bg-gray-200 flex items-center justify-center p-2">
                        <div class="flex items-cenger flex-col justify-center">
                            <button @click="addNewField('contact')"
                                class="h-10 bg-brand text-white p-2 px-3 hover:bg-brand-strong cursor-pointer ">
                                Ajouter un champ
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div id="edit-child-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/70">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                <div class="space-y-4 md:space-y-6 py-4 md:py-6">
                    <div class="leading-relaxed text-body">
                        <div class="w-full flex gap-2 items-center">
                            <FormModalContact @update:data="setDataFromFields" :data="editFieldsData"
                                v-if="['contact'].includes(formType)" />
                            <FormModalMenu @update:data="setDataFromFields" :data="editFieldsData"
                                v-if="['menu'].includes(formType)" />
                        </div>

                    </div>
                </div>
                <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                    <button type="button" @click="onConfirmEditModal()"
                        class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                        Enregistrer
                    </button>
                    <button type="button" @click="hideEditModal()"
                        class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-window" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/70">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                <div class="space-y-4 md:space-y-6 py-4 md:py-6">
                    <div class="leading-relaxed text-body">
                        <div class="w-full flex gap-2 items-center font-bold text-2xl">
                            {{ modalConfirmData?.title }}
                        </div>
                        <div class="w-full flex gap-2 items-center text-xl">
                            {{ modalConfirmData?.subtitle }}
                        </div>
                    </div>
                </div>
                <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                    <button type="button"
                        class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
                        @click="onConfirmModal(modalConfirmData?.data)">
                        Enregistrer
                    </button>
                    <button type="button"
                        class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
                        @click="hideConfirmModal()">
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
import type { DiligencyMenuType } from '~/data/menu/diligency.menu.type';
import { DEFAULT_MENU_DATA } from '~/helpers/utils/const';
import type { ModalConfirmDataType } from '~/helpers/utils/interfaces';
import { useChildTableStore, type ChildModalData } from '~/stores/child.modal.store';
import { useToastStore } from '~/stores/toast.store';
import { CHILD_PROPS } from '../child.props';

const childModalStore = useChildTableStore()

const props = defineProps(CHILD_PROPS)
const sanityStore = useSanityStore()
const modal = ref<any>(null)
const editKey = ref<string | null>(null)
const editValue = ref<any>(null)
const toastStore = useToastStore();

const visibleKeys = computed(() => {
    if (!props.data) return [];
    return Object.keys(props.data).filter(k => !props.excludedKeys?.includes(k))
});

const emit = defineEmits<{
    (e: 'switch-tab', value: any): void
    (e: 'get-result', payload: any): void
}>();

const switchTab = (item: DiligencyMenuType) => {
    emit('switch-tab', item)
}

const isCurrentMenuChildTab = (item: any) => {
    return item?._id == props.data?._id
}

const editMenu = async (key: string) => {
    alert("OK")
    // const edit = props.data?.find((x: any) => x._key === key);
    // const modalData = {
    //     title: `Modifier le champ: ${edit.fieldKey}`,
    //     action: 'edit',
    //     modal: modal.value,
    //     data: edit
    // } as ChildModalData
    // childModalStore.showModal(modalData)




    // isCreating.value = false
    // editKey.value = key;

    // if (Array.isArray(props.data)) {
    //     editValue.value = props.data?.find(x => x.fieldKey == key)
    // }
    // else {
    //     editValue.value = props.data?.[key]
    // }

    // modal.value?.show();
};

const hideModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    modal.value?.hide();
    editKey.value = null;
    editValue.value = null;
};

const isMenu = () => {
    return ['menu'].some(item => props.parentId?.includes(item))
};

const save = async () => {
    // if (!props.data) return;

    // if (isCreating.value) {
    //     const newChild = { ...editValue.value }

    //     const payload = {
    //         parentId: props.parentId,
    //         child: newChild
    //     }

    //     hideModal()

    //     const result = await sanityStore.CreateDataAsync(payload, "child")
    //     if (result) {
    //         emit('get-result', result)
    //     }

    //     return
    // }

    // if (!editKey.value) return

    // props.data[editKey.value] = editValue.value

    // const payload = {
    //     _id: props.data._id,
    //     parentId: props.parentId,
    //     [editKey.value]: editValue.value
    // }

    // hideModal();
    // const result = await sanityStore.UpdateDataAsync(payload, "child")
    // if (result) {
    //     toastStore.showToast('Champ mis à jour avec succès.', 'success');
    //     emit('get-result', result);
    // }
    // alert(JSON.stringify(childModalStore.modalData?.data))
    // const payload = {
    //     _id: props.data?._id,
    //     parentId: props.parentId,
    //     [key: string]: childModalStore.modalData?.data
    // }

    // hideModal();
    // const result = await sanityStore.UpdateDataAsync(payload, "child")
    // if (result) {
    //     toastStore.showToast('Champ mis à jour avec succès.', 'success');
    //     emit('get-result', result);
    // }

    if (!props.data) return;
    if (!childModalStore.modalData?.data) return;

    const rawData = toRaw(childModalStore.modalData.data)
    const draftData = toRaw(childModalStore.modalData.draftData)
    const action = childModalStore.modalData.action;
    const page = childModalStore.modalData.page;
    const mergedData = { ...rawData, ...draftData };
    if (page == "contact") {
        await AddOrUpdateContactField(mergedData, action);
    }

    if (page == "menu") {
        if (action == 'create') {
            mergedData.key = mergedData._id.replace(/-/g, '');
        }
        AddOrUpdateMenuChild(mergedData, action);
    }


};

const addNewChild = () => {
    const modalData = {
        title: "Ajouter un nouveau champ",
        action: 'create',
        page: "contact",
        modal: modal.value,
        data: {}
    } as ChildModalData

    childModalStore.showModal(modalData)
}













const formType = ref<string>('')
//Begin

const addNewMenuChild = (type: string) => {
    //Create menu child
    formType.value = type
    editFieldsData.value = DEFAULT_MENU_DATA
    editModal.value?.show()
    // formType.value = type
    // editFieldsData.value = DEFAULT_MENU_DATA
    // editModal.value?.show()
    // const modalData = {
    //     title: "Ajouter un nouveau sub-menu",
    //     action: 'create',
    //     page: "menu",
    //     modal: modal.value,
    //     data: DEFAULT_MENU_DATA
    // } as ChildModalData
    // modalData.data._id = props.parentId
    // childModalStore.showModal(modalData)
}

const editMenuChild = (type: string) => {
    formType.value = type
    editFieldsData.value = props.data
    console.log("EDIT=>: ", editFieldsData.value)
    editModal.value?.show()
    // editModal.value?.show()
    // if (!props.data) {
    //     toastStore.showToast('Données manquantes.', 'error');
    //     return;
    // };

    // const modalData = {
    //     title: "Editer ce sous-menu",
    //     action: 'edit',
    //     page: "menu",
    //     modal: modal.value,
    //     tabData: props.tabData,
    //     data: props.data
    // } as ChildModalData
    // childModalStore.showModal(modalData)
}

const addNewField = (type: string) => {
    formType.value = type
    console.log("CREATE=>: ", editFieldsData.value)
    // if (type == 'menu') {
    //     editFieldsData.value = DEFAULT_MENU_DATA
    // }
    // editModal.value?.show()
}



const deleteMenu = async (key: any) => {
    const parentId = props.parentId
    if (!parentId) {
        toastStore.showToast('Parent ID manquant.', 'error');
        return;
    };

    const result = await sanityStore.deleteFormDataByKeyAsync(parentId, key)
    if (result) {
        toastStore.showToast('Champ supprimé avec succès.', 'success');
        emit('get-result', result)
    }
}




const AddOrUpdateContactField = async (rawData: any, action: string) => {
    const payload = {
        _id: props.data?._id,
        _key: props.data?._key,
        parentId: props.parentId,
        ifMissing: { form: [] },
        subSection: "form",
        field: structuredClone(rawData)
    }
    modal.value?.hide();
    if (action === 'create') {
        payload.field._key = uuidv4();
        const result = await sanityStore.CreateChildDataAsync(payload)
        if (result) {
            toastStore.showToast('Champ ajouté avec succès.', 'success');
            emit('get-result', result);
        }
    }
    if (action === 'edit') {
        const result = await sanityStore.UpdateChildFieldsDataAsync(payload)
        if (result) {
            toastStore.showToast('Champ mis à jour avec succès.', 'success');
            emit('get-result', result);
        }

    }
}

const AddOrUpdateMenuChild = async (rawData: any, action: string) => {
    const payload = {
        _id: props.data?._id,
        _key: props.data?._key,
        parentId: props.parentId,
        ifMissing: { children: [] },
        subSection: "children",
        field: rawData
    }

    if (action == 'create') {
        payload.field._key = uuidv4();
        const result = await sanityStore.CreateChildDataAsync(payload)
        if (result) {
            emit('get-result', result);
        }
    }

    modal.value?.hide();
}


// Begin
const modalConfirm = ref<any>(null)
const editModal = ref<any>(null)
const modalConfirmData = ref<ModalConfirmDataType>()
const editFieldsData = ref<any>()
const dataFromFields = ref<any>()

const onEditTableRow = (key: string) => {
    if (!key) return;
    alert(key)
}

const hideConfirmModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    modalConfirm.value?.hide();
};

const hideEditModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    editModal.value?.hide();
}


const onConfirmEditModal = async () => {
    if (!dataFromFields.value) return
    const payload = {
        parentId: props.parentId,
        setIfMissing: { form: [] },
        append: 'form',
        data: {
            _id: uuidv4(),
            ...dataFromFields.value
        }
    }
    hideEditModal()
    var result = await sanityStore.AddChildDataAsync(payload)
    if (result) {
        emit('get-result', result);
    }
}

const onDeleteTableRow = (key: string) => {
    if (!key) return;

    modalConfirmData.value = {
        title: "Supression !",
        subtitle: "Voulez vous vraiment supprimer ce donnée ?",
        data: key
    } as ModalConfirmDataType

    modalConfirm.value?.show()
}

const onConfirmModal = async (data: any) => {
    if (!data) return
    if (typeof data === "string") {
        const payload = {
            parentId: props.parentId,
            unset: [`form[_key=="${data}"]`]
        }
        modalConfirm.value?.hide()
        const result = await sanityStore.deleteDataAndUnsetByKeyAsync(payload)
        if (result) {
            emit('get-result', result);
        }
    }
}



const setDataFromFields = (data: any) => {
    dataFromFields.value = data
}

const getObject = (key: any, value: any) => {
    return {
        [key]: value
    }
}

onMounted(() => {
    if (props.data) {
        const $el = document.getElementById("modal-window");
        if ($el) {
            const options = {
                placement: "center",
                backdrop: "static",
                closable: false,
            };
            const instanceOptions = { id: "modal-window", override: true };
            modalConfirm.value = new Modal($el, options as any, instanceOptions);
        }

        const $editEl = document.getElementById("edit-child-modal");
        if ($editEl) {
            const options = {
                placement: "center",
                backdrop: "static",
                closable: false,
            };
            const instanceOptions = { id: "edit-child-modal", override: true };
            editModal.value = new Modal($editEl, options as any, instanceOptions);
        }
    }
});
</script>