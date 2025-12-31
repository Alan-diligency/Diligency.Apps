<template>
    <!-- Icons -->
    <div v-if="isString(props.data)" class="pt-2 bg-gray-200 p-2">
        {{ icon }}
        <div class="w-full flex items-center gap-1">
            <div class="w-10 aspect-square bg-gray-200 flex items-center justify-center"
                v-if="(props.data as string)?.startsWith('lucide:')">
                <Icon :name="icon" size="25" />
            </div>
            <input type="text" v-model="editValue" class="w-full h-10 bg-white" />
        </div>
    </div>
    <div v-if="isNumber(props.data)" class="pt-2 bg-gray-200 p-2">
        <div class="w-full flex items-center gap-1">
            <input type="text" v-model="editValue" class="w-full h-10 bg-white" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { isNumber, isString } from '../view-manager';
import { TABLE_VIEWS_PROPS } from '../views/views.prop';
const props = defineProps(TABLE_VIEWS_PROPS)
const editValue = ref<string>(isNumber(props.data) ? props.data.toString() : props.data as any)

const icon = computed(() => (props.data as any)?.icon ?? 'lucide:circle')

const emit = defineEmits<{
    (e: 'update:inputModelValue', value: string): void;
}>();

watch(editValue, (newValue) => {
    emit('update:inputModelValue', newValue);
}, { deep: true });


</script>