<script setup>
const { onClick } = defineProps(["onClick"]);
</script>

<template>
  <button @click="onClick" class="bg-gradient-to-l from-orange-500 to-orange-600 h-9 px-3 rounded text-sm font-semibold text-white font-poppins">
    <slot>Button</slot>
  </button>
</template>
