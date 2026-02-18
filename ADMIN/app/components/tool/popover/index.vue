<template>
    <div class="p-2" v-if="props.actions && props.actions.length > 0">
        <UPopover arrow v-model:open="_visibility">
            <UButton icon="i-lucide-ellipsis-vertical" size="sm" color="primary" variant="solid"
                class="cursor-pointer" />
            <template #content>
                <div class="p-2 flex flex-col gap-2">
                    <div class="flex flex-col gap-2" v-if="props.actions.includes('refresh')">
                        <UButton @click="doAction('refresh')" icon="i-lucide-refresh-ccw" color="success"
                            variant="solid" class="cursor-pointer" :ui="{
                                leadingIcon: 'text-white'
                            }">
                            RAFRAICHIR
                        </UButton>

                    </div>
                    <div class="flex flex-col gap-2" v-if="props.actions.includes('edit')">
                        <UButton @click="doAction('edit')" icon="i-lucide-clipboard-pen" color="primary" variant="solid"
                            class="cursor-pointer" :ui="{
                                leadingIcon: 'text-white'
                            }">
                            EDITER
                        </UButton>

                    </div>
                    <div class="flex flex-col gap-2" v-if="props.actions.includes('delete')">
                        <UButton @click="showConfirmModal" icon="i-lucide-trash" color="error" variant="solid"
                            class="cursor-pointer" :ui="{
                                leadingIcon: 'text-white'
                            }">
                            SUPPRIMER
                        </UButton>
                        <ToolPopoverConfirmModal :visibility="deleteModalVisibility" @confirm="confirm" />
                    </div>
                </div>
            </template>
        </UPopover>
    </div>

</template>
<script setup lang="ts">
const props = defineProps({
    actions: {
        type: Array as PropType<string[]>,
        default: []
    },
    deleteModalVisibility: {
        type: Boolean,
        default: false
    },
    query: {
        type: String,
        default: ''
    }
})
const _visibility = ref(false)
const _deleteModalVisibility = ref(false)

const emit = defineEmits<{
    (e: 'toggle', value: boolean): void
    (e: 'edit'): void
    (e: 'delete'): void
    (e: 'refresh'): void
}>()

const doAction = (action: any) => {
    _visibility.value = false
    emit(action)
}

const showConfirmModal = () => {
    emit('toggle', true)
}

watch(
    () => props.deleteModalVisibility,
    (newVal) => {
        _deleteModalVisibility.value = newVal
    }
)

const confirm = (state: boolean) => {
    if (state) emit('delete')
    if (!state) emit('toggle', false)
} 
</script>