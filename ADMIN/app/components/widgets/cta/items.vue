<template>
    <div class="w-full flex flex-col bg-gray-200 rounded-md p-2 relative" v-if="isCtaTypeArray(data)">
        <div>
            {{ props.displayText }}
        </div>
        <ToolButtonAdd @clicked="addModalVisibility = true" class="absolute top-2 right-2" />
        <WidgetsCtaModalAdd :items="data" @close="closeAddModal" :visibility="addModalVisibility"
            :parameter="parameter" />
        <WidgetsCtaModalEdit :items="data" :item="editedItem" :visibility="editModalVisibility"
            @close="editModalVisibility = false" :parameter="parameter" />
        <div class="flex flex-row flex-wrap gap-0">
            <div v-for="(item, index) in data" :key="index" class="p-2 w-full md:w-1/2 xl:w-1/3 relative">
                <div class="absolute top-2 right-2">
                    <ToolPopover @toggle="toggledeleteModal" :deleteModalVisibility="deleteModalVisibility"
                        @edit="editItem(item)" @delete="deleteItem(item)" :actions="['edit', 'delete']" />
                </div>
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
                </div>
                <LoadingInLoading />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConverter } from '~/composable/useConverter';
import { useTypeCheck } from '~/composable/useTypeCheck';
import type { UpdateParameter } from '~/helpers/dto/requests';
import { deepToRaw } from '~/helpers/tools';
import type { CtaType } from '~/helpers/types/cta-type';
import { TABLE_PROPERTY } from '~/helpers/types/props';
import { useAppStore } from '~/stores/app.store';

const appStore = useAppStore()
const props = defineProps(TABLE_PROPERTY)

const { isCtaTypeArray } = useTypeCheck()
const { ConvertIcon } = useConverter()

const toast = useToast()
const editModalVisibility = ref(false)
const addModalVisibility = ref(false)
const deleteModalVisibility = ref(false)

const parameter = computed(() => props.parameter)
const data = computed(() => props.items as CtaType[])

const deleteItem = async (item: CtaType) => {
    if (item) {
        const original = data.value?.map(item => deepToRaw(item))
        const items = original.filter(x => x._key !== item._key)
        const param = {
            ...parameter.value,
            value: items
        } as UpdateParameter


        const res = await appStore.Update(param)

        if (res?.success) {
            toast.add({
                title: `Mise à jour avec succès!`,
                color: 'success',
                id: 'modal-success'
            })
            await appStore.RefreshAsync()
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

const toggledeleteModal = (state: boolean = false) => {
    deleteModalVisibility.value = state
}

</script>