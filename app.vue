<template>
  <div class="app">
    <Navbar @changeComponent="changeComponent" />
    <main class="main-container">
      <Component1 v-show="currentComponent === 1" />
      <Component2 v-show="currentComponent === 2" />
      <Component3 v-show="currentComponent === 3" />
      <Component4 v-show="currentComponent === 4" />
      <Component5 v-show="currentComponent === 5" />
      <Component6 v-show="currentComponent === 6" />
      <Component7 v-show="currentComponent === 7" />
      <Component8 v-show="currentComponent === 8" />
      <Component9 v-show="currentComponent === 9" />
      <Component10 v-show="currentComponent === 10" />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Component1 from "./components/Header.vue";
import Component2 from "./components/Footer.vue";
import Component3 from "./components/GirişKayıt.vue";
import Component4 from "./components/FırsatÜrünleri.vue";
import Component5 from "./components/CartEmpty.vue";
import Component6 from "./components/Filtreler.vue";
import Component7 from "./components/KasaÖnüFırsatlar.vue";
import Component8 from "./components/En Çok Ziyaret Edilen Ürünler.vue";
import Component9 from "./components/NarenciyeSıkacakları.vue";
import Component10 from "./components/YardımcıMakinalar.vue";

export default {
  components: {
    Navbar,
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
    Component7,
    Component8,
    Component9,
    Component10,
  },
  data() {
    return {
      currentComponent: 1, // Başlangıçta gösterilecek component
    };
  },
  methods: {
    changeComponent(componentNumber) {
      this.currentComponent = componentNumber;
    },
  },
};
</script>

<style>
.app {
  display: flex;
  height: 100vh;
}
.main-container {
  flex: 1;
  padding: 20px;
}
</style>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
</script>
