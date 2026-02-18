<template>
    <ToolPopover @edit="showModal" :actions="['edit']" />
    <UModal :close="false" v-model:open="modalState" :dismissible="false" :title="`Edition`" :description="''"
        :ui="{ footer: 'justify-end' }">
        <template #body>
            {{ props.displayText }}
            <div class="relative bg-gray-50">
                <UForm :schema="schema" :state="state" @submit="onSubmit">
                    <div class="flex flex-col gap-1 h-72 overflow-y-scroll border border-gray-400 p-2">
                        <div class="p-1rounded-md" v-for="(item, index) in items" :key="index">
                            <div class="w-full p-1 flex items-center  cursor-pointer"
                                :class="isSelected(item) ? 'bg-red-100' : 'bg-gray-100'" @click="toggleParent(item)">
                                <div class="font-bold text-gray-500 flex items-center justify-between w-full p-1">
                                    {{ item }}
                                    <UButton type="button"
                                        :icon="isSelected(item) ? 'i-lucide-circle-check' : 'i-lucide-circle'" size="xs"
                                        color="error" variant="solid" class="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-10"></div>
                    <UFormField label="Ajouter" name="_input">
                        <div class="flex gap-2 w-full">
                            <UInput placeholder="" v-model="toAddItem" class="w-full" />
                            <ButtonsGreen text="Ajouter" @clicked="addItemToList" />
                        </div>
                    </UFormField>
                    <div class="flex items-center justify-end w-full gap-2 pt-8">
                        <ButtonsBlack text="anuuler" @clicked="closeModal" />
                        <UButton label="Sauvegarder" color="primary" class="cursor-pointer" type="submit" />
                    </div>
                </UForm>
                <LoadingInLoading />
            </div>
        </template>
    </UModal>
</template>
<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui';
import z from 'zod';
import { useConverter } from '~/composable/useConverter';
import { useAppStore } from '~/stores/app.store';

import type { UpdateParameter } from '~/helpers/dto/requests';
import { PROPS } from './props';
const { ConvertIcon } = useConverter()
const props = defineProps(PROPS)

const toast = useToast()
const pageStore = usePageStore()
const navigationStore = useNavigationStore()
const appStore = useAppStore()

const modalState = ref(false)

const schema = z.object({
    input: z.string().optional(),
})

type Schema = z.output<typeof schema>


watch(
    () => props.item,
    (newVal) => {
        state.input = newVal as any
    }
)

const state = reactive({
    input: 'none',
})

const showModal = () => {
    modalState.value = true
}

const closeModal = () => {
    modalState.value = false
}

const toDelete = ref<string[]>([])
const isSelected = (item: string) => {
    return toDelete.value.includes(item)
}

const toAddItems = ref<string[]>([])
const toAddItem = ref<string>('')

const addItemToList = () => {
    if (toAddItem.value && toAddItem.value != '') {

        if (items.value.includes(toAddItem.value)) {
            return
        }

        toAddItems.value.push(toAddItem.value)
        toAddItem.value = ''
    }
}

const items = computed(() => {
    return [
        ...toAddItems.value,
        ...props.items
    ]
})

const toggleParent = (item: string) => {
    const existIndex = toDelete.value.findIndex(x => x === item)

    if (existIndex >= 0) {
        toDelete.value.splice(existIndex, 1)
    } else {
        toDelete.value.push(item)
    }
}
const onSubmit = async (event: FormSubmitEvent<Schema>) => {

    var cleaned: string[] = []
    items.value.forEach((el: string) => {
        if (!toDelete.value.includes(el)) {
            cleaned.push(el)
        }
    })

    console.log(cleaned)

    const updatedParam = {
        ...props.parameter,
        value: cleaned,
    } as UpdateParameter

    const res = await appStore.Update(updatedParam)

    if (res?.success) {
        toast.add({
            title: `Mise à jour avec succès!`,
            color: 'success',
            id: 'modal-success'
        })
        await appStore.RefreshAsync()
        closeModal()
    }
}
</script>