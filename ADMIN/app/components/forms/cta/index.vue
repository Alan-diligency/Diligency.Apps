<script setup lang="ts">
import { useConverter } from '~/composable/useConverter';
import { useTypeCheck } from '~/composable/useTypeCheck';
import { deepToRaw } from '~/helpers/tools';
import type { CtaType } from '~/helpers/types/cta-type';
import { useAppStore, type UpdateStringParameter } from '~/stores/app.store';
import { TABLE_PROPS } from '../table-props';
const appStore = useAppStore()
const props = defineProps(TABLE_PROPS)

const { isCtaTypeArray } = useTypeCheck()
const { ConvertIcon } = useConverter()

const toast = useToast()
const pageStore = usePageStore()
const navigationStore = useNavigationStore()

const editModalVisibility = ref(false)
const addModalVisibility = ref(false)
const deleteModalVisibility = ref(false)

const isVisible = computed(() => isCtaTypeArray(props.value))
const data = computed(() => props.value as CtaType[])
const identifier = computed(() => {
    const id = navigationStore.currentNavigation?.identifier
    return id ? deepToRaw(id)?._key : navigationStore.currentNavigation?.key
})

const deleteItem = async (item: CtaType) => {
    if (item) {
        const original = data.value?.map(item => deepToRaw(item))
        const items = original.filter(x => x._key !== item._key)

        const param = {
            key: identifier.value,
            fieldPath: props.path,
            value: items,
            query: props.query
        } as UpdateStringParameter

        const res = await appStore.UpdateData(param)
        if (res?.success) {
            toast.add({
                title: `Supprimé avec succès!`,
                color: 'success',
                id: 'modal-success'
            })
            await appStore.RefreshAsync()
            deleteModalVisibility.value = false
        }
    }
}

const editedItem = ref<CtaType>()

const editItem = (item: CtaType) => {
    editedItem.value = item
    editModalVisibility.value = true
}

const closeAddModal = () => {
    addModalVisibility.value = false
}

const toggleModal = (state: boolean = false) => {
    deleteModalVisibility.value = state
}

</script>
<template>
    <div class="w-full flex flex-col bg-gray-200 rounded-md p-2 relative" v-if="isVisible">
        <div class="w-full border-b border-gray-300 text-sm font-bold relative flex justify-between items-center">
            <span>{{ field }}</span>
            <ToolButtonAdd @clicked="addModalVisibility = true" />
            <FormsCtaModalAdd :items="data" :path="props.path" :visibility="addModalVisibility" @close="closeAddModal"
                :query="props.query" />
            <FormsCtaModalEdit :items="data" :item="editedItem" :visibility="editModalVisibility" :path="props.path"
                @close="editModalVisibility = false" :query="props.query" />
        </div>
        <div class="flex flex-row flex-wrap gap-0">
            <div v-for="(item, index) in data" :key="index" class="p-2 min-w-1/4 relative">

                <div class="text-gray-700 border border-gray-400 p-2 rounded-md bg-gray-50">
                    <div class="flex flex-row items-center gap-2">
                        <span class="font-bold text-sm">icon:</span>
                        <UIcon :name="ConvertIcon(item?.icon)" class="size-5" />
                    </div>

                    <div class="flex flex-row items-center gap-2">
                        <span class="font-bold text-sm">lien:</span>
                        <div>{{ item?.link }}</div>
                    </div>

                    <div class="flex flex-row items-center gap-2">
                        <span class="font-bold text-sm">type:</span>
                        <div>{{ item?.type }}</div>
                    </div>
                    <div class="flex flex-row items-center gap-2">
                        <FormsLocaleItem :item="item?.text" />
                    </div>
                    <div class="absolute top-2 right-2">
                        <ToolPopover @toggle="toggleModal" :deleteModalVisibility="deleteModalVisibility"
                            @edit="editItem(item)" @delete="deleteItem(item)" :actions="['edit', 'delete']" />
                    </div>
                </div>
                <LoadingInLoading />
            </div>
        </div>
    </div>
</template>