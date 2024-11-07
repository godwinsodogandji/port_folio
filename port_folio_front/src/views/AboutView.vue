<template>
  <div class="container">
    <div class="main-content">
      <div class="about-me">
        <div class="photoprofil">
          <img src="" alt="Profile Image" class="profile-image" />
          <h1 class="text-2xl font-bold text-gray-800">Jus Hope</h1>
          <p class="text-gray-600 text-lg font-semibold dvlp">Developer</p>
          <h4 class="text-lg font-bold text-gray-800 mt-6">About Me</h4>
        </div>
        <div class="text">
          <p class="text-gray-600 text-lg">
            Il est bien connu que le lecteur sera distrait par le contenu lisible d'une page lorsqu'il examinera sa mise en page. L'intérêt d'utiliser le Lorem Ipsum est qu'il présente une distribution de lettres plus ou moins normale, contrairement à l'utilisation de « Contenu ici, contenu ici ».
          </p>
          <h3 class="text-lg font-bold text-gray-800 mt-4">Contact</h3>
          <p class="text-gray-600 text-lg"><strong>Phone:</strong> +06 14 52 78 41 10</p>
          <p class="text-gray-600 text-lg"><strong>Address:</strong> 412 Akpakpa, Cotonou Bénin</p>
          <p class="text-gray-600 text-lg"><strong>Email:</strong> <a href="mailto:hope123.jus@gmail.com" class="text-blue-500 hover:underline">hope123.jus@gmail.com</a></p>
        </div>
      </div>
      <div class="right">
        <div id="educ" class="info-section">
          <h3 class="text-lg font-bold text-gray-800 bg-white/60 py-3 px-6 rounded-md">Education</h3>
        </div>
        <div id="exper" class="info-section">
          <h3 class="text-lg font-bold text-gray-800 bg-white/60 py-3 px-6 rounded-md">Experiences</h3>
        </div>
        <div id="skill" class="info-section">
          <h3 class="text-lg font-bold text-gray-800 bg-white/60 py-3 px-6 rounded-md">Skills</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  display: flex;
  font-family: Arial, sans-serif;
  color: #333;
  height: 1000px;
  width: 2500px;
  background: linear-gradient(to right, #c2dff7, #e3d7f7);
  padding-top: 50px;
}

.main-content {
  display: flex;
  flex: 1;
  padding: 40px;
  gap: 20px;
}

.about-me {
  flex: 1;
  padding: 20px;
  color: #333;
  margin-top: 10px;
  margin-bottom: 0;
}

.profile-image {
  width: 200px;
  height: 300px;
  border-radius: 100%;
  border: 5px solid #b3c7f5;
  margin-bottom: 15px;
}

.right {
  flex: 1;
  padding: 20px;
  padding-top: 30px;
  padding-left: 0px;
  border-left: 6px solid #000;
  height: 100%;
  width: 100px;
  margin-right: 80px;
  margin-bottom: 300px;
}

.info-section {
  margin-top: 30px;
}

#educ {
  margin-top: 0px;
}

#skill {
  margin-top: 270px;
}

#exper {
  margin-top: 270px;
}

.photoprofil {
  margin-top: 5px;
  margin-bottom: 100px;
  margin-left: 250px;
}

.dvlp {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
}
</style>