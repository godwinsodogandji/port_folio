<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <main class="mt-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="video-item bg-white rounded-lg shadow-lg relative overflow-hidden"
          @mouseover="showNumber = index"
          @mouseleave="showNumber = null"
          @click="openModal(index)"
        >
          <video controls class="w-full rounded-t-lg">
            <source src="../assets/3522349549-preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ video.title }}</h2>
            <p class="text-gray-600">
              <span v-if="isTruncated(video.description) && !video.showFullDescription">
                {{ truncatedDescription(video.description) }}
                <a href="#" @click.prevent="toggleShowMore(index)" class="text-blue-600">Voir plus</a>
              </span>
              <span v-else>
                {{ video.description }}
                <a href="#" @click.prevent="toggleShowMore(index)" class="text-blue-600">Voir moins</a>
              </span>
            </p>
            <div v-if="showNumber === index" class="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full">
              {{ video.title }}
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modale pour lire la vidéo -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-2/3 lg:w-1/2">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          ✖
        </button>
        <video controls autoplay class="w-full rounded-lg">
          <source src="../assets/3522349549-preview.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <h2 class="mt-4 text-2xl font-semibold">{{ selectedVideo.title }}</h2>
        <p class="text-gray-600 mt-2">{{ selectedVideo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const videos = ref([]);
const showNumber = ref(null);
const maxLength = 100;

// Fonction pour tronquer la description
const isTruncated = (description) => description.length > maxLength;
const truncatedDescription = (description) => description.slice(0, maxLength) + '...';

// Fonction pour afficher/masquer la description complète
const toggleShowMore = (index) => {
  const video = videos.value[index];
  video.showFullDescription = !video.showFullDescription;
};

// Gestion de la modale
const isModalOpen = ref(false);
const selectedVideo = ref(null);

const openModal = (index) => {
  selectedVideo.value = videos.value[index];
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedVideo.value = null;
};

// Récupérer les vidéos depuis le backend
const fetchVideos = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/videos');
    videos.value = response.data; // Assigne les données récupérées à la variable videos
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos:', error);
  }
};


onMounted(fetchVideos);
</script>

<style scoped>
.video-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.video-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>