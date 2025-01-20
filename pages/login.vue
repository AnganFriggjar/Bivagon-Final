<template>
  <div class="login-container">
    <Header />
    <div class="content">
      <GirişKayıt />
    </div>
    <Footer />
  </div>
</template>
 
<script setup>
import Header from "~/components/Header.vue";
import GirişKayıt from "~/components/GirişKayıt.vue";
import Footer from "~/components/Footer.vue";
</script>
 
<style scoped>
/* Sayfa düzeni */
.login-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
}
 
/* Giriş Yap içerik alanı */
.content {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
}
 
.content > div {
  max-width: 600px;
  width: 100%;
}
</style>
 