<!-- <template>
    <section class="mt-2 w-full bg-gray-300 rounded-xl" v-if="showComponent">
        <div class="bg-gray-100 p-2 rounded-xl border border-gray-300">
            <UTable :loading="userStore.isLoading" :data="tableData" :columns="tableColumns" />
        </div>
    </section>
</template>
<script lang="ts" setup>

import { useConverter } from "~/composable/useConverter"
import { columns } from "./utils/column"
const menuStore = useMenuStore()
const pageStore = usePageStore()
const userStore = useUserStore()

const { ConvertObjetcToArray } = useConverter()
const excludedColumns = ["_key"]
const tableColumns = computed(() => columns)

const tableData = computed(() => {
    return ConvertObjetcToArray(pageStore.selectedPage ?? {}).filter(row => !excludedColumns.includes(row.key))
})

const showComponent = computed(() => menuStore.currentNavigationMenu?.parentKey == PAGES_KEY)

watch(
    () => menuStore.currentNavigationKey,
    async (currentKey) => {
        if (currentKey) {
            await pageStore.GetPagesByKey(currentKey) as any
        }
    },
    { immediate: true }
)
</script> -->