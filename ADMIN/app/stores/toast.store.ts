import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useToastStore = defineStore('toast-store', () => {
    interface ToastData {
        message: string;
        type: 'success' | 'error' | 'info';
    }

    const isVisible = ref(false);
    const data = ref<ToastData>({ message: '', type: 'info' });

    const showToast = (message: string, type: 'success' | 'error' | 'info') => {
        data.value.message = message;
        data.value.type = type;
        isVisible.value = true;

        setTimeout(() => {
            isVisible.value = false;
        }, 3000);
    };

    return {
        isVisible,
        data,
        showToast,
    };
});
