<template>
  <div class="app">
    <NuxtPage /> <!-- Nuxt'un sayfaları otomatik olarak yönlendiren yapısı -->
  </div>
</template>
 
<script setup>
import '@fortawesome/fontawesome-free/css/all.css'; 
</script>
 
<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff; 
}
</style>