<template>
    <div class="container">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="icon"><i class="fas fa-home"></i></div>
        <div class="icon"><i class="fas fa-info-circle"></i></div>
        <div class="icon"><i class="fas fa-code"></i></div>
        <div class="icon"><i class="fas fa-user"></i></div>
        <div class="icon"><i class="fas fa-envelope"></i></div>
      </div>
  
      <!-- Main Content -->
      <div class="main-content">
        <!-- Header -->
        <header class="header">
          <div class="badge">1</div>
          <h1>Project Completed</h1>
        </header>
  
        <!-- Project Cards Grid -->
        <div class="project-grid">
          <div class="project-card" v-for="project in projects" :key="project.title">
            <img :src="project.image" alt="Project Image" class="project-image" />
            <h2 class="project-title">{{ project.title }}</h2>
            <button class="project-button">Voir plus</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  const data = {
    projects: [
      { title: "To Do List", image: "todo-list.jpg" },
      { title: "App Music", image: "app-music.jpg" },
      { title: "Tapping", image: "tapping.jpg" },
      { title: "Flags game", image: "flags-game.jpg" },
      { title: "To Do List", image: "todo-list.jpg" },
      { title: "To Do List", image: "todo-list.jpg" },
    ]
  };

  new Vue({
    el: '#app',
    data: data,
  });
</script>

<style scoped>
/* Container */
.container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #c2dff7, #e3d7f7);
}

/* Sidebar */
.sidebar {
  width: 80px;
  background-color: #d5d7f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.icon {
  margin: 15px 0;
  font-size: 24px;
  color: #4b4b4b;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.badge {
  background-color: gold;
  color: #fff;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
