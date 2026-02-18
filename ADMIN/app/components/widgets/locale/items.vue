<template>
    <div class="h-full w-full rounded-md flex gap-2 relative" v-if="typeofdata == 'array'">
        <ToolButtonAdd @clicked="addModalVisibility = true" class="absolute top-2 right-2" />
        <WidgetsLocaleModalAdd :items="data" @close="closeAddModal" :visibility="addModalVisibility"
            :parameter="parameter" />
        <div class=" bg-gray-200 p-2 rounded-md w-full lg:max-w-1/2 xl:max-w-1/3 relative"
            v-for="(item, index) in (data as any[])" :key="index">
            <div class="absolute -top-1 -right-1">
                <WidgetsLocaleModalEdit :items="data" :item="item" :visibility="editModalVisibility"
                    @close="editModalVisibility = false" :parameter="parameter" :datatype="typeofdata" />
                <ToolPopover @edit="editItem()" @toggle="toggleModal" :deleteModalVisibility="deleteModalVisibility"
                    @delete="deleteItem(item._key)" :actions="actions" />
            </div>
            <WidgetsLocaleTable :displayText="props.displayText" :item="item" />
            <LoadingInLoading />
        </div>
    </div>

</template>

<script lang="ts" setup>
import { useTypeCheck } from '~/composable/useTypeCheck'
import type { UpdateParameter } from '~/helpers/dto/requests'
import { deepToRaw } from '~/helpers/tools'
import { TABLE_PROPERTY } from '~/helpers/types/props'



const appStore = useAppStore()
const toast = useToast()
const props = defineProps(TABLE_PROPERTY)

const { isLocaleType, isLocaleTypeArray } = useTypeCheck()

const editModalVisibility = ref(false)
const addModalVisibility = ref(false)
const deleteModalVisibility = ref(false)

const data = computed(() => props.item)
const actions = computed(() => props.actions)
const parameter = computed(() => props.parameter)

const typeofdata = computed(() => {
    if (isLocaleType(data.value)) return 'object'
    if (isLocaleTypeArray(data.value)) return 'array'
})

const editItem = () => {
    if (!props.item) return
    editModalVisibility.value = true
}

const toggleModal = () => {
    deleteModalVisibility.value = !deleteModalVisibility.value
}

const deleteItem = async (key: string) => {
    if (!props.actions?.includes('delete')) return
    if (!props.item) return

    const original = props.items?.map((item: any) => deepToRaw(item))
    const _items = original.filter((x: any) => x._key !== key)

    const updatedParam = {
        ...parameter.value,
        value: _items,
    } as UpdateParameter

    const res = await appStore.Update(updatedParam)
    if (res?.success) {
        toast.add({
            title: `Supprimé avec succès!`,
            color: 'success',
            id: 'modal-success'
        })
        await appStore.RefreshAsync()
    }
}

const closeAddModal = () => {
    addModalVisibility.value = false
}   
</script>