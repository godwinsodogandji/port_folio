<template>
    <section class="bg-no-repeat bg-cover bg-center bg-[url('/src/assets/img/background2.png')] min-h-screen">
        <div class="container mx-auto p-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                <div v-for="projet in projets" :key="projet._id"
                    class="max-w-xs bg-[#F9FAFB] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="" alt="image" />
                    </a>
                    <div class="p-4">
                        <a href="#">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {{ projet.titre }}
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {{ projet.description }}
                        </p>
                        <button href="#" @click="showDetails(projet)"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6875F5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        <div v-if="selectedProjet"
                            class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                            <div class="bg-white rounded-lg p-8 max-w-md">
                                <h3 class="text-xl font-bold mb-4">{{ selectedProjet.titre }}</h3>
                                <p class="mb-2"><strong>Description:</strong> {{ selectedProjet.description }}</p>
                                <p class="mb-2"><strong>Technologies:</strong> {{ selectedProjet.technologies.join(', ')
                                    }}</p>
                                <p class="mb-2"><strong>Lien:</strong> <a :href="selectedProjet.lien"
                                        class="text-blue-700 underline">{{ selectedProjet.lien }}</a></p>
                                <p class="mb-2"><strong>Date:</strong> {{ new
                                    Date(selectedProjet.date).toLocaleDateString() }}</p>
                                <p class="mb-2"><strong>Version:</strong> {{ (selectedProjet.__v) }}</p>
                                <button @click="selectedProjet = null"
                                    class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Fermer</button>
                                <div
                                    class="mt-2 border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                                    <small>Dernière mise à jour il y a 3 minutes</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-6">
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">
                        <li>
                            <a href="#"
                                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Previous
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';
const selectedProjet = ref(null);
const projets = ref([]);

const fetchProjets = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/projets');
        projets.value = response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
    }
};

const showDetails = (projet) => {
    selectedProjet.value = projet;
};

onMounted(fetchProjets);
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style>