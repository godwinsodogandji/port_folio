<template>
  <div class="bg-gray-100 min-h-screen p-6 bg-center bg-[url('/src/assets/img/background.png')]">
    <h1 class="text-3xl text-center font-bold mb-20"> Projet</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(projets, index) in projectprojetss"
        :key="projets._id"
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
        <!-- Image de la projets -->
        <img :src="projets.image" alt="Image " class="w-full h-48 object-cover">

        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ projets.titre }}</h2>
          <p class="text-gray-600 mb-4">
            <span v-if="isTruncated(projets.description) && !projets.showFullDescription">
              {{ truncatedDescription(projets.description) }}
              <a href="#" @click.prevent="toggleShowMore(index)" class="text-blue-600">Voir plus</a>
            </span>
            <span v-else>
              {{ projets.description }}
              <a href="#" @click.prevent="toggleShowMore(index)" class="text-blue-600">Voir moins</a>
            </span>
          </p>
          <!-- Lien externe vers la projets -->
          <button class="text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-4 py-2 inline-block">
            <a href="/projets_details"  >
            Voir le projet
          </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const projectprojetss = ref([]);

const fetchProjects = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/projets'); // URL de votre API
    projectprojetss.value = response.data; // Assurez-vous que la structure des données correspond
  } catch (error) {
    console.error("Erreur lors de la récupération des projets: ", error);
  }
};

const maxLength = 100;
const isTruncated = (description) => description.length > maxLength;
const truncatedDescription = (description) => description.slice(0, maxLength) + '...';

const toggleShowMore = (index) => {
  const projets = projectprojetss.value[index];
  projets.showFullDescription = !projets.showFullDescription;
};

// Appeler la fonction pour récupérer les projets lorsque le composant est monté
onMounted(fetchProjects);
</script>

<style scoped>
.card-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>