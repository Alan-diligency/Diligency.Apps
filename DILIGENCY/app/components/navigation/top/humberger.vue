<template>
  <div class="flex items-center justify-center p-2 cursor-pointer group lg:hidden h-14 w-14 aspect-square"
    @click="toggleMenu">
    <div class="space-y-2" ref="menuIcon">
      <span :class="[
        'block h-1 w-8 origin-center rounded-full bg-secondary transition-transform ease-in-out',
        isHumberger ? 'translate-y-1.5 rotate-45' : ''
      ]"></span>
      <span :class="[
        'block h-1 w-6 origin-center rounded-full bg-accent-200 transition-all ease-in-out',
        isHumberger ? 'w-8 -translate-y-1.5 -rotate-45' : ''
      ]"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ref, watch } from 'vue';
import { useMenuStore } from '~/stores/menu.store';

const menuIcon = ref<HTMLDivElement | null>(null)
const menuStore = useMenuStore()
const isHumberger = computed(() => menuStore.isHumberger)
const toggleMenu = () => {
  let state = !isHumberger.value;
  menuStore.SetHumberger(state)
}

watch(isHumberger, (open) => {
  if (menuIcon.value) {
    gsap.to(menuIcon.value, {
      rotation: open ? 90 : 0,
      duration: 0.3,
      ease: 'power2.inOut',
    })
  }
})
</script>
