import type { Modal } from 'flowbite';
import { defineStore } from 'pinia';

export interface ChildModalData {
    title: string
    action: 'create' | 'edit'
    page: string
    modal: Modal
    data: any
    draftData: any
    parentId: string
    tabData?: Array<any>
}

export const useChildTableStore = defineStore('child-table-store', () => {
    const modalData = ref<ChildModalData>();
    const parentId = ref<string>("");
    const tabData = ref<Array<any>>([]);

    const showModal = (data: ChildModalData) => {
        if (!data) return
        if (!data.modal) return
        modalData.value = undefined
        parentId.value = ""
        tabData.value = []

        modalData.value = data
        tabData.value = data.tabData ?? []

        data.modal.show()
    }

    return {
        modalData,
        tabData,
        parentId,
        showModal
    };
});
