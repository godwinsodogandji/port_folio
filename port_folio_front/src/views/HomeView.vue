<template>
  <div class="bg-gradient-to-r from-pink-300 via-pink-400 to-teal-500 min-h-screen flex flex-col items-center">
    <!-- Header -->
    <header class="w-full flex justify-end p-5">
      <nav>
        <a class="text-black text-4xl font-bold underline" href="/">
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
      <h2 class="text-3xl font-bold text-black mt-2 text-left">Je suis Developpeur web  Full Stack</h2>
      <h3 class="text-4xl font-bold gradient-text-orange mt-2">Develope....</h3>

      <!-- Who Am I Section -->
      <section class="mt-8 w-3/4 text-center">
        <h4 class="text-2xl font-bold text-black text-left">Qui suis-je ?</h4>
        <p class="text-black mt-4 text-left">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum.
        </p>
      </section>

      <!-- Profile Image Section -->
      <section class="mt-9 ">
        <img alt="" class="rounded-full" height="50" src="../assets/img/img_contact.png" width="150" />
      </section>

      <!-- Navigation Links -->
      <section >
        <div >
          <a class="text-left text-black text-xl font-bold mr-4" href="#">Sur moi</a>
          <i class="fas fa-arrow-right text-black"></i>
        </div>
        <div class="flex items-center mt-4">
          <a class="text-black text-xl font-bold mr-4" href="#">Project</a>
          <i class="fas fa-arrow-right text-black"></i>
        </div>
        <div class="flex items-center mt-4">
          <a class="text-black text-xl font-bold mr-4" href="#">Langages</a>
          <i class="fas fa-arrow-down text-black"></i>
        </div>
      </section>

      <!-- Contact Link -->
      <section class="mt-8 flex flex-col items-center">
        <div class="flex items-center mt-4">
          <a class="text-black text-xl font-bold mr-4" href="/contact">Contact Me</a>
          <i class="fas fa-arrow-right text-black"></i>
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
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100" href="/home">
        <i class="fas fa-home text-blue-500 transition-colors duration-200 hover:text-blue-700"></i>
      </a>
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100" href="#">
        <i class="fas fa-info text-black transition-colors duration-200 hover:text-blue-700"></i>
      </a>
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100" href="#">
        <i class="fas fa-code text-black transition-colors duration-200 hover:text-blue-700"></i>
      </a>
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100" href="/contact">
        <i class="fas fa-user text-black transition-colors duration-200 hover:text-blue-700"></i>
      </a>
      <a class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 active:translate-x-2 hover:bg-blue-100" href="#">
        <i class="fas fa-video text-black transition-colors duration-200 hover:text-blue-700"></i>
      </a>
    </aside>
  </div>
</template>

<script setup>
// You can add any script logic here if needed.
</script>

<style scoped>

</style>
