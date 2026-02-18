<template>
    <UModal :close="false" title="Suppression" v-model:open="_visibility" :dismissible="false">
        <template #body>
            <div class="relative">
                <div>
                    {{ text ?? 'Voulez vous supprimer cet élement ?' }}
                </div>
                <div class="py-2 w-full flex justify-end gap-2">
                    <ButtonsBlack @clicked="emit('confirm', false)" text="annuler" />
                    <ButtonsBlue @clicked="emit('confirm', true)" text="supprimer" />
                </div>
                <LoadingInLoading />
            </div>

        </template>
    </UModal>
</template>

<script lang="ts" setup>
const props = defineProps(
    {
        text: {
            type: String,
            default: null
        },
        visibility: {
            type: Boolean,
            default: false
        },
    }
)

const text = computed(() => props.text)
const _visibility = ref(false)

watch(
    () => props.visibility,
    (newVal) => {
        _visibility.value = newVal
    }
)

const hideModal = () => {
    _visibility.value = false
}

const emit = defineEmits<{
    (e: 'confirm', value: boolean): void
}>()
</script>