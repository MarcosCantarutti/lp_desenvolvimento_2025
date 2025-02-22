<template>
  <section class="bg-gray-100 p-12 rounded-lg shadow-md max-w-lg mx-auto m-20">
    <h2 class="text-2xl font-semibold mb-4 text-center">Entre em Contato</h2>

    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <!-- Nome -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Nome</label
        >
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <!-- Mensagem -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700"
          >Mensagem</label
        >
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          required
          class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        ></textarea>
      </div>

      <!-- Botão de envio -->
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        :disabled="loading"
      >
        {{ loading ? 'Enviando...' : 'Enviar Mensagem' }}
      </button>

      <!-- Feedback -->
      <p v-if="messageSent" class="text-green-600 text-center mt-2">
        Mensagem enviada com sucesso!
      </p>
      <p v-if="error" class="text-red-600 text-center mt-2">
        Erro ao enviar. Tente novamente.
      </p>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Estado do formulário
const form = ref({
  name: '',
  email: '',
  message: '',
});

const loading = ref(false);
const messageSent = ref(false);
const error = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  messageSent.value = false;
  error.value = false;

  try {
    // Simulação de envio (Substituir por chamada real à API)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Aqui você pode integrar com EmailJS, API própria ou um serviço de e-mail
    console.log('Enviando:', form.value);

    messageSent.value = true;
    form.value = { name: '', email: '', message: '' }; // Reseta formulário
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};
</script>
