<template>
    <!-- <div id="modal-window" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/70">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                <div class="space-y-4 md:space-y-6 py-4 md:py-6">
                    <div class="leading-relaxed text-body">
                        <div class="w-full flex gap-2 items-center font-bold text-2xl">
                            {{ props.data.title }}
                        </div>
                        <div class="w-full flex gap-2 items-center text-xl">
                            {{ props.data.subtitle }}
                        </div>
                    </div>
                </div>
                <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                    <button type="button"
                        class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
                        @click="handleSubmit">
                        Enregistrer
                    </button>
                    <button type="button"
                        class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
                        @click="handleCancel">
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script lang="ts" setup>
import { Modal } from 'flowbite';
import { defineEmits, defineProps, onMounted, ref } from 'vue';
import type { ModalConfirmDataType } from '~/helpers/utils/interfaces';

// Define props for the modal component
const props = defineProps<{
    data: ModalConfirmDataType | null;
}>();

// Emit events to parent component
const emit = defineEmits<{
    (e: 'update:initModalConfirm', value: any): void;
    (e: 'update:onConfirmedFromModal', value: any): void;
}>();

const modal = ref<Modal | null>(null);

// Initialize the modal on mount
onMounted(() => {
    if (props.data) {
        const $el = document.getElementById("modal-window");
        if ($el) {
            const options = {
                placement: "center",
                backdrop: "static",
                closable: false,
            };
            const instanceOptions = { id: "modal-window", override: true };
            modal.value = new Modal($el, options as any, instanceOptions);
            emit('update:initModalConfirm', modal.value);
        }
    }
});

// Data to be emitted
const emitData = ref({
    action: "supression",
    data: props.data?.data?._key
});

// Handle the modal submit action
const handleSubmit = () => {
    if (modal.value) {
        emit('update:onConfirmedFromModal', emitData.value);
        modal.value.hide();  // Hide the modal
    }
};

// Handle the modal cancel action
const handleCancel = () => {
    if (modal.value) {
        modal.value.hide();  // Hide the modal
    }
};
</script>

<style scoped>
/* Modal styles */
</style>
