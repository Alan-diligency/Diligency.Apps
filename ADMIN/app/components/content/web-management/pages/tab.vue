<template>
    <div class="w-full flex gap-2">
        <!-- Parent dropdown -->
        <div>
            <button ref="triggerEl" type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 inline-flex items-center">
                {{ currentTab?.name }}
                <svg class="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div ref="targetEl" class="z-10 hidden bg-neutral-primary-medium border border-gray-400 shadow-lg w-44">
                <ul class="p-2 text-sm font-medium">
                    <li v-for="tab in tabs" :key="tab.key">
                        <button class="w-full text-left p-2 hover:bg-neutral-tertiary-medium rounded"
                            @click="selectParent(tab)">
                            {{ tab.name }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Sub dropdown -->
        <div v-if="subTabs?.length">
            <button ref="triggerSubEl" type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 inline-flex items-center">
                {{ currentSubTab?.name }}
                <svg class="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div ref="targetSubEl" class="z-10 hidden bg-neutral-primary-medium border border-gray-400  shadow-lg w-44">
                <ul class="p-2 text-sm font-medium">
                    <li v-for="tab in subTabs" :key="tab.key">
                        <button class="w-full text-left p-2 hover:bg-neutral-tertiary-medium rounded"
                            @click="selectChild(tab)">
                            {{ tab.name }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Dropdown } from 'flowbite'
import { nextTick, onMounted, ref, watch } from 'vue'

export interface PageTabType {
    name: string
    key: string
    children: PageTabType[]
}

const props = defineProps<{ tabs?: PageTabType[] }>()
const emit = defineEmits<{
    (e: 'update-tab', value: PageTabType): void
}>()

const currentTab = ref<PageTabType | null>(null)
const currentSubTab = ref<PageTabType | null>(null)
const subTabs = ref<PageTabType[]>([])

const triggerEl = ref<HTMLElement | null>(null)
const targetEl = ref<HTMLElement | null>(null)
const triggerSubEl = ref<HTMLElement | null>(null)
const targetSubEl = ref<HTMLElement | null>(null)

let parentDropdown: Dropdown | null = null
let subDropdown: Dropdown | null = null

watch(
    () => props.tabs,
    async (tabs) => {
        if (!tabs?.length) return

        currentTab.value = tabs?.[0] as any
        subTabs.value = tabs?.[0]?.children ?? []
        currentSubTab.value = subTabs.value[0] ?? null

        emit('update-tab', (currentSubTab.value || currentTab.value) as PageTabType)

        await nextTick()
        initSubDropdown()
    },
    { immediate: true }
)

const selectParent = async (tab: PageTabType) => {
    currentTab.value = tab
    subTabs.value = tab.children ?? []
    currentSubTab.value = subTabs.value[0] ?? null

    emit('update-tab', currentSubTab.value ?? tab)

    await nextTick()
    initSubDropdown()
}

const selectChild = (tab: PageTabType) => {
    currentSubTab.value = tab
    emit('update-tab', tab)
}

onMounted(() => {
    if (!triggerEl.value || !targetEl.value) return

    parentDropdown = new Dropdown(targetEl.value, triggerEl.value, {
        placement: 'bottom',
        triggerType: 'click',
    })
})

const initSubDropdown = () => {
    if (!triggerSubEl.value || !targetSubEl.value) return

    subDropdown?.destroy()
    subDropdown = new Dropdown(targetSubEl.value, triggerSubEl.value, {
        placement: 'bottom',
        triggerType: 'click',
    })
}
</script>
