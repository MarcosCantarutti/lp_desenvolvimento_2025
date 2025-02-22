<template>
  <div
    class="p-4 bg-white shadow-lg rounded-lg flex flex-col space-y-4 p-10 m-12"
  >
    <!-- Imagem do Blog -->
    <img
      v-if="image"
      :src="image"
      alt="Blog Image"
      class="w-full h-48 object-cover rounded-lg"
    />

    <div class="flex items-center space-x-4">
      <!-- Ícone SVG via props ou slot -->
      <svg
        v-if="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 text-blue-500"
        v-html="icon"
      ></svg>

      <slot name="icon"></slot>
      <!-- Slot opcional para passar SVG manualmente -->

      <h2 class="text-lg font-bold">{{ title }}</h2>
    </div>

    <p class="text-gray-600">{{ description }}</p>

    <!-- Botão para abrir o blog -->
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition"
    >
      Ler mais
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image?: string;
  title: string;
  description: string;
  icon?: string;
  link: string;
}>();
</script>
