<script setup lang="js">
const { name, id, placeholder } = defineProps(["name", "id", "placeholder"]);
</script>

<template>
  <input
    type="text"
    :name
    :id
    :placeholder
    class="flex flex-grow h-9 border border-slate-200 rounded px-2 placeholder:text-slate-500 placeholder:bg-white outline-none"
  >
</template>
