<template>
    <div class="items-center justify-center hidden w-full h-full md:flex">
        <ButtonMenu v-for="(menu, index) in menusList" :key="index" :data="menu" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useMenuStore } from '~/stores/menu.store';

const menuStore = useMenuStore();
const menusList = computed(() => menuStore.menuList);
</script>