<template>
  <div class="container">
    <header class="navbar">
      <!-- Logo -->
      <div class="logo">
        <img src="https://static.ticimax.cloud/39045/uploads/editoruploads/bivagon.jpg" alt="Bivagon Logo" />
      </div>
 
      <!-- Menü -->
      <nav class="menu">
        <ul>
          <li><a href="#">Endüstriyel Mutfak Ekipmanları</a></li>
          <li><a href="#">Bıçaklar</a></li>
          <li><a href="#">Termoslar</a></li>
          <li class="dropdown" @click="toggleDropdown">
            <a href="#">Diğer Ürünler</a>
            <!-- Alt Kategoriler -->
            <ul v-if="showDropdown" class="dropdown-menu">
              <li><a @click="goToNarenciye">Narenciye Sıkacakları</a></li>
              <li><a @click="goToMakinalar">Yardımcı Makinalar</a></li>
            </ul>
          </li>
        </ul>
      </nav>
 
      <!-- İkonlar -->
      <div class="icons">
        <i class="fa fa-user" @click="goToLogin"></i>
        <i class="fa fa-user-plus"></i>
        <i class="fa fa-search"></i>
        <i class="fa fa-shopping-cart" @click="goToCart"></i>
      </div>
    </header>
  </div>
</template>
 
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
 
const showDropdown = ref(false);
const router = useRouter();
 
function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
 
function goToLogin() {
  router.push("/login");
}
 
function goToCart() {
  router.push("/cart");
}
 
function goToNarenciye() {
  router.push("/narenciye");
}
 
function goToMakinalar() {
  router.push("/yardimci-makinalar");
}
</script>
 
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 400px;
}
 
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  background-color: white;
  font-family: Arial, sans-serif;
}
 
.logo img {
  max-height: 120px;
  margin-bottom: 60px;
}
 
.menu ul {
  list-style: none;
  display: flex;
  gap: 80px;
  padding: 0;
  margin: 0;
}
 
.menu ul li {
  position: relative;
  max-width: 200px;
  text-align: center;
}
 
.menu ul li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s;
}
 
.menu ul li a:hover {
  color: #007bff;
}
 
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 200px;
}
 
.dropdown-menu li {
  padding: 5px 20px;
  text-align: left;
}
 
.dropdown-menu li a {
  color: #333;
  font-size: 14px;
  display: block;
}
 
.dropdown-menu li a:hover {
  color: #007bff;
}
 
.icons {
  position: absolute;
  top: 20px;
  right: 500px;
  display: flex;
  gap: 15px;
}
 
.icons i {
  font-size: 24px;
  color: #007bff;
  cursor: pointer;
}
</style>