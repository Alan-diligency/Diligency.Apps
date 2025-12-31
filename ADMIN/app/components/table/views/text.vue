<template>
    <div v-if="isString(props.data) && props.data != ''" class="bg-gray-200 p-2 flex items-center gap-2">
        <Icon class="" size="25" :name="(props.data as string) ?? 'lucide:circle'"
            v-if="(props.data as string)?.startsWith('lucide:')" />
        <span>{{ props.data }}</span>
    </div>
    <div v-if="isString(props.data) && props.data == ''">
        -
    </div>
    <div v-if="isBoolean(props.data)">
        {{ props.data ? "OUI" : "NON" }}
    </div>
    <div v-if="props.data && isArrayOfString(props.data)" class="bg-gray-200 p-2">
        <div v-for="(item, index) in props.data" :key="index">
            {{ item }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { isArrayOfString, isBoolean, isString } from '../view-manager';
import { TABLE_VIEWS_PROPS } from './views.prop';
const props = defineProps(TABLE_VIEWS_PROPS)
</script>