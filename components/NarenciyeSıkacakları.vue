<template>
    <div class="product-list">
      <!-- Üst Menü -->
      <div class="menu-bar">
        <button @click="sortBy('asc')">FİYATA GÖRE (ARTAN)</button>
        <button @click="sortBy('desc')">FİYATA GÖRE (AZALAN)</button>
        <button @click="sortBy('name-asc')">ÜRÜN ADINA GÖRE (A&gt;Z)</button>
        <button @click="sortBy('name-desc')">ÜRÜN ADINA GÖRE (Z&lt;A)</button>
        <button @click="filterByStock()">STOKTAKİLER</button>
      </div>
  
      <!-- Ürünler -->
      <div class="products">
        <div
          class="product-card"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <!-- Etiketler -->
          <div class="tags">
            <span class="tag new" v-if="product.isNew">Yeni</span>
            <span class="tag free-shipping" v-if="product.hasFreeShipping">Ücretsiz Kargo</span>
          </div>
  
          <!-- Ürün Görseli -->
          <div class="image-container">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div v-if="product.soldOut" class="sold-out">Tükendi</div>
          </div>
  
          <!-- Ürün Bilgileri -->
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-price">
            {{ product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const products = ref([
    {
      id: 1,
      name: 'CKR700 S Tipi Pres Makinası',
      price: 847.48,
      image: 'https://static.ticimax.cloud/cdn-cgi/image/width=293,quality=85/39045/uploads/urunresimleri/buyuk/narenciye-sikacaklarickr700--stipi-pre--0bae-.jpg',
      isNew: true,
      hasFreeShipping: true,
      soldOut: true,
    },
    {
      id: 2,
      name: 'CKR270 Ev Tipi Meyve Pres Makinası',
      price: 721.22,
      image: 'https://static.ticimax.cloud/cdn-cgi/image/width=293,quality=85/39045/uploads/urunresimleri/buyuk/narenciye-sikacaklarickr270-ev-tipi-me-0679-4.jpg',
      isNew: false,
      hasFreeShipping: true,
      soldOut: true,
    },
    {
      id: 3,
      name: 'CKR2363 Makaslı Meyve Pres Makinası',
      price: 1117.95,
      image: 'https://static.ticimax.cloud/cdn-cgi/image/width=293,quality=85/39045/uploads/urunresimleri/buyuk/narenciye-sikacaklarickr2363--makasli--dc-95a.jpg',
      isNew: true,
      hasFreeShipping: true,
      soldOut: false,
    },
  ]);
  
  const sortType = ref('asc');
  const showOnlyInStock = ref(false);
  
  const sortedProducts = computed(() => {
    let result = products.value.slice();
    if (sortType.value === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortType.value === 'desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortType.value === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType.value === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }
    return result;
  });
  
  const filteredProducts = computed(() => {
    if (showOnlyInStock.value) {
      return sortedProducts.value.filter((product) => !product.soldOut);
    }
    return sortedProducts.value;
  });
  
  function sortBy(type) {
    sortType.value = type;
  }
  
  function filterByStock() {
    showOnlyInStock.value = !showOnlyInStock.value;
  }
  </script>
  
  <style scoped>
  .product-list {
    padding: 20px;
  }
  
  .menu-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .menu-bar button {
    border: none;
    background: transparent;
    font-size: 1em;
    color: #000000;
    cursor: pointer;
    padding: 5px 10px;
  }
  
  .menu-bar button:hover {
    text-decoration: underline;
  }
  
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #dddddd;
    padding: 10px;
    background: #fff;
    position: relative;
    border-radius: 5px;
  }
  
  .tags {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .tag {
    padding: 5px 10px;
    font-size: 0.8em;
    color: #fff;
    border-radius: 5px;
    background-color: #007bff;
  }
  
  .image-container {
    position: relative;
    margin-bottom: 10px;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
  .sold-out {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.8);
    color: rgb(0, 0, 0);
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1em;
    text-align: center;
  }
  
  .product-name {
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
  }
  
  .product-price {
    font-size: 1em;
    color: #333;
    text-align: center;
    margin-top: 5px;
  }
 
  </style>
  