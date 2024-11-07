<template>
  <div class="bg-gradient-to-r from-pink-300 via-pink-400 to-teal-500 min-h-screen flex flex-col items-center">
    <!-- Header -->
    <header class="w-full flex justify-end p-5">
      <nav>
        <a class="text-black text-4xl font-bold underline translate-x-6 " href="/">
          Home
        </a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="mt-8 w-3/4 text-center">
      <h1 class="text-4xl font-bold gradient-text ml-12 text-left">
        Bonjour
        <span class="wave">👋</span>,
      </h1>
      <h2 class="text-3xl font-bold text-black mt-2 text-left">Je suis {{ userName }}</h2>
      <h3 class="text-4xl font-bold gradient-text-blue mt-2">Develope...</h3>

      <!-- Who Am I Section -->
      <section class="mt-8 w-3/4 text-center">
        <h4 class="text-2xl font-bold text-black text-left">Qui suis-je ?</h4>
        <p class="text-black mt-4 text-left">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum.
        </p>
      </section>

      <!-- Profile Image Section -->
      <section class="mt-9 ">
        <!-- <img alt="" class="rounded-full" height="50" src="../assets/img/img_contact.png" width="150" /> -->
      </section>

      <!-- Navigation Links -->
      <section>
        <div>
          <a class="text-left text-black text-xl font-bold mr-4" href="#">Sur moi</a>
          <i class="fas fa-arrow-right  text-black" style="padding-right: 700px;"></i>
          
        </div>
        <div class="flex items-center mt-4">
          <a class="text-black text-xl font-bold mr-4" href="#">Project</a>
          <i class="fas fa-arrow-right text-black"></i>
        </div>
        <div class="flex items-center mt-4">
          <a class="text-black text-xl font-bold mr-4" href="#">Langages</a>
          <i class="fas fa-arrow-down text-black" ></i>
        </div>
      </section>

      <!-- Contact Link -->
      <section class="mt-8 flex flex-col items-center">
        <div class="flex items-center mt-4">
          <a class="text-black text-xl font-bold mr-4" href="/contact">Contact Me</a>
          <i class="fas fa-arrow-right  text-black" ></i>
        </div>
      </section>

      <!-- Social Media Icons -->
      <section class="mt-8 flex justify-center space-x-4">
        <a href="#"><i class="fab fa-facebook text-3xl text-blue-600"></i></a>
        <a href="#"><i class="fab fa-linkedin text-3xl text-blue-700"></i></a>
        <a href="#"><i class="fab fa-github text-3xl text-black"></i></a>
        <a href="#"><i class="fas fa-envelope text-3xl text-red-600"></i></a>
        <a href="#"><i class="fas fa-phone text-3xl text-red-600"></i></a>
        <a href="#"><i class="fab fa-youtube text-3xl text-red-600"></i></a>
      </section>
    </main>

    <!-- Sidebar Navigation -->
    <aside class="fixed left-0 top-1/4 flex flex-col space-y-4 p-4 bg-gray-200 rounded-r-lg">
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100"
        href="/home">
        <i class="fas fa-home text-blue-500 transition-colors duration-200 hover:text-blue-700"></i>
      </a>
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100"
        href="/about">
        <i class="fas fa-info text-black transition-colors duration-200 hover:text-blue-700"></i>
      </a>
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100"
        href="#">
        <i class="fas fa-code text-black transition-colors duration-200 hover:text-blue-700"></i>
      </a>
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100"
        href="/contact">
        <i class="fas fa-user text-black transition-colors duration-200 hover:text-blue-700"></i>
      </a>
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100"
        href="/videos">
        <i class="fas fa-video text-black transition-colors duration-200 hover:text-blue-700"></i>
      </a>
    </aside>
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

<style scoped>
.gradient-text {
  background: linear-gradient(to right, #ff6b6b, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-text-orange {
  background: linear-gradient(to right, #ffa500, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(20deg);
  }

  40% {
    transform: rotate(0deg);
  }

  60% {
    transform: rotate(-20deg);
  }

  80% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>