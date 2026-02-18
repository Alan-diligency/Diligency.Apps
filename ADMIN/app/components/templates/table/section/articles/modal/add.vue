<template>
    <UModal v-model:open="_visibility" :dismissible="false" :title="`Ajouter un Article`" :description="``"
        :ui="{ footer: 'justify-end' }" :close="false">
        <template #body>
            <div class="relative p-2 bg-gray-50">
                <UForm :schema="schema" :state="state" @submit="onSubmit">
                    <div class="flex flex-col gap-4 w-full">
                        <div class="p-1 rounded-md space-y-3">

                            <UFormField label="Auteur" name="author">
                                <UInput v-model="state.author" class="w-full" />
                            </UFormField>
                            <UFormField label="image" name="image">
                                <UInput v-model="state.image" class="w-full" />
                            </UFormField>
                            <UFormField label="thumbnail" name="thumbnail">
                                <UInput v-model="state.thumbnail" class="w-full" />
                            </UFormField>
                            <UFormField label="Top Tags" name="top-tags">
                                <UInputTags v-model="state.topTags" class="w-full" />
                            </UFormField>
                            <UFormField label="Bottom Tags" name="bottom-tags">
                                <UInputTags v-model="state.bottomTags" class="w-full" />
                            </UFormField>
                            <UFormField label="Titre" name="title">
                                <div class="rounded-md bg-gray-200">
                                    <div class="flex flex-row p-2 gap-2">
                                        <div class="size-full  flex flex-col">
                                            <div class="font-medium uppercase">Français:</div>
                                            <UTextarea v-model="state.title.fr" class="w-full" :rows="4" />
                                        </div>
                                        <div class="size-full flex flex-col">
                                            <div class="font-medium uppercase">Anglais:</div>
                                            <UTextarea v-model="state.title.en" class="w-full" :rows="4" />
                                        </div>
                                    </div>
                                </div>
                            </UFormField>

                            <UFormField label="Contenu" name="content">
                                <div class="rounded-md bg-gray-200">
                                    <div class="flex flex-row p-2 gap-2">
                                        <div class="size-full  flex flex-col">
                                            <div class="font-medium uppercase">Français:</div>
                                            <UTextarea v-model="state.content.fr" class="w-full" :rows="10" />
                                        </div>
                                        <div class="size-full flex flex-col">
                                            <div class="font-medium uppercase">Anglais:</div>
                                            <UTextarea v-model="state.content.en" class="w-full" :rows="10" />
                                        </div>
                                    </div>
                                </div>
                            </UFormField>
                        </div>
                    </div>
                    <div class="flex items-center justify-end w-full gap-2 pt-2">
                        <ButtonsBlack @clicked="closeModal" text="annuler" />
                        <UButton label="SAUVEGARDER" color="primary" class="cursor-pointer" type="submit" />
                    </div>
                </UForm>
                <LoadingInLoading />
            </div>
        </template>
    </UModal>
</template>
<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import { v4 as uuidv4 } from "uuid"
import z from 'zod'
import { DEFAULT_FIELD_UNDEFINED } from '~/helpers/constants'
import type { AddParameter } from '~/helpers/dto/requests'
import { deepToRaw } from '~/helpers/tools'
import { useAppStore } from '~/stores/app.store'
import { PROPS } from './props'

const _visibility = ref(false)

const toast = useToast()
const appStore = useAppStore()

const props = defineProps(PROPS)

watch(
    () => props.visibility,
    (newVal) => {
        _visibility.value = newVal
    }
)

const emit = defineEmits<{
    (e: 'close'): void
}>()

const schema = z.object({
    author: z.string().optional(),
    image: z.string().optional(),
    thumbnail: z.string("ce champ est requis"),
    bottomTags: z.array(z.string()).optional(),
    topTags: z.array(z.string()).optional(),
    title: z.object({
        en: z.string("ce champ est requis"),
        fr: z.string("ce champ est requis"),
    }),
    content: z.object({
        en: z.string("ce champ est requis"),
        fr: z.string("ce champ est requis"),
    })
})

type Schema = z.output<typeof schema>

const state = reactive({
    author: DEFAULT_FIELD_UNDEFINED,
    image: DEFAULT_FIELD_UNDEFINED,
    thumbnail: DEFAULT_FIELD_UNDEFINED,
    bottomTags: [],
    topTags: [],
    title: {
        en: '',
        fr: '',
    },
    content: {
        en: '',
        fr: '',
    }
})

const closeModal = () => {
    emit('close')
}

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    console.log(event.data)
    const param = {
        _type: "article",
        _key: uuidv4(),
        _id: uuidv4(),
        ...deepToRaw(event.data)
    } as AddParameter

    console.log(param)
    const res = await appStore.Add(param)

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