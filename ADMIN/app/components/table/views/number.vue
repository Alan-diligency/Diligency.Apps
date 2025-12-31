<template>
    <div v-if="isNumber(props.data)" class="bg-gray-200 p-2 flex items-center gap-2">
        <span>{{ props.data }}</span>
    </div>
</template>
<script lang="ts" setup>
import { isNumber } from '../view-manager';
import { TABLE_VIEWS_PROPS } from './views.prop';
const props = defineProps(TABLE_VIEWS_PROPS)
</script>