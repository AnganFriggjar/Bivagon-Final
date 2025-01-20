<template>
    <div class="narenciye-container">
      <!-- Header -->
      <Header />
 
      <!-- İçerik -->
      <div class="content">
        <aside class="sidebar">
          <Filtreler />
        </aside>
        <main class="main-content">
          <NarenciyeSıkacakları />
        </main>
      </div>
 
      <!-- En Çok Ziyaret Edilenler -->
      <section class="visited-products">
       
        <EnCokZiyaretEdilenler />
      </section>
 
      <!-- Footer -->
      <Footer />
    </div>
  </template>
 
  <script setup>
  import Header from "~/components/Header.vue";
  import Filtreler from "~/components/Filtreler.vue";
  import NarenciyeSıkacakları from "~/components/NarenciyeSıkacakları.vue";
  import EnCokZiyaretEdilenler from "~/components/En Çok Ziyaret Edilen Ürünler.vue";
  import Footer from "~/components/Footer.vue";
  </script>
 
  <style scoped>
  /* Genel Sayfa Yapısı */
  .narenciye-container {
    display: flex;
    flex-direction: column;
    min-height: 300vh;
    background-color: #ffffff; 
  }
 
  /* İçerik düzeni */
  .content {
    display: flex;
    flex: 1;
    padding: 20px;
    gap: 20px; 
    background-color: #f9f9f9; 
  }
 
  .sidebar {
    flex: 0 0 250px; 
  }
 
  .main-content {
    flex: 1;
  }
 
  /* En Çok Ziyaret Edilenler Bölümü */
  .visited-products {
    margin-top: 40px;
    padding: 20px;
    background-color: #ffffff;
    text-align: center;
  }
 
  .visited-products h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
 
  .visited-products > div {
    display: flex;
    justify-content: center;
  }
  </style>