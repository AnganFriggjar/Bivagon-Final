<template>
    <div class="cart-container">
      <!-- Sepet Boş Bileşeni -->
      <CartEmpty />
 
      <!-- Kasa Önü Fırsatlar Bileşeni -->
      <div class="content">
        <KasaÖnüFırsatlar />
      </div>
 
      <!-- Footer -->
      <Footer />
    </div>
  </template>
 
  <script setup>
  import CartEmpty from "~/components/CartEmpty.vue";
  import KasaÖnüFırsatlar from "~/components/KasaÖnüFırsatlar.vue";
  import Footer from "~/components/Footer.vue";
  </script>
 
  <style scoped>
  .cart-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #ffffff; 
  }
 
  .content {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9;
  }
 
  .content > div {
    max-width: 1200px;
    width: 100%;
  }
  </style>
 