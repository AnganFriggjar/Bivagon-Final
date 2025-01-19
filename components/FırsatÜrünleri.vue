<template>
    <div class="products-container">
      <h2>Fırsat Ürünleri</h2>
      <div class="products-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <!-- Ürün resmi ve "Ücretsiz Kargo" etiketi -->
          <div class="product-image">
            <span class="free-shipping">Ücretsiz Kargo</span>
            <img :src="product.image" :alt="product.name" />
            <span v-if="product.soldOut" class="sold-out-text">Tükendi</span>
          </div>
          <!-- Ürün ismi ve fiyat bilgisi -->
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="price">
              <span class="old-price" v-if="product.oldPrice">₺{{ product.oldPrice }}</span>
              <span class="new-price">₺{{ product.newPrice }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Products",
    data() {
      return {
        products: [
          {
            id: 1,
            name: "1 NO MUTFAK BIÇAĞI",
            oldPrice: 442.19,
            newPrice: 246.44,
            soldOut: true,
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=282,quality=85/39045/uploads/urunresimleri/buyuk/1-no-mutfak-bicagi-d2e6.jpg",
          },
          {
            id: 2,
            name: "12 CM (0,5 LT) ÇELİK KAÇEROLA",
            oldPrice: 358.53,
            newPrice: 199.82,
            soldOut: true,
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=282,quality=85/39045/uploads/urunresimleri/buyuk/12-cm--05-lt--celik-kacerola-8daa.jpg",
          },
          {
            id: 3,
            name: "12 CM ÇELİK SOSLUK",
            oldPrice: 239.82,
            newPrice: 133.21,
            soldOut: true,
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=282,quality=85/39045/uploads/urunresimleri/buyuk/12-cm-celik-sosluk-ca5c.jpg",
          },
          {
            id: 4,
            name: "120 BARDAK ÇAY OTAMATI",
            oldPrice: 6035.29,
            newPrice: 3363.56,
            soldOut: true,
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=282,quality=85/39045/uploads/urunresimleri/buyuk/120-bardak-cay-otamati-4feb.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .products-container {
    padding: 20px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;
    align-items: start;
  }
  
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid #ddd;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    width: 200px;
  }
  
  .product-image {
    position: relative;
    margin-bottom: 15px;
  }
  
  .product-image img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
  }
  
  .free-shipping {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #007bff;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 4px;
    font-weight: bold;
  }
  
  .sold-out-text {
    position: absolute;
    bottom: 70px;
    right: 10px;
    background: none;
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
  
  .product-info {
    width: 100%;
  }
  
  .product-name {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .price {
    margin-top: 5px;
  }
  
  .old-price {
    text-decoration: line-through;
    color: #999;
    margin-right: 10px;
  }
  
  .new-price {
    font-weight: bold;
    color: black;
  }
  </style>
  