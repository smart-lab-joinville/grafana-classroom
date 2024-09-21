<script setup>
const { onClick } = defineProps(["onClick"]);
</script>

<template>
  <button @click="onClick" class="border-2 border-orange-400 from-orange-400 to-orange-500 h-9 px-3 rounded text-sm font-semibold text-orange-700 font-poppins">
    <slot>Button</slot>
  </button>
</template>
