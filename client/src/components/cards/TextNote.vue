<template>
  <div class="flex overflow-hidden relative rounded">
    <span class="block h-screen w-2 bg-orange-500 absolute left-0 top-0"></span>
    <div class="border-2 border-orange-500 pl-5 py-4 pr-20 rounded-r w-full">
      <slot>
        Lorem ipsum dolor sit amet.
      </slot>
    </div>
    <span class="block w-[145px] aspect-square bg-gradient-to-r from-orange-500 to-orange-300 rounded-full absolute z-10 top-[-50%] right-[-75px]"></span>
    <span class="absolute z-20 text-white text-3xl font-bold font-poppins top-1 right-2 pointer-events-none">!!</span>
  </div>
</template>
