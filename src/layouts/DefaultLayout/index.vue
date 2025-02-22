<template>
  <div class="min-h-screen flex flex-col bg-gray-900">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';
</script>
