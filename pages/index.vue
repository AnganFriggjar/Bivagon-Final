<template>
  <div class="homepage-container">
    <!-- Header -->
    <Header />

    <!-- Fırsat Ürünleri -->
    <div class="content">
      <FırsatÜrünleri />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import FırsatÜrünleri from "~/components/FırsatÜrünleri.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.homepage-container {
  display: flex;
  flex-direction: column;
  min-height: 200vh;
  background-color: #ffffff; 
}

/* Fırsat Ürünleri içeriği */
.content {
  display: flex;
  justify-content: center; 
  padding: 400px;
  background-color: #f9f9f9; 
}

.content > div {
  max-width: 1200px; 
  width: 100%;
}
</style>