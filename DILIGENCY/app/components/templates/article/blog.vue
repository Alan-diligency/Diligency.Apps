<template>
    <div class="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
        <div class="bg-cover bg-center h-64 overflow-hidden"
            :style="{ height: '450px', backgroundImage: `url(${data?.image})` }">

        </div>
        <div class="max-w-2xl mx-auto">
            <div
                class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">

                <div class="">
                    <a href="#" v-for="(item, index) in data?.topTags" :key="index"
                        class="text-xs text-secondary uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out px-1">
                        {{ item }}
                    </a>,
                    <h1 href="#" class="text-tertiary font-bold text-3xl mb-2">{{ data?.title[locale] }}</h1>
                    <p class="text-gray-700 text-xs mt-2">Written By:
                        <a href="#"
                            class="text-secondary font-medium hover:text-gray-900 transition duration-500 ease-in-out ">
                            {{ data?.author }}
                        </a>
                    </p>

                    <p class="text-base leading-8 my-5 text-tertiary/80">
                        {{ data?.content[locale] }}
                    </p>

                    <a href="#" v-for="(item, index) in data?.bottomTags" :key="index"
                        class="text-xs text-secondary font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                        #{{ item }}
                    </a>,

                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useArticleStore } from '~/stores/article.store'


const articleStore = useArticleStore()
const { locale } = useI18n()
const data = ref()
onMounted(async () => {
    data.value = await articleStore.GeLastArticle()
})
</script>