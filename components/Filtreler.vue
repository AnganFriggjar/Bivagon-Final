<template>
  <div class="filters-container">
    <!-- FİLTRELER -->
    <div class="filter-box">
      <h3 class="filters-title">FİLTRELER</h3>
      <ul class="filters-list">
        <li v-for="(filter, index) in filters" :key="index" class="filter-item">
          <label class="filter-label">
            <input type="checkbox" v-model="selectedFilters" :value="filter" />
            {{ filter }}
          </label>
        </li>
      </ul>
    </div>

    <!-- KATEGORİLER -->
    <div class="filter-box">
      <h3 class="filters-title">KATEGORİLER</h3>
      <ul class="filters-list">
        <li v-for="(category, index) in categories" :key="index" class="filter-item">
          <label class="filter-label">
            <input type="checkbox" v-model="selectedCategories" :value="category" />
            {{ category }}
          </label>
        </li>
      </ul>
    </div>

    <!-- MARKA -->
    <div class="filter-box">
      <h3 class="filters-title">MARKA</h3>
      <ul class="filters-list">
        <li v-for="(brand, index) in brands" :key="index" class="filter-item">
          <label class="filter-label">
            <input type="checkbox" v-model="selectedBrands" :value="brand" />
            {{ brand }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// FİLTRELER
const filters = [
  "İndirimli Ürünler",
  "Yeni Ürünler",
  "Ücretsiz Kargo",
  "Fırsat Ürünleri",
  "Hızlı Kargo",
];

// KATEGORİLER
const categories = [
  "Narenciye Sıkacakları",
  "French Press",
  "Baharatlık",
  "Pastacı Ekipmanları ve Silikon Ürünler",
  "Mutfak/Bar Yardımcı Makinalar",
];

// MARKA
const brands = [
  "COOKER",
  "EPİNOX EYÜPOĞLU",
  "KAHRAMANLAR",
  "Kahramanlar Madeni",
  "Narin",
  "Surinox",
];

// Seçili filtreleri tutacak değişkenler
const selectedFilters = ref([]);
const selectedCategories = ref([]);
const selectedBrands = ref([]);
</script>

<style scoped>
.filters-container {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 320px;
}

.filter-box {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
}

.filters-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.filters-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-item {
  margin-bottom: 8px;
}

.filter-label {
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.filter-label input[type="checkbox"] {
  margin-right: 8px;
}
</style>
