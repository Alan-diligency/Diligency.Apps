<template>
    <div class="w-full bg-gray-200 p-2 rounded-md">
        <div class="w-full border-b border-gray-300 text-sm font-bold relative flex justify-between">
            {{ field }}
            <ToolButtonAdd @clicked="addModalVisibility = true" v-if="isArray" />
            <FormsLocaleModalAdd :query="props.query" :items="data" :visibility="addModalVisibility" :path="_path"
                @close="addModalVisibility = false" />
        </div>
        <div class="flex flex-row gap-2 p-2" v-if="isArray">

            <div v-for="(item, index) in data" :key="index"
                class="p-2 max-w-1/2 w-1/2 relative bg-gray-50 border border-gray-400 rounded-md">
                <div class="flex flex-row items-center gap-2">
                    <FormsLocaleItem :query="props.query" :fieldPath="_path" :item="item" :items="data"
                        :actions="['delete', 'edit']" :type="isArray ? 'array' : 'object'" />
                </div>
                <LoadingInLoading />
            </div>
        </div>

        <div class="flex flex-row gap-2 p-2" v-if="isObject">
            <div class="p-2 max-w-1/2 w-1/2 relative bg-gray-50 border border-gray-400 rounded-md">
                <div class="flex flex-row items-center gap-2">
                    <FormsLocaleItem @updateKey="onUpdateChildKey" :query="props.query" :fieldPath="_path" :item="data"
                        :items="[data]" :actions="isArray ? ['delete', 'edit'] : ['edit']"
                        :type="isArray ? 'array' : 'object'" />
                </div>
                <LoadingInLoading />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { PathItem } from '~/components/templates/table/menu/index.vue';
import { useTypeCheck } from '~/composable/useTypeCheck';
const addModalVisibility = ref(false)
const props = defineProps({
    value: {
        type: [Array, String, Object] as PropType<any>,
        default: null
    },
    field: {
        type: String,
        default: ''
    },
    path: {
        type: String,
        default: ''
    },
    query: {
        type: String,
        default: ''
    }
})
const _field = computed(() => props.field)
const _path = computed(() => props.path)

const emit = defineEmits<{
    (e: 'updateKey', payload: PathItem): void
}>()

const onUpdateChildKey = (key: string) => {
    emit('updateKey', {
        key: key,
        field: _field.value
    })
}

const childKey = ref('')
const { isLocaleTypeArray, isLocaleType } = useTypeCheck()
const isArray = computed(() => isLocaleTypeArray(props.value))
const isObject = computed(() => isLocaleType(props.value))
const data = computed(() => props.value)
</script>