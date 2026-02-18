<template>
    <div class="font-bold text-xs py-2 text-gray-500">{{ props.displayText.toUpperCase() }}</div>
    <table class="w-full border border-gray-400 bg-gray-100 text-sm">
        <thead class="bg-gray-300">
            <tr class="w-32">
                <th class="border border-gray-400 p-2 text-left">Langue</th>
                <th class="border border-gray-400 p-2 text-left">Valeur</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-gray-400 p-2 font-medium w-32">Français</td>
                <td class="border border-gray-400 p-2 whitespace-normal wrap-break-word">
                    {{ data?.fr || '' }}
                </td>
            </tr>
            <tr>
                <td class="border border-gray-400 p-2 font-medium w-32">Anglais</td>
                <td class="border border-gray-400 p-2 whitespace-normal wrap-break-word">
                    {{ data?.en || '' }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import type { LocaleType } from '~/helpers/types/locale-type';

const props = defineProps({
    item: {
        type: [Object] as PropType<LocaleType>,
        default: null
    },
    displayText: {
        type: String,
        default: ''
    },
})

const data = computed(() => props.item)
</script>