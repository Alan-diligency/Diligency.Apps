<template>
    <div class="flex flex-col gap-2 w-full" v-if="formData">
        {{ formData }}
        <div class="w-full">
            <label class="font-bold">Icon: {{ props.data.icon }}</label>
            <TableEditText v-model:inputModelValue="formData.icon" :data="formData.icon" />
        </div>
        <!-- <div class="w-full">
            <label class="font-bold">Link</label>
            <TableEditText v-model:inputModelValue="formData.link" :data="formData?.link" />
        </div>
        <div class="w-full">
            <label class="font-bold">Nom</label>
            <TableEditLocale v-model:locale-model-value="formData.name" :data="formData?.name" />
        </div>
        <div class="w-full">
            <label class="font-bold">Description</label>
            <TableEditLocale v-model:locale-model-value="formData!.description" :data="formData?.description" />
        </div> -->
    </div>
</template>
<script lang="ts" setup>
import type { ObjectOfFieldMenuType } from '~/helpers/utils/interfaces';
const icon = computed(() => formData.value?.icon)
const formData = computed(() => props.data)
const props = defineProps({
    data: {
        type: Object as () => ObjectOfFieldMenuType,
        default: null,
    }
});

const emit = defineEmits<{
    (e: 'update:data', value: any): void;
}>();

watch(
    () => props.data,
    (newData, oldData) => {
        if (newData !== oldData) {
            emit('update:data', formData);
        }
    },
    { deep: true }
);

onMounted(() => {
    // formData.value = props.data
})
</script>