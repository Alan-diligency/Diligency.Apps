<template>
    <td class="min-h-18 p-2 w-auto flex items-start">
        <div class="font-bold h-full">


        </div>
    </td>

    <!-- <td class="min-h-18 p-2 w-auto flex items-start" v-if="isObjectOfFieldType(props.data)">
        <div class="font-bold h-full">
            {{ camelToUnderscore(props.data?.fieldKey) }}
        </div>
    </td>

    <td class="min-h-18 p-2 w-full" v-if="isObjectOfFieldType(props.data)">
        <div class="bg-gray-200 min-h-16 w-full">
            <div class="w-full">
                <tr v-for="(value, index) in data" :key="index" class="w-full">
                    <td class="border p-2 border-gray-400 font-bold w-32" v-if="index.toString() != '_key'">
                        {{ index }}
                    </td>
                    <td class="border p-2 border-gray-400 w-full" v-if="index.toString() != '_key'">
                        <TableViewsLocale :data="value" />
                        <TableViewsText :data="value" />
                    </td>
                </tr>
            </div>
        </div>
    </td>
    <td class="min-h-18 p-2 w-full h-full flex items-start" v-if="isObjectOfFieldType(props.data)">
        <div class="h-full w-full flex flex-col gap-2">
            <button type="button" @click="onClckEdit(props.data._key)"
                class="cursor-pointer inline-flex text-orange-800 items-center justify-center bg-orange-200 hover:bg-orange-800 hover:text-white h-8 aspect-square">
                <Icon name="lucide:pen" />
                <span class="sr-only">Edit</span>
            </button>
            <button type="button" @click="onClckDelete(props.data._key)"
                class="cursor-pointer inline-flex text-red-800 items-center justify-center bg-red-200 hover:bg-red-800 hover:text-white h-8 aspect-square">
                <Icon name="lucide:trash" />
                <span class="sr-only">Delete</span>
            </button>
        </div>
    </td> -->
</template>
<script lang="ts" setup>
import { TABLE_ROW_FIELD_VIEW_PROPS } from './views.prop';
const props = defineProps(TABLE_ROW_FIELD_VIEW_PROPS)

const emit = defineEmits<{
    (e: 'update:editTableRow', value: string): void;
    (e: 'update:deleteTableRow', value: string): void;
}>();

const onClckEdit = (key: string) => {
    emit('update:editTableRow', key);
}

const onClckDelete = (key: string) => {
    emit('update:deleteTableRow', key);
}
</script>