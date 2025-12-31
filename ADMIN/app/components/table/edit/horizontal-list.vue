<template>
    <!-- Application Buttons (Next, Prev, etc...) -->
    <div v-if="isApplicationButtons(props.data)" class="w-full flex gap-1">
        <div class="w-full bg-gray-200 p-2" v-for="(item, key) in (props.data as any)" :key="key">
            <div>{{ key }}:</div>
            <div class="flex flex-row gap-2">
                <div class="w-full flex-col">
                    <span>Texte (FR):</span>
                    <textarea class="w-full min-h-32 bg-white" v-model="item.text!.fr"></textarea>
                </div>
                <div class="w-full flex-col">
                    <span>Texte (EN):</span>
                    <textarea class="w-full min-h-32 bg-white" v-model="item.text!.en"></textarea>
                </div>
            </div>
        </div>
    </div>

    <!-- Array of Locale Texts -->
    <div v-if="isArrayOfCta(props.data)" class="w-full flex flex-col gap-4">
        <div class="w-full min-h-32 p-2 flex flex-col gap-3 bg-gray-200 border border-gray-300"
            v-for="(item, index) in (props.data as CtaType[])" :key="index">
            <div class="absolute right-1 top-1 p-1">
                <button type="button" @click="deleteItem(item._key)"
                    class="cursor-pointer inline-flex text-red-800 items-center justify-center bg-red-200 hover:bg-red-800 hover:text-white h-6 border border-red-800 aspect-square">
                    <Icon name="lucide:trash" />
                    <span class="sr-only">Icon description</span>
                </button>
            </div>
            <div class="flex flex-col">
                <span>Icon:</span>
                <div class="flex flex-row gap-1 items-center">
                    <div class="h-8 w-8 aspect-square bg-gray-200 border-1 flex items-center justify-center">
                        <Icon :name="item.icon ?? 'lucide:circle'" class="font-bold" size="25" />
                    </div>
                    <input type="text" v-model="item.icon" class="h-8 bg-white w-full">
                </div>
            </div>
            <div class="flex flex-col">
                <span>Link:</span>
                <div class="flex flex-row gap-1 items-center">
                    <input type="text" v-model="item.link" class="h-8 bg-white w-full">
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <div class="w-full flex-col">
                    <span>Texte (FR):</span>
                    <textarea class="w-full min-h-32 bg-white" v-model="item.text!.fr"></textarea>
                </div>
                <div class="w-full flex-col">
                    <span>Texte (EN):</span>
                    <textarea class="w-full min-h-32 bg-white" v-model="item.text!.en"></textarea>
                </div>
            </div>
        </div>
    </div>

    <!-- Array of Locale Texts -->
    <div v-if="isArrayOfSocial(props.data)" class="w-full flex flex-col gap-4">
        <div class="w-full min-h-32 p-2 flex flex-col gap-3 bg-gray-200 border border-gray-300"
            v-for="(item, index) in (props.data as SocialType[])" :key="index">
            <div class="absolute right-1 top-1 p-1">
                <button type="button" @click="deleteItem(item._key)"
                    class="cursor-pointer inline-flex text-red-800 items-center justify-center bg-red-200 hover:bg-red-800 hover:text-white h-6 border border-red-800 aspect-square">
                    <Icon name="lucide:trash" />
                    <span class="sr-only">Icon description</span>
                </button>
            </div>
            <div class="flex flex-col">
                <span>Icon:</span>
                <div class="flex flex-row gap-1 items-center">
                    <div class="h-8 w-8 aspect-square bg-gray-200 border-1 flex items-center justify-center">
                        <Icon :name="item.icon ?? 'lucide:circle'" class="font-bold" size="25" />
                    </div>
                    <input type="text" v-model="item.icon" class="h-8 bg-white w-full">
                </div>
            </div>
            <div class="flex flex-col">
                <span>Link:</span>
                <div class="flex flex-row gap-1 items-center">
                    <input type="text" v-model="item.link" class="h-8 bg-white w-full">
                </div>
            </div>
            <div class="w-full flex-col">
                <span>Texte (FR):</span>
                <input type="text" v-model="item.name" class="h-8 bg-white w-full">
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';
import type { CtaType } from '~/data/cta/cta.type';
import type { SocialType } from '~/helpers/utils/interfaces';
import { isApplicationButtons, isArrayOfCta, isArrayOfSocial } from '../view-manager';

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});

const emit = defineEmits<{
    (e: 'update:deleteItem', value: string): void;
}>();

// Method to delete an item by its key
const deleteItem = (key: string) => {
    emit('update:deleteItem', key);
};
</script>
