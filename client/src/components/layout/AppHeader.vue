<script setup>
import SolidButton from "@/components/ui/SolidButton.vue";
import LineButton from "@/components/ui/LineButton.vue";
import NavLink from "../ui/NavLink.vue";
</script>

<template>
  <header class="flex justify-between items-center p-4 border-b border-slate-200">
    <span class="text-xl font-bold font-poppins">Grafana Classroom</span>
    <nav class="flex gap-5 items-center">
      <ul class="flex gap-5">
        <li>
          <NavLink to="/perfil">Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/minhas-turmas">Minhas Turmas</NavLink>
        </li>
      </ul>
      <div class="flex gap-2">
        <SolidButton :onClick="() => $router.push('/nova-turma')">
          Nova Turma
        </SolidButton>
        <LineButton>Logout</LineButton>
      </div>
    </nav>
  </header>
</template>
