<template>
    <div v-if="props.data && isArrayOfLocale(props.data)" class="w-full bg-gray-200 flex gap-2">
        <div class="w-full flex flex-col gap-2 p-2" v-for="(item, index) in props.data" :key="index">
            <div class="w-full">
                <span class="font-bold">FR: </span>
                <span>{{ item.fr }}</span>
            </div>
            <div class="w-full">
                <span class="font-bold">EN: </span>
                <span>{{ item.en }}</span>
            </div>
        </div>
    </div>

    <div v-if="props.data && isObjectOfLocale(props.data)" class="w-full bg-gray-200">
        <div class="w-full flex flex-col gap-2 p-2">
            <div class="w-full">
                <span class="font-bold">FR: </span>
                <span>{{ props.data?.fr }}</span>
            </div>
            <div class="w-full">
                <span class="font-bold">EN: </span>
                <span>{{ props.data?.en }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { isArrayOfLocale, isObjectOfLocale } from '../view-manager';
import { TABLE_VIEWS_PROPS } from './views.prop';
const props = defineProps(TABLE_VIEWS_PROPS)

</script>