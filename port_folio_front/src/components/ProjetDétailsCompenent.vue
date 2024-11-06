<template>
    <div class="bg-gray-100 min-h-screen p-6">
      <h1 class="text-3xl text-center font-bold mb-8">Versions du Projet</h1>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(version, index) in projectVersions"
          :key="index"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <!-- Image de la version -->
          <img :src="version.image" alt="Image de version" class="w-full h-48 object-cover">
  
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ version.title }}</h2>
            <p class="text-gray-600 mb-4">
              <span v-if="isTruncated(version.description) && !version.showFullDescription">
                {{ truncatedDescription(version.description) }}
                <a href="#" @click.prevent="toggleShowMore(index)" class="text-blue-600">Voir plus</a>
              </span>
              <span v-else>
                {{ version.description }}
                <a href="#" @click.prevent="toggleShowMore(index)" class="text-blue-600">Voir moins</a>
              </span>
            </p>
            <!-- Lien externe vers la version -->
            <a :href="version.link" target="_blank" class="text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-4 py-2 inline-block">
              Voir la version
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const projectVersions = ref([
    {
      title: "Version 1.0",
      description: "Description détaillée de la version 1. Cette version comprend des améliorations majeures en termes de performance et de sécurité, avec des nouvelles fonctionnalités.",
      image: "port_folio_front\src\assets\h5.png",
      link: "https://example.com/version1", // Lien externe vers la version
      showFullDescription: false,
    },
    {
      title: "Version 1.1",
      description: "Mise à jour mineure de la version 1.1 avec des corrections de bugs et des ajustements esthétiques.",
      image: "../assets/h5.png",
      link: "https://example.com/version1.1", // Lien externe vers la version
      showFullDescription: false,
    },
    {
      title: "Version 2.0",
      description: "Nouvelle version majeure avec une refonte complète de l'interface utilisateur et l'ajout de fonctionnalités avancées pour une meilleure expérience utilisateur.",
      image: "https://via.placeholder.com/400x300",
      link: "https://example.com/version2", // Lien externe vers la version
      showFullDescription: false,
    },
  ]);
  
  const maxLength = 100;
  const isTruncated = (description) => description.length > maxLength;
  const truncatedDescription = (description) => description.slice(0, maxLength) + '...';
  
  const toggleShowMore = (index) => {
    const version = projectVersions.value[index];
    version.showFullDescription = !version.showFullDescription;
  };
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
  