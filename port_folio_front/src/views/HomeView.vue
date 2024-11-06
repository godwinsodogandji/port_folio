<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-blue-100 p-6 text-gray-800">
    <!-- Header Section -->
    <header class="flex justify-between items-center py-4">
      <h1 class="text-2xl font-bold text-gray-700">Sanders</h1>
      <nav class="space-x-4">
        <a href="#" class="text-gray-600 hover:text-gray-800">Introduction</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">About Me</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">Portfolio</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">Contact Me</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-10 space-y-8 lg:space-y-0 lg:space-x-10">
      <!-- Introduction Text -->
      <div class="text-center lg:text-left max-w-md">
        <p class="text-lg">Hello,</p>
        <h2 class="text-3xl font-semibold text-gray-700">This is <span class="text-blue-500 font-bold">{{ userName }}</span></h2>
        <p class="text-lg text-gray-600 mt-2">Top-rated digital marketing analyst in America</p>
        <div class="flex justify-center lg:justify-start space-x-4 mt-4 text-sm text-gray-600">
          <span class="px-2 py-1 bg-blue-100 rounded-full">Trusted</span>
          <span class="px-2 py-1 bg-blue-100 rounded-full">Result Oriented</span>
          <span class="px-2 py-1 bg-blue-100 rounded-full">Next Level Expert</span>
        </div>

        <!-- Buttons -->
        <div class="flex justify-center lg:justify-start space-x-4 mt-6">
          <button class="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Hire Me</button>
          <button class="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100">See My Works</button>
        </div>
      </div>

      <!-- Avatar Section -->
      <div class="w-40 h-40 lg:w-60 lg:h-60 bg-yellow-400 rounded-full flex items-center justify-center">
        <!-- Placeholder for Avatar Image -->
        <div class="w-32 h-32 bg-white rounded-full"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const userName = ref(''); // Variable pour stocker le nom de l'utilisateur

const fetchUserName = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users'); 
    
    // Vérifie si la réponse contient des utilisateurs
    if (response.data.length > 0) {
      userName.value = response.data[0].name; 
      console.log("Nom de l'utilisateur récupéré :", userName.value);
    } else {
      console.error("Aucun utilisateur trouvé.");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
  }
};

// Appel de la fonction lors du montage du composant
onMounted(fetchUserName);
</script>

<style scoped></style>