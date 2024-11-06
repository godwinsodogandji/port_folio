<template>
    <div class="flex items-center justify-center min-h-screen bg-cover" :style="{ backgroundImage: 'url(' + imgContact + ')' }">
      <div class="relative w-full max-w-4xl p-8 bg-white bg-opacity-20 rounded-lg shadow-lg">
        <!-- Title -->
        <h1 class="absolute top-4 right-4 text-2xl font-bold text-black">
          Contact Me
        </h1>
        
        <!-- Form Section -->
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="w-full md:w-1/2 p-4">
            <h2 class="text-xl font-bold text-black mb-4">
              Envoyer un message
            </h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="relative">
                <label class="block text-black" for="name">Nom</label>
                <input v-model="form.name" class="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none" id="name" type="text" required />
                <i class="fas fa-user absolute right-2 top-2 text-black"></i>
              </div>
              <div class="relative">
                <label class="block text-black" for="email">Email</label>
                <input v-model="form.email" class="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none" id="email" type="email" required />
                <i class="fas fa-envelope absolute right-2 top-2 text-black"></i>
              </div>
              <div class="relative">
                <label class="block text-black" for="message">Message</label>
                <textarea v-model="form.message" class="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none" id="message" required></textarea>
                <i class="fas fa-comment-dots absolute right-2 top-2 text-black"></i>
              </div>
              <button class="w-full p-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" type="submit">
                Envoyer
              </button>
            </form>
          </div>
  
          <!-- Image Section -->
          <div class="w-full md:w-1/2 p-4 flex justify-center">
            <img alt="" class="rounded-lg shadow-lg" height="200" src="../assets/img/img_contact.png" width="300"/>
          </div>
        </div>
  
        <!-- Other Accounts Section -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p class="text-white font-bold">Autres comptes</p>
          <i class="fas fa-plus-circle text-green-500"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import imgContact from '../assets/img/imgc.jpg'; 
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  // Handle form submission
  const handleSubmit = () => {
    console.log('Form Submitted', form.value);
    // Here you would typically handle the form submission, e.g., sending data to an API.
  };
  </script>
  
  <style scoped>
  
  </style>
  