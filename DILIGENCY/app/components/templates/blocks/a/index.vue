<template>
    <PageLayout custom-class="bg-primary py-10">
        <div class="w-full h-full p-2">
            <SectionContentTitle :title="props.data?.title" />
            <SectionContentSubtitle :subtitle="props.data?.subtitle" custom-class="w-full text-tertiary-500/80" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
            <div v-for="(item, index) in props.data?.items as BaseType[]" :key="index"
                class="card group hover:scale-101 transition-all duration-300 cursor-pointer border-1 border-tertiary/50 bg-tertiary/10 p-4 rounded-lg hover:bg-tertiary">
                <div class="text-center py-4">
                    <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast">
                        <Icon :name="item?.icon ?? ''"
                            class="h-16 w-16 text-accent-200 group-hover:text-primary group-hover:scale-120 transition-all duration-400 group-hover:-mt-10" />
                    </div>
                    <h3
                        class="text-tertiary text-lg font-semibold mb-3 min-h-auto md:min-h-20 group-hover:text-primary">
                        {{ item?.name?.[locale] }}
                    </h3>
                    <p class="mb-4 text-center text-md text-tertiary-500/80 group-hover:text-secondary">
                        {{ item?.text?.[locale] }}
                    </p>
                    <div class="opacity-0 group-hover:opacity-100 transition-fast w-full flex justify-center">
                        <span class="text-sm font-medium text-secondary">
                            {{ item?.technos?.join(" • ") }}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import type { BaseType } from '~/utils/types/block.type';
import { BLOCK_PROPS } from '../props';
const props = defineProps(BLOCK_PROPS)
const { locale } = useI18n()
</script>