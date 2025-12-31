<template>
    <div ref="dropdownRef" class="relative z-50 hidden dropdown md:inline-flex">
        <button @click="show = !show"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-center transition-all duration-500 rounded-lg cursor-pointer w-30 text-md text-secondary hover:text-secondary-700 ">
            <span class="uppercase">
                {{locales.find(x => x.code == locale)?.code}}
            </span>
            <svg class="dropdown-open:rotate-180 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
        </button>
        <div id="dropdown-default" v-if="show"
            class="absolute w-full mt-0 transition-all duration-300 bg-white rounded-lg shadow-lg dropdown-menu top-full open"
            aria-labelledby="dropdown-default">
            <ul class="">
                <li v-for="(locale, index) in locales" class="p-1">
                    <button @click="setCurrentLocale(locale.code)"
                        class="w-full h-10 font-semibold uppercase rounded-lg hover:bg-secondary text-tertiary">
                        {{ locale.code }} </button>
                </li>
            </ul>
        </div>
    </div>
    <div class="md:hidden">
        <ButtonLocaleSwitch />
    </div>
</template>
<script lang="ts" setup>
const { locales, locale, setLocale } = useI18n()
const show = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const setCurrentLocale = (localeCode: "fr" | "en") => {
    show.value = false
    setLocale(localeCode)
}

function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        show.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>