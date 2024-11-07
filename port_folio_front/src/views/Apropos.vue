<template>
    <div class="container">
<div  id="abh1">
  <h1>About Me</h1>
</div>
      <div class="main-content">
          
  
        <div class="about-me">
            <div class="">
          <img src="../assets/images/calendar.png" alt="Profile Image" class="profile-image" />
          <h1 class="text-center">Deby </h1>
          <p class="dvlp">Developer</p>
        </div>
        <div class="text">
          <h4 class="text-center mt-12"><strong>About Me</strong></h4>
          <p>
            Il est bien connu que le lecteur sera distrait par le contenu lisible
         d'une page lorsqu'il examinera sa mise en page. L'intérêt d'utiliser
            le Lorem Ipsum est qu'il présente une distribution de lettres plus ou
         moins normale, contrairement à l'utilisation de « Contenu ici,
            contenu ici ».
          </p>
          <h4 class="text-center"><strong>Contact</strong></h4>
          <p class="text-center"><strong>Phone</strong><br> +06 14 52 78 41 10</p>
          <p class="text-center"><strong>Adresse</strong><br> 412 Akpakpa, Cotonou Bénin</p>
          <p class="text-center"><strong>Email</strong><br> deby123.jus@gmail.com<br>deby1234@outlook.fr</p>
        </div>
    </div>
        <!-- Right Side Section -->
        <div class="right">
          <div id="educ" class="info-section">
            <h3  >Education</h3>
          </div>
          <div  id="exper" class="info-section">
            <h3>Experiences</h3>
          </div>
          <div id="skill" class="info-section">
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
    padding-top:50px;
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
margin-left: 215px ;
margin-bottom: 30px;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 5px solid #b3c7f5;
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
    margin-top: 10px;
    margin-bottom: 0;
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
  
  /* coté droit */
  .right{
    flex: 1;
    padding: 20px;
    padding-top: 30px;
    padding-left: 0px;
    border-left: 6px solid #000;
    height: 100%;
    width: 100px;
    margin-right: 80;
    margin-bottom: 300px;

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
  #educ {
    margin-top: 0px;
  }
  #skill {
    margin-top: 270px;
  }
  #exper {
    margin-top:270px;
  }
  .photoprofil {
margin-top: 5px;
margin-bottom: 100px;
margin-left: 250px;

  }
  
  .info-section h3 {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 15px;
    border-radius: 5px;
  }
  .dvlp{
    margin-bottom: 100px;
    margin-top: 20px;
text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
  </style>

