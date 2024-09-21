<script setup>
import BasePageLayout from '@/components/layout/BasePageLayout.vue';
import BaseTextField from '@/components/ui/BaseTextField.vue';
import TextNote from '@/components/cards/TextNote.vue';
import SolidButton from '@/components/ui/SolidButton.vue';
import { onMounted, useTemplateRef } from 'vue';

const textInputTestRef = useTemplateRef("text-input-test");

onMounted(() => {
  console.log(textInputTestRef.value)
})
</script>

<template>
  <BasePageLayout>
    <template #page-title>Nova Turma</template>
    <template #page-content>
      <div class="flex flex-col gap-4">
        <TextNote>
          Cada estudante irá receber um usuário do Grafana com uma senha gerada aleatoriamente. <br>
          Quando estiver tudo pronto, você poderá enviar as credenciais por e-mail quando desejar.
        </TextNote>
        <p>Descreva a turma que será usará o Grafana Classroom</p>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <BaseTextField ref="text-input-test" placeholder="Curso da turma" />
            <BaseTextField ref="text-input-test" placeholder="Ano de criação da turma" />
            <BaseTextField ref="text-input-test" placeholder="Semestre de criação da turma" />
          </div>
          <BaseTextField ref="text-input-test" placeholder="Dê uma descrição curta da turma" />
        </div>
        <p>Digite o os e-mails dos estudantes</p>
        <div class="flex gap-2">
          <BaseTextField ref="text-input-test" placeholder="aluno_exemplo@estudante.sesisenai.org.br" />
          <SolidButton>Adicionar</SolidButton>
        </div>
        <span>Alunos cadastrados:</span>
        <ul class="flex flex-col gap-2 border border-slate-200 p-2 rounded-lg min-h-[200px]">
          <li class="flex items-center px-2 rounded h-9 bg-slate-100 w-full border border-slate-300 text-slate-600">
            lucas_ogawa@estudante.sesisenai.org.br</li>
          <li class="flex items-center px-2 rounded h-9 bg-slate-100 w-full border border-slate-300 text-slate-600">
            lucas_ogawa@estudante.sesisenai.org.br</li>
          <li class="flex items-center px-2 rounded h-9 bg-slate-100 w-full border border-slate-300 text-slate-600">
            lucas_ogawa@estudante.sesisenai.org.br</li>
        </ul>
      </div>
    </template>
  </BasePageLayout>
</template>
