<template>
    <div class="w-full inline-flex justify-between h-16 py-4">
        <div class="w-full flex items-center justify-star">
            <TemplatesCtaAppButton @clicked="emit('changeStep', ApplicationStepEnum.PREV)"
                v-if="props.data?.previous?.[locale] != 'NONE'" :text="props.data?.previous?.[locale]"
                icon-position="left" />
        </div>

        <div class="w-full flex items-center justify-end">
            <div v-if="sanityStore.isPosting" class="flex items-center justify-center">
                <Icon name="lucide:loader" size="25" class="mr-2 animate animate-spin text-tertiary-500" />
                <span
                    class="cursor-pointer text-tertiary-500 relative group text-xl transition-all duration-500 h-14 bg-transparent w-full md:w-auto  flex items-center justify-center md:justify-start gap-3 font-semi-bold hover:text-secondary-700">
                    Envoie de votre demande
                </span>
            </div>
            <TemplatesCtaAppButton @clicked="emit('changeStep', ApplicationStepEnum.NEXT)"
                :text="props.data?.next?.[locale]" icon-position="right" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useSanityStore } from '~/stores/sanity.store';
import type { ApplicationButtonsType } from '~/utils/types';
import { ApplicationStepEnum } from './helpers/applications-step.enum';

const sanityStore = useSanityStore()
const { locale } = useI18n()

const props = defineProps({
    data: {
        type: [Object] as PropType<ApplicationButtonsType>,
        required: false
    }
})

const emit = defineEmits<{
    (e: 'changeStep', type: ApplicationStepEnum): void;
}>();

</script>