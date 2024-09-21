<script setup>
import BasePageLayout from '@/components/layout/BasePageLayout.vue';
import ClassroomCard from '@/components/cards/ClassroomCard.vue';
</script>

<template>
  <BasePageLayout>
    <template #page-title>Minhas Turmas</template>
    <template #page-content>
      <ClassroomCard
        classroomId="01"
        classroomCourseName="Sistemas da Informação"
        classroomDescription="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod, rerum totam harum molestiae ut veritatis unde magni,
          earum similique non voluptate eaque. Optio quasi quis
          cupiditate porro dolorem, magnam obcaecati!"
        classroomYear="2024"
        classroomSemester="2"
      />
      <ClassroomCard
        classroomId="02"
        classroomCourseName="Desenvolvimento de Sistemas"
        classroomDescription="
          Uma turma de aprendizagem industrial diecionada para
          desenvolvimento web. Incluso introdução à Indústria 4.0 na
          grade. Será visto coleta de dados e protocolos de comunicação.
          Texto teste. Texto teste. Texto teste. Texto teste. Texto teste.
          Texto teste. Texto teste. Texto teste. Texto teste. Texto teste."
        classroomYear="2024"
        classroomSemester="2"
      />
    </template>
  </BasePageLayout>
</template>
