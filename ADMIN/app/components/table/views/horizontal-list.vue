<template>
    <div v-if="props.data && isApplicationButtons(props.data)" class="w-full flex gap-1">
        <!-- Application Buttons (Next, Prev, etc...) -->
        <div class="w-full bg-gray-200 p-2" v-for="(item, key) in props.data" :key="key">
            <div>
                {{ key }}:
            </div>
            <div>
                <span class="font-bold">FR:</span> {{ item.fr }}
                <span class="font-bold">EN:</span> {{ item.en }}
            </div>
        </div>
    </div>
    <div v-if="props.data && isArrayOfCta(props.data)" class="w-full flex gap-1">
        <div class="w-full min-h-32 p-1 flex gap-3">
            <div class="w-full bg-gray-200 p-2 space-y-2" v-for="(item, index) in props.data" :key="index">
                <div class="flex gap-2 items-center">
                    <span>Icon:</span>
                    <Icon :name="item.icon ?? 'lucide:circle'" class="font-bold" size="20" />
                </div>
                <div class="flex gap-2 items-center">
                    <span>Link:</span>
                    <span class="font-bold">{{ item.link }}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <span>Texte (FR):</span>
                    <span class="font-bold">{{ item.text?.fr }}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <span>Texte (En):</span>
                    <span class="font-bold">{{ item.text?.en }}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <span>Type:</span>
                    <span class="font-bold">{{ item.type }}</span>
                </div>
            </div>
        </div>
    </div>
    <div v-if="props.data && isArrayOfSocial(props.data)">
        <div class="w-full min-h-32 p-1 flex gap-3">
            <div class="w-full bg-gray-200 p-2 space-y-2" v-for="(item, index) in props.data" :key="index">
                <div class="flex gap-2 items-center">
                    <span>Icon:</span>
                    <Icon :name="item.icon" size=" 20" />
                </div>
                <div class="flex gap-2 items-center">
                    <span>Link:</span>
                    <span class="font-bold">{{ item.link }}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <span>name:</span>
                    <span class="font-bold">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { isApplicationButtons, isArrayOfCta, isArrayOfSocial } from '../view-manager';
import { TABLE_VIEWS_PROPS } from './views.prop';
const props = defineProps(TABLE_VIEWS_PROPS)

</script>