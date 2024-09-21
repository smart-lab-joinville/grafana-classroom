<script setup lang="js">
import SolidButton from '../ui/SolidButton.vue';

const {
  classroomId,
  classroomCourseName,
  classroomDescription,
  classroomYear,
  classroomSemester,
} = defineProps([
  "classroomId",
  "classroomCourseName",
  "classroomDescription",
  "classroomYear",
  "classroomSemester",
]);
</script>

<template>
  <div class="flex overflow-hidden rounded-xl">
    <div class="flex w-[240px] aspect-square bg-gradient-to-tr from-red-500 to-orange-500 relative overflow-hidden">
      <span class="text-white text-3xl relative top-3 left-4 font-semibold">
        {{ classroomId }}
      </span>
      <span class="text-white text-9xl absolute bottom-[-2rem] right-[-2rem] font-extrabold opacity-65 pointer-events-none">
        {{ classroomId }}
      </span>
    </div>
    <div class="flex w-full flex-col justify-between px-4 py-3 border border-slate-200 border-l-0 rounded-tr-xl rounded-br-xl">
      <div>
        <div>
          <span class="font-semibold text-lg">{{ classroomCourseName }}</span>
          <span class="ml-2">{{ classroomYear }}/{{ classroomSemester }}</span>
        </div>
        <p class="max-w-[540px] h-19 text-slate-500 line-clamp-3">
          {{ classroomDescription }}
        </p>
      </div>
      <div class="flex justify-end gap-2 mb-1">
        <SolidButton>Inspecionar</SolidButton>
        <SolidButton>Arquivar</SolidButton>
      </div>
    </div>
  </div>
</template>
