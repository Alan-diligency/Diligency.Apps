<template>
    <div class="border-b border-gray-200 hover:bg-gray-50 cursor-pointer flex flex-row"
        v-if="isObjectOfFieldType(props.data)">
        <div class="min-h-18 p-2 w-32 flex items-start">
            <div class="font-bold h-full">
                {{ camelToUnderscore(props.data?.fieldKey) }}
            </div>
        </div>

        <div class="min-h-18 p-2 w-full">
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
        </div>
        <div class="min-h-18 p-2  h-full flex items-start">
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
        </div>
    </div>
    <div v-if="isObjectOfLocale(props.data)">
        <table class="w-full text-sm text-left ">
            <tbody class="relative w-full">
                <tr class="w-full cursor-pointer">
                    <td class="min-w-32 font-bold p-2">{{ props.keyable }}</td>
                    <td class="w-full p-2">
                        <TableViewsLocale :data="props.data" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="isString(props.data)">
        <table class="w-full text-sm text-left ">
            <tbody class="relative w-full">
                <tr class="w-full cursor-pointer">
                    <td class="min-w-32 font-bold p-2">{{ props.keyable }}</td>
                    <td class="w-full p-2">
                        <TableViewsText :data="props.data" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>
import { camelToUnderscore, isObjectOfFieldType, isObjectOfLocale, isString } from '../view-manager';
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