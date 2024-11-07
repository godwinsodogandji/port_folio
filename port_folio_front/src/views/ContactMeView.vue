<template>
  <div class="flex items-center justify-center min-h-screen bg-cover"
    :style="{ backgroundImage: 'url(' + imgContact + ')' }">
    <div class="relative w-full max-w-4xl p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
      <!-- Title -->
      <h1 class="absolute top-4 right-4 text-2xl font-bold text-gray-800 animate-fadeIn">
        Contact Me
      </h1>

      <!-- Form Section -->
      <div class="flex flex-col md:flex-row items-center justify-between animate-fadeIn">
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-xl font-bold text-gray-800 mb-4 animate-fadeInLeft">
            Envoyer un message
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-4 animate-fadeInLeft">
            <div class="relative">
              <label class="block text-gray-700" for="name">Nom</label>
              <input v-model="form.name"
                class="w-full p-2 border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500"
                id="name" type="text" required />
              <i class="fas fa-user absolute right-2 top-2 text-gray-500"></i>
            </div>
            <div class="relative">
              <label class="block text-gray-700" for="email">Email</label>
              <input v-model="form.email"
                class="w-full p-2 border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500"
                id="email" type="email" required />
              <i class="fas fa-envelope absolute right-2 top-2 text-gray-500"></i>
            </div>
            <div class="relative">
              <label class="block text-gray-700" for="message">Message</label>
              <textarea v-model="form.message"
                class="w-full p-2 border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500"
                id="message" required></textarea>
              <i class="fas fa-comment-dots absolute right-2 top-2 text-gray-500"></i>
            </div>
            <button
              class="w-full p-2 text-white bg-gradient-to-r from-blue-300 to-purple-500 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 animate-bounce"
              type="submit">
              Envoyer
            </button>
          </form>
        </div>

        <!-- Image Section -->
        <div class="w-full md:w-1/2 p-4 flex justify-center animate-fadeInRight">
          <img alt="" class="rounded-lg shadow-lg" height="200"
            src="../assets/img/copy-space-laptop-virtual-reality-headset.jpg" width="300" />
        </div>
      </div>

      <!-- Other Accounts Section -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fadeIn">
        <p class="text-gray-800 font-bold " style="margin-left: 20rem;">Autres comptes</p>
        <i class="fas fa-plus-circle text-green-500 animate-pulse"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import imgContact from '../assets/img/copy-space-laptop-virtual-reality-headset.jpg';

const form = ref({
  name: '',
  email: '',
  message: ''
});

// Handle form submission
const handleSubmit = () => {
  console.log('Form Submitted', form.value);
};
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

.animate-fadeInLeft {
  animation: fadeInLeft 0.5s ease-in-out;
}

.animate-fadeInRight {
  animation: fadeInRight 0.5s ease-in-out;
}

.animate-bounce {
  animation: bounce 2.5s infinite;
}

.animate-pulse {
  animation: pulse 1s infinite;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>