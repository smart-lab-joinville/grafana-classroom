<script setup>
const { to } = defineProps(["to"]);
</script>

<template>
  <RouterLink :to class="hover:underline">
    <slot></slot>
  </RouterLink>
</template>