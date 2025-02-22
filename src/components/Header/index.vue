<template>
  <header class="bg-white shadow-md fixed w-full top-0 left-0 z-50">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold text-blue-600">
        LP Desenvolvimento(logo)
      </router-link>

      <!-- Menu Desktop -->
      <nav class="hidden md:flex space-x-6">
        <router-link to="/" class="hover:text-blue-600">Home</router-link>
        <a
          @click.prevent="scrollToSection('about')"
          class="hover:text-blue-600 cursor-pointer"
          >Sobre</a
        >
        <a
          @click.prevent="scrollToSection('blog')"
          class="hover:text-blue-600 cursor-pointer"
          >Blog</a
        >

        <a
          @click.prevent="scrollToSection('services')"
          class="hover:text-blue-600 cursor-pointer"
          >Serviços</a
        >
        <router-link to="/vagas" class="hover:text-blue-600">Vagas</router-link>
        <router-link to="/contact" class="hover:text-blue-600"
          >Contato</router-link
        >
      </nav>

      <!-- Botão de Contato -->
      <router-link
        to="/contact"
        class="hidden md:block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Fale Conosco
      </router-link>

      <!-- Botão do Menu Mobile -->
      <button @click="toggleMenu" class="md:hidden text-blue-600">
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <Transition name="slide-fade">
        <div
          v-if="menuOpen"
          class="md:hidden bg-white shadow-md absolute top-full left-0 w-full"
        >
          <nav class="flex flex-col space-y-2 p-4">
            <router-link
              to="/"
              class="block py-2 px-4 hover:bg-gray-100"
              @click="closeMenu"
              >Home</router-link
            >
            <a
              @click.prevent="
                scrollToSection('about');
                closeMenu();
              "
              class="block py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              Sobre
            </a>
            <router-link
              to="/services"
              class="block py-2 px-4 hover:bg-gray-100"
              @click="closeMenu"
              >Serviços</router-link
            >
            <router-link
              to="/contact"
              class="block py-2 px-4 hover:bg-gray-100"
              @click="closeMenu"
              >Contato</router-link
            >
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref<boolean>(false);
const toggleMenu = (): void => {
  menuOpen.value = !menuOpen.value;
};

const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
