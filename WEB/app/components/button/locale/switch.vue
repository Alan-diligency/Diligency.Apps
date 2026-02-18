<template>
    <div class="flex gap-4 text-lg">
        <button type="button" @click="setLocale('fr')"
            :class="['w-10 aspect-square transition-all duration-200 text-secondary', getActiveClass('fr')]">
            FR
        </button>
        <button type="button" @click="setLocale('en')"
            :class="['w-10 aspect-square transition-all duration-200 text-secondary', getActiveClass('en')]">
            EN
        </button>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { setLocale, locale } = useI18n()

const getActiveClass = (t: any) => {
    return locale.value === t
        ? 'border-2 border-dashed border-secondary'
        : ''
}
</script>