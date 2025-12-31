<template>
    <div class="p-2 bg-gray-300 text-medium text-body w-full" v-if="props.data">
        <h3 class="text-lg font-semibold text-heading mb-4">HERO</h3>
        <div class="bg-white border border-gray-200 rounded">
            <table class="w-full text-sm text-left border border-white">
                <thead class="bg-gray-100 border-b border-gray-300">
                    <tr>
                        <th class="px-4 py-2 font-semibold">Clé</th>
                        <th class="px-4 py-2 font-semibold">Valeur</th>
                        <th class="px-4 py-2 font-semibold"></th>
                    </tr>
                </thead>

                <tbody class="relative">
                    <LoaderInlineLoader />
                    <tr v-for="key in visibleKeyes" :key="key"
                        class="border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                        <td class="px-4 py-2 font-medium capitalize text-gray-700 w-50">
                            {{ key }}
                        </td>
                        <td class="px-4 py-2 text-gray-700">
                            <TableViewsLocale :data="data[key]" />
                            <TableViewsHorizontalList :data="data[key]" />
                            <TableViewsText :data="data[key]" />
                            <TableViewsNumber :data="data[key]" />
                        </td>
                        <td class="flex p-2 justify-end">
                            <button type="button" @click="editMenu(key)"
                                class="cursor-pointer inline-flex text-gray-800 items-center justify-center bg-gray-200 hover:bg-gray-800 hover:text-white h-8 aspect-square">
                                <Icon name="lucide:pen" />
                                <span class="sr-only">Icon description</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data?: any, excludedKeys: string[] }>()

const visibleKeyes = computed(() => {
    if (!props.data) return [];
    return Object.keys(props.data).filter(k => !props.excludedKeys?.includes(k))
});

const editMenu = (key: string) => {
    alert(key)
}
</script>
