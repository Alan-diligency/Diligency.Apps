<script setup lang="ts">
import { useConverter } from '~/composable/useConverter';
import { useTypeCheck } from '~/composable/useTypeCheck';
import { PROPS } from './props';

const props = defineProps(PROPS)
const { ConvertIcon } = useConverter()
const { isString } = useTypeCheck()
const data = computed(() => props.items)
const toggledeleteModal = (state: boolean) => {
    deleteModalVisibility.value = state
}

const deleteModalVisibility = ref(false)

const editItem = () => {

}

const deleteItem = () => { }
</script>

<template>
    <div class="w-full flex flex-col justify-between items-center bg-gray-200 rounded-md p-2 relative"
        v-if="Array.isArray(data)">
        <div class="w-full border-b border-gray-300 text-sm font-bold flex justify-between items-center">
            <div class="w-full">
                {{ props.displayText }}
            </div>

            <!-- <div>
                <ToolPopover @toggle="toggledeleteModal" :deleteModalVisibility="deleteModalVisibility"
                    @edit="editItem()" :actions="['edit']" />
            </div> -->
            <div>
                <WidgetsStringListModal :icon="props.icon" :displayText="props.displayText" :items="data"
                    :parameter="props.parameter" />
            </div>
        </div>
        <div class="w-full text-gray-700 bg-gray-300 p-1">
            <div v-for="(item, index) in data" :key="index">
                {{ index + 1 }} - {{ item }}
            </div>
        </div>
    </div>
</template>