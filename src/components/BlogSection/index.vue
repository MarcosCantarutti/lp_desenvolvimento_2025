<template>
  <section class="w-full bg-gray-100 p-4">
    <Carousel :items-to-show="3" :wrap-around="true">
      <Slide v-for="(blog, index) in blogs" :key="index">
        <BlogCard
          :image="blog.image"
          :title="blog.title"
          :description="blog.description"
          :link="blog.link"
          :icon="blog.icon"
        />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
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
