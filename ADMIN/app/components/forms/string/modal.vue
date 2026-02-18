<template>
    <ToolPopover @edit="showModal" :actions="['edit']" />
    <UModal :close="false" v-model:open="modalState" :dismissible="false" :title="`Edition`" :description="''"
        :ui="{ footer: 'justify-end' }">
        <template #body>
            {{ path }}
            <div class="relative p-2 bg-gray-50">
                <UForm :schema="schema" :state="state" @submit="onSubmit">
                    <div class="flex flex-col gap-4">
                        <div class="p-1rounded-md">
                            <UFormField label="Entrer la nouvelle valeur" name="input">
                                <div class="w-full text-gray-700 flex flex-row gap-1 items-center py-2">
                                    <UIcon :name="ConvertIcon(state.input ?? props.icon)" class="size-6"
                                        v-if="props.icon" />
                                    <UInput :placeholder="props.value" v-model="state.input" class="w-full" />
                                </div>
                            </UFormField>
                        </div>
                    </div>
                    <div class="flex items-center justify-end w-full gap-2 pt-2">
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
import { deepToRaw } from '~/helpers/tools';
import { useAppStore, type UpdateStringParameter } from '~/stores/app.store';
import { TABLE_PROPS } from '../table-props';
const { ConvertIcon } = useConverter()
const props = defineProps(TABLE_PROPS)

const toast = useToast()
const pageStore = usePageStore()
const navigationStore = useNavigationStore()
const appStore = useAppStore()

const modalState = ref(false)

const schema = z.object({
    input: z.string('ce champs est resuis').min(2, "la veleur doit etre plus de 2 charactères"),
})

type Schema = z.output<typeof schema>


const state = reactive({
    input: undefined,
})

const showModal = () => {
    modalState.value = true
}

const closeModal = () => {
    modalState.value = false
}

const identifier = computed(() => {
    const id = navigationStore.currentNavigation?.identifier
    return id ? deepToRaw(id)?._key : navigationStore.currentNavigation?.key
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {

    const param = {
        key: identifier.value,
        fieldPath: props.path,
        value: event.data.input,
        query: props.query
    } as UpdateStringParameter

    const res = await appStore.UpdateData(param)

    if (res?.success) {
        toast.add({
            title: `Mise à jour avec succès!`,
            color: 'success',
            id: 'modal-success'
        })
        await appStore.RefreshAsync(identifier.value)
        closeModal()
    }
}
</script>