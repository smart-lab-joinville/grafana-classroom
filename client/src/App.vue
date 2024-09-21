<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main class="mt-6 px-2 max-w-screen-md mx-auto">
    <RouterView />
  </main>
</template>
