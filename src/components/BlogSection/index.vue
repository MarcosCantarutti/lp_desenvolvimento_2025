<template>
  <section class="w-full bg-gray-100 p-4">
    <BlogCard
      v-for="blog in blogs"
      :image="blog.image"
      :title="blog.title"
      :description="blog.description"
      :link="blog.link"
      :icon="blog.icon"
    />
  </section>
</template>

<script setup lang="ts">
import BlogCard from '@/components/BlogCard/index.vue';

const blogs = [
  {
    image: 'https://via.placeholder.com/600x300',
    title: 'Como melhorar no Vue.js',
    description:
      'Descubra dicas essenciais para escrever código Vue.js mais limpo e performático.',
    link: 'https://vuejs.org/',
    icon: `<path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6l4 2' />`,
  },
  {
    image: 'https://via.placeholder.com/600x300',
    title: 'Entendendo o Composition API',
    description:
      'Aprenda a usar o Composition API para organizar melhor seu código no Vue 3.',
    link: 'https://vuejs.org/',
    icon: `<path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6l4 2' />`,
  },
  {
    image: 'https://via.placeholder.com/600x300',
    title: 'O que há de novo no Vue 3?',
    description:
      'Confira as principais novidades do Vue 3 e como elas impactam o desenvolvimento.',
    link: 'https://vuejs.org/',
    icon: `<path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6l4 2' />`,
  },
];
</script>
