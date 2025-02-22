<template>
  <section class="relative py-20 lg:py-32">
    <div
      class="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-16 mb-60"
    >
      <!-- Texto e Botões -->
      <div class="text-center lg:text-left lg:w-1/2">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Transformamos Negócios com
          <span class="text-blue-600">Estratégia e Inovação</span>
        </h1>
        <p class="mt-8 text-gray-600 text-2xl">
          Nossa consultoria ajuda empresas a crescerem com soluções
          personalizadas, eficiência operacional e estratégias inovadoras.
        </p>

        <!-- Botões -->
        <div
          class="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6"
        >
          <router-link
            to="/contact"
            class="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Fale Conosco
          </router-link>
          <router-link
            to="/services"
            class="border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Nossos Serviços
          </router-link>
        </div>
      </div>

      <!-- Imagem Ilustrativa -->
      <div class="lg:w-1/2">
        <img
          src=""
          alt="Consultoria Empresarial"
          class="w-full max-w-lg mx-auto animate-fade-in"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelector('.animate-fade-in')?.classList.add('opacity-100');
});
</script>

<style scoped>
.animate-fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
</style>
