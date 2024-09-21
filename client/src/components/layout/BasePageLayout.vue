<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-xl font-semibold mb-4">
      <slot name="page-title">Hello World!! ~ Page Title</slot>
    </h1>
    <slot name="page-content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Natus, nemo tempora eaque vitae quis quod explicabo expedita,
        aliquid, mollitia aut iusto! At esse similique velit voluptate
        commodi? Numquam, minima. Facilis.
      </p>
    </slot>
  </div>
</template>
