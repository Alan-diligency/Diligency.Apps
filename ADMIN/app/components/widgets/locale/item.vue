<template>
    <div class="h-full w-full rounded-md" v-if="typeofdata == 'object'">
        <div class="max-w-1/2 bg-gray-200 p-2 rounded-md relative">
            <div class="absolute -top-1 -right-1">
                <WidgetsLocaleModalEdit :item="item" :visibility="editModalVisibility"
                    @close="editModalVisibility = false" :parameter="parameter" :datatype="typeofdata" />
                <ToolPopover @edit="editItem()" @toggle="toggleModal" :deleteModalVisibility="deleteModalVisibility"
                    @delete="deleteItem()" :actions="actions" />
            </div>
            <WidgetsLocaleTable :displayText="props.displayText" :item="data" />
        </div>
    </div>

</template>

<script lang="ts" setup>
import { useTypeCheck } from '~/composable/useTypeCheck'
import type { UpdateParameter } from '~/helpers/dto/requests'
import { deepToRaw } from '~/helpers/tools'
import { TABLE_PROPERTY } from '~/helpers/types/props'
const deleteModalVisibility = ref(false)

const appStore = useAppStore()
const toast = useToast()
const props = defineProps(TABLE_PROPERTY)

const { isLocaleType, isLocaleTypeArray } = useTypeCheck()


const editModalVisibility = ref(false)

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

const deleteItem = async () => {
    if (!props.actions?.includes('delete')) return
    if (!props.item) return
    const original = props.items?.map((item: any) => deepToRaw(item))
    const _items = original.filter((x: any) => x._key !== props.item._key)

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
</script>