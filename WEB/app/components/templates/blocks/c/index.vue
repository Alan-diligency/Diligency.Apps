<template>
    <PageLayout custom-class="bg-primary py-10">
        <div
            class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-5 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class=" flex flex-col gap-5">
                <div v-for="(item, index) in props.data?.items as BlockType[]" :key="index"
                    class="gourp flex flex-col md:flex-row justify-start items-center md:items-start gap-4 text-gray-900 cursor-pointer">
                    <Icon :name="item?.icon ?? ''" class="size-11 text-accent/70" />
                    <div class="inter text-md text-secondary-800 w-full text-center md:text-left pb-6">
                        <div class="text-xl font-semibold pb-1">
                            {{ item.name?.[locale] }}
                        </div>
                        <div class="text-md text-tertiary/80">
                            {{ item.text?.[locale] }}
                        </div>
                    </div>
                </div>
            </div>
            <img :src="props.data?.image" alt="Product screenshot" v-if="props.data?.image"
                class="md:-mt-20 hover:scale-105 transition-all duration-500 shadow-xl cursor-pointer w-3xl max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 hover:opacity-90"
                width="2432" height="1442" />
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import type { BlockType } from '~/utils/types/block.type';
import { BLOCK_PROPS } from '../props';

const { locale } = useI18n()
const props = defineProps(BLOCK_PROPS)

</script>