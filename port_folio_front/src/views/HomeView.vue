<template>
  <div class="bg-gradient-to-r from-purple-100 via-blue-300 to-teal-50 min-h-screen flex flex-col items-center relative">
    <div class="absolute top-4 right-4">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Télécharger mon CV ici !
        </button>
    </div>
    <!-- Main Content -->
    <main class="mt-8 w-3/4 text-center flex flex-col items-center">
      <div class="text-animation-container w-full">
        <h1 class="text-4xl font-bold gradient-text ml-12 text-left">
          <span>Bonjour,</span>
          <span class="wave"><i class="fas fa-hand-wave"></i></span>
        </h1>
        <h2 class="text-3xl font-bold text-black mt-2 text-left">
          Je suis ... <span class="animated-text">{{ userName }}</span>
        </h2>

        <p class="text-lg text-gray-600 text-left">
          Analyste de marketing numérique le mieux noté en Amérique
        </p>
        <div class="flex items-center space-x-4 mt-4 text-left">
          <span class="text-blue-600">
            <i class="fas fa-check-circle"></i> Confiance
          </span>
          <span class="text-blue-600">
            <i class="fas fa-check-circle"></i> Professionnalisme
          </span>
          <span class="text-blue-600">
            <i class="fas fa-check-circle"></i> Expert de niveau supérieur
          </span>
        </div>
      
 
 <!-- Profile Image Section -->
 <section class="mt-9 flex justify-between w-full">
  <div class="w-1/2 pr-8">
    <section class="mt-8 w-3/4 text-center">
      <h4 class="text-2xl font-bold text-black">Qui suis-je ?</h4>
      <p class="text-black mt-4 text-left">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum.
      </p>
    </section>
  </div>
  <div class="w-1/2 ml-12 pl-10 ">
    <img
      src="https://storage.googleapis.com/a1aa/image/b7pfBfcrDkqmr0bERAsPYgNbPEQ4fWP5gEiegcj0rdbEEL6OB.jpg"
      alt="3D illustration of a person with glasses and an orange shirt"
      class="rounded-full border-4 border-blue-600 shadow-lg"
      width="400"
      height="400"
    />
  </div>
</section>
    
<div class="mt-8 space-x-9 text-right pr-7">
  <router-link to="/about" class="bg-blue-600 text-white px-8 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
    Hire me
</router-link>
<router-link to="/projet" class="border border-blue-600 text-blue-600 px-6 py-2 rounded-full shadow-lg hover:bg-blue-100 transition duration-300">
    See My Works
</router-link>
</div>
      </div>
     <!-- Navigation Links -->
   <section class="mt-5 w-full text-left">
    <div class="flex items-center mt-1">
     <a class="text-black text-xl font-bold ml-12 hover:text-blue-600 transition duration-300" href="/about">
      Sur moi
     </a>
     <i class="fas fa-arrow-right ml-3 text-black">
     </i>
    </div>
    <div class="flex items-center mt-11">
     <a class="text-black text-xl font-bold ml-6 hover:text-blue-600 transition duration-300" href="/projets">
      Project
     </a>
     <i class="fas fa-arrow-right ml-2 text-black">
     </i>
    </div>
    <div class="flex items-center mt-9">
     <a class="text-black text-xl font-bold mr-4 hover:text-blue-600 transition duration-300" href="#">
      Langages
     </a>
     <i class="fas fa-arrow-down text-black">
     </i>
    </div>
   </section>

      <!-- Contact Link -->
      <section class="mt-8 flex flex-col items-center">
       <div class="flex items-center mt-4">
        <button class="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
         Contact Me
        </button>
       </div>
      </section>
      <!-- Social Media Icons -->
        <!-- Social Media Icons -->
   <section class="mt-8 flex justify-center space-x-4">
    <a href="#">
     <i class="fab fa-facebook text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
     </i>
    </a>
    <a href="#">
     <i class="fab fa-linkedin text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
     </i>
    </a>
    <a href="#">
     <i class="fab fa-github text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
     </i>
    </a>
    <a href="#">
     <i class="fas fa-envelope text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
     </i>
    </a>
    <a href="#">
     <i class="fas fa-phone text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
     </i>
    </a>
    <a href="#">
     <i class="fab fa-youtube text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
     </i>
    </a>
   </section>
  
    </main>

    <!-- Sidebar Navigation -->
    <aside class="fixed left-0 top-1/4 flex flex-col space-y-4 p-4 bg-gray-200 rounded-r-lg">
      <a class="sidebar-button" href="/">
        <i class="fas fa-home"></i>
      </a>
      <a class="sidebar-button" href="/about">
        <i class="fas fa-info"></i>
      </a>
      <a class="sidebar-button" href="/projets">
        <i class="fas fa-code"></i>
      </a>
      <a class="sidebar-button" href="/contact">
        <i class="fas fa-user"></i>
      </a>
      <a class="sidebar-button" href="/videos">
        <i class="fas fa-video"></i>
      </a>
    </aside>
  </div>
</template>

<script setup>
import hearderComponent from '@/components/hearderComponent.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const greeting = "Bonjour";
const jobTitle = "Développeur";
const displayedGreeting = ref('');
const displayedJobTitle = ref('');
const userName = ref('');

const fetchUserName = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users');
    if (response.data.length > 0) {
      userName.value = response.data[0].name;
    } else {
      console.error("Aucun utilisateur trouvé.");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
  }
};

const animateText = (text, displayRef, speed = 100) => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      displayRef.value += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, speed);
};

onMounted(() => {
  fetchUserName();
  animateText(greeting, displayedGreeting);
  animateText(jobTitle, displayedJobTitle, 150);
});
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(to right, #ff6b6b, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

.sidebar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 9999px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
}
.sidebar-button:hover {
  background-color: #ebf8ff;
  transform: scale(1.1);
}
.sidebar-button:active {
  transform: translateX(0.5rem);
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(20deg); }
  40% { transform: rotate(0deg); }
  60% { transform: rotate(-20deg); }
  80% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
</style>
