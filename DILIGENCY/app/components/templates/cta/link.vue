<template>
    <a :href="props.data.link" :type="props.type" @mouseenter="hover = true" @mouseleave="hover = false" :class="[
        'relative group text-xl transition-all duration-500 h-14 bg-transparent w-full md:w-auto  flex items-center justify-center md:justify-start gap-3 font-semi-bold hover:text-secondary-700',
        customClass
    ]">
        <span
            class="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-secondary-700 after:transition-all after:duration-500 group-hover:after:w-full after:rounded-full">
            {{ props?.data?.text?.[locale] }}
        </span>

        <Icon :name="props?.data?.icon ?? ''"
            :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-2' : 'ml-0']" />
    </a>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import type { CtaType } from '~/utils/types'

const hover = ref(false)
const router = useRouter()

const props = defineProps({
    data: {
        required: true,
        type: [Object, null] as PropType<CtaType>,
        default: null
    },
    customClass: {
        required: false,
        type: String,
        default: "text-tertiary"
    },
    type: {
        required: false,
        type: [String] as PropType<"button" | "submit" | "reset">,
        default: "button"
    }
})

/* ------------------------------------------------------------
   FEATURE: Locale handling
   ------------------------------------------------------------
   Retrieves the current locale from vue-i18n.
   Used to display the translated button text.
------------------------------------------------------------ */
const { locale } = useI18n()
</script>
