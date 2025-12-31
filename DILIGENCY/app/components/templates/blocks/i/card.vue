<template>

    <div class="p-4 w-full md:h-auto 2xl:h-auto cursor-pointer">
        <div :class="['relative flex flex-col h-full justify-between p-6 overflow-hidden transition-all border-2 rounded-lg duration-600 group',
            props.data?.id == 'premium'
                ? 'bg-tertiary-500 hover:bg-secondary-500'
                : 'hover:bg-secondary border-secondary-600']">
            <h1
                :class="['pb-4 mb-4 text-5xl leading-none inter ',
                    props.data?.id == 'premium' ? 'text-secondary group-hover:text-tertiary-500' : ' text-tertiary group-hover:text-tertiary-500']">
                <span v-for="(item, index) in props.data?.title" :key="index">{{ item[locale] }}</span>
            </h1>
            <p :class="['flex flex-row items-start mb-3 inter h-full', props.data?.id == 'premium' ? 'text-secondary group-hover:text-tertiary-500' : ' text-tertiary group-hover:text-tertiary-500']"
                v-for="(item, index) in props.data?.features?.[locale]" :key="index">
                <span
                    class="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 rounded-full bg-tertiary/70 text-primary">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                </span>
                <span class="-mt-1">
                    {{ item }}
                </span>
            </p>
            <div class="flex items-end h-auto py-2 text-sm text-center border-t-1 border-secondary">
                {{ props.data?.description?.[locale] }}
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { OFFER_PROPS } from '../props';


const { locale } = useI18n()
const props = defineProps(OFFER_PROPS)
</script>