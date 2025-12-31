<template>
    <a :href="props.data.link" :class="[
        'px-4 transition-all duration-300 text-xl h-16 bg-secondary text-tertiary w-full md:w-auto flex items-center justify-center gap-3 active:bg-primary  active:text-tertiary hover:text-tertiary active:ring-1 active:ring-secondary hover:ring-1 hover:ring-secondary hover:bg-white'
        , props.customClass
    ]">
        <span class="font-semibold">
            {{ props?.data?.text?.[locale] }}
        </span>
        <Icon :name="props?.data?.icon ?? ''" class="size-7 fill-accent" />
    </a>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import type { CtaType } from '~/utils/types'

const router = useRouter()

const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<CtaType>,
    },
    customClass: {
        required: false,
        type: String,
        default: "hover:bg-secondary"
    }
})

const { locale } = useI18n()
</script>