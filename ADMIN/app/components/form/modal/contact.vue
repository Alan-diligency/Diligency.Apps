<template>
    <div class="flex flex-col gap-2 w-full">
        <div class="w-full">
            <label class="font-bold">Requis</label>
            <TableEditDropDown v-model:selectItem="props.data!.required" :items="BOOLEAN_TYPE" />
        </div>
        <div class="w-full">
            <label class="font-bold">Field Type</label>
            <TableEditDropDown v-model:selectItem="props.data!.type" :items="FIELD_TYPE" />
        </div>
        <div class="w-full">
            <label class="font-bold">Input Type</label>
            <TableEditDropDown v-model:selectItem="props.data!.field" :items="INPUT_TYPE" />
        </div>
        <div class="w-full">
            <label class="font-bold">Error Color</label>
            <TableEditDropDown v-model:selectItem="props.data!.errorColor" :items="COLOR_TYPE" />
        </div>
        <div class="w-full">
            <label class="font-bold">Field Key (ex: firstName, lastName, email, gender..)</label>
            <TableEditText v-model:inputModelValue="props.data!.fieldKey" :data="props.data?.fieldKey" />
        </div>
        <div class="w-full">
            <label class="font-bold">Error text</label>
            <TableEditLocale v-model:locale-model-value="props.data!.error" :data="props.data?.error" />
        </div>
        <div class="w-full">
            <label class="font-bold">Label text</label>
            <TableEditLocale v-model:locale-model-value="props.data!.label" :data="props.data?.label" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { BOOLEAN_TYPE, COLOR_TYPE, FIELD_TYPE, INPUT_TYPE } from '~/helpers/utils/const';
import type { ObjectOfFieldType } from '~/helpers/utils/interfaces';

const props = defineProps({
    data: {
        type: Object as () => ObjectOfFieldType | null,
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
            emit('update:data', newData);
        }
    },
    { immediate: true, deep: true }
);

</script>