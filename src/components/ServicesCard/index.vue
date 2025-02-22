<template>
  <div
    class="p-4 bg-white shadow-lg rounded-lg flex flex-col gap-10 items-center space-x-4"
  >
    <svg
      v-if="icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-32 h-32 text-black"
      v-html="icon"
    ></svg>
    <div>
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <p class="text-gray-600 text-lg mt-2">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  text: string;
}>();
</script>
