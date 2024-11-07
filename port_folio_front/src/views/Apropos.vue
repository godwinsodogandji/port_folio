<template>
    <div class="container">
      <div class="main-content">
       
        <div class="profile-section">
          <img src="" alt="Profile Image" class="profile-image" />
          <h1 class="name">Jus Hope</h1>
          <p class="title">Developer</p>
        </div>

        <div class="about-me">
          <h4>About Me</h4>
          <p>
            Il est bien connu que le lecteur sera distrait par le contenu lisible
            d'une page lorsqu'il examinera sa mise en page. L'intérêt d'utiliser
            le Lorem Ipsum est qu'il présente une distribution de lettres plus ou
            moins normale, contrairement à l'utilisation de « Contenu ici,
            contenu ici ».
          </p>
          <h3>Contact</h3>
          <p><strong>Phone:</strong> +06 14 52 78 41 10</p>
          <p><strong>Adresse:</strong> 412 Akpakpa, Cotonou Bénin</p>
          <p><strong>Email:</strong> Hope123.jus@gmail.com<br>hopejus1234@outlook.fr</p>
        </div>
  
        <!-- Right Side Section -->
        <div class="right">
          <div class="info-section">
            <h3>Education</h3>
          </div>
          <div class="info-section">
            <h3>Experiences</h3>
          </div>
          <div class="info-section">
            <h3>Skill</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  /* Container */
  .container {
    display: flex;
    font-family: Arial, sans-serif;
    color: #333;
    height: 1000px;
    width: 2500px;
    background: linear-gradient(to right, #c2dff7, #e3d7f7);
  }
  
  /* Sidebar */
  .sidebar {
    margin-top: 30px;
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
    display: flex;
    flex: 1;
    padding: 40px;
    gap: 20px;
  }
  
  /* Profile Section */
  .profile-section {
    text-align: center;
    max-width: 300px;
  }
  
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid #b3c7f5;
    margin-bottom: 15px;
  }
  
  .name {
    font-size: 28px;
    color: white;
    margin: 0;
  }
  
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  
  /* About Me Section */
  .about-me {
    flex: 1;
    padding: 20px;
    color: #333;
  }
  
  .about-me h2 {
    font-size: 22px;
    font-weight: bold;
  }
  
  .about-me h3 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  
  /* Right Side Section */
  .right{
    flex: 1;
    padding: 20px;
    border-left: 2px solid #000;
    width: 100px;
    margin-right: 80;
  }
  
  .section-title {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    text-decoration: underline;
  }
  
  .info-section {
    margin-top: 30px;
  }
  
  .info-section h3 {
    font-size: 15px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 15px;
    border-radius: 5px;
  }
  </style>

