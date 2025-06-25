<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <h1 class="text-3xl font-bold mb-4">Olá, Vue.js!</h1>
    <input
      v-model="nome"
      placeholder="Digite seu nome"
      class="border p-2 rounded"
    />
    <p class="mt-4 text-lg">Bem-vinda, {{ nome || 'visitante' }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nome = ref('')
</script>

<style scoped>
/* estilos locais, se quiser */
</style>