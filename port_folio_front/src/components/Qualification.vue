<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="text-center">
            <h1 class="text-2xl font-bold mb-6">QUALIFICATION TEST – CTA 7.0</h1>
            <div class="relative inline-block mb-6">
                <svg class="w-32 h-32">
                    <circle class="text-gray-300" stroke-width="8" stroke="currentColor" fill="transparent" r="50"
                        cx="64" cy="64" />
                    <circle class="text-blue-600" stroke-width="8" stroke-dasharray="314" stroke-dashoffset="126"
                        stroke-linecap="round" stroke="currentColor" fill="transparent" r="50" cx="64" cy="64" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                    <div>
                        <span class="text-2xl font-bold">60%</span>
                        <div class="text-gray-500">50%</div>
                    </div>
                </div>
            </div>
            <div class="mb-6">
                <button
                    class="bg-green-500 text-white px-32 py-3 rounded-lg flex items-center justify-center mx-auto">
                    <span>Passed</span>
                    <i class="fas fa-check ml-2"></i>
                </button>
            </div>
            <div class="text-left inline-block p-4 bg-white rounded shadow-md w-80">
                <div class="flex justify-between mb-2">
                    <span>Time spent</span>
                    <span>00:19:59</span>
                </div>
                <hr class="border-gray-300">
                <div class="flex justify-between mb-2">
                    <span>Points</span>
                    <span>12 / 20</span>
                </div>
                <hr class="border-gray-300">
                <div class="flex justify-between mb-2">
                    <span>Questions</span>
                    <span>20</span>
                </div>
                <hr class="border-gray-300">
                <div class="flex justify-between mb-2">
                    <span>Correct</span>
                    <span>12</span>
                </div>
                <hr class="border-gray-300">
                <div class="flex justify-between mb-2">
                    <span>Wrong</span>
                    <span>6</span>
                </div>
                <hr class="border-gray-300">
                <div class="flex justify-between mb-2">
                    <span>Skipped</span>
                    <span>2</span>
                </div>
                <hr class="border-gray-300">
                <div class="flex justify-between">
                    <span>Minus points</span>
                    <span>0</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>