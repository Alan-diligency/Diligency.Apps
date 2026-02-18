<template>
    <div class="h-full w-full relative rounded-md">
        <div class="absolute -top-2 -right-2">
            <ToolPopover @edit="editItem()" @toggle="toggleModal" :deleteModalVisibility="deleteModalVisibility"
                @delete="deleteItem()" :actions="(props.actions as any)" />
            <FormsLocaleModalEdit :query="props.query" :items="props.items" :item="props.item"
                :visibility="editModalVisibility" :path="path" @close="editModalVisibility = false"
                :type="props.type" />
        </div>
        <div class="font-bold text-sm py-2">Texte :</div>
        <table class="w-full border border-gray-400 bg-gray-100 text-sm">
            <thead class="bg-gray-300">
                <tr>
                    <th class="border border-gray-400 p-2 text-left">Langue</th>
                    <th class="border border-gray-400 p-2 text-left">Valeur</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-400 p-2 font-medium">Français</td>
                    <td class="border border-gray-400 p-2 whitespace-normal wrap-break-word">
                        {{ item?.fr || '-' }}
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-400 p-2 font-medium">Anglais</td>
                    <td class="border border-gray-400 p-2 whitespace-normal wrap-break-word">
                        {{ item?.en || '-' }}
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script lang="ts" setup>
import { deepToRaw } from '~/helpers/tools'
import type { UpdateStringParameter } from '~/stores/app.store'
const navigationStore = useNavigationStore()
const deleteModalVisibility = ref(false)

const appStore = useAppStore()
const toast = useToast()
const props = defineProps({
    items: {
        type: [Array] as PropType<any>,
        default: null
    },
    item: {
        type: [Object] as PropType<any>,
        default: null
    },
    fieldPath: {
        type: String,
        default: ''
    },
    actions: {
        type: Array,
        default: []
    },
    query: {
        type: String,
        default: ''
    },
    type: {
        type: String as PropType<'object' | 'array'>,
        default: ''
    }
})
const editModalVisibility = ref(false)

const path = computed(() => props.fieldPath)


const emit = defineEmits<{
    (e: 'updateKey', key: string): void
}>()


const editItem = () => {
    if (!props.item) return
    emit('updateKey', props.item._key)
    editModalVisibility.value = true
}

const identifier = computed(() => {
    const id = navigationStore.currentNavigation?.identifier
    return id ? deepToRaw(id)?._key : navigationStore.currentNavigation?.key
})

const toggleModal = () => {
    deleteModalVisibility.value = !deleteModalVisibility.value
}

const deleteItem = async () => {
    if (!props.item) return
    const original = props.items?.map((item: any) => deepToRaw(item))
    const _items = original.filter((x: any) => x._key !== props.item._key)

    const param = {
        key: identifier.value,
        fieldPath: props.fieldPath,
        value: _items,
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
    }
}



</script>