<template>
    <div class="product-slider">
      <h2 class="slider-title">Kasa Önü Fırsatlar</h2>
      <div class="slider-container">
        <!-- Sol ok butonu -->
        <button class="slider-btn prev-btn" @click="scrollLeft">
          <i class="fa fa-chevron-left"></i>
        </button>
  
        <!-- Ürün kartları -->
        <div class="product-list" ref="productList">
          <div class="product-card" v-for="(product, index) in products" :key="index">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <p class="product-name">{{ product.name }}</p>
            <p class="product-price">
              <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }}</span>
              {{ product.price }}
            </p>
            <button class="add-to-cart-btn">Sepete Ekle</button>
          </div>
        </div>
  
        <!-- Sağ ok butonu -->
        <button class="slider-btn next-btn" @click="scrollRight">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductSlider",
    data() {
      return {
        products: [
          {
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=165,quality=85,format=webp/39045/uploads/urunresimleri/thumb/kek-kaliplaribvg-1830-sufle--kabi-sade-912e-1.jpeg",
            name: "BVG 1830 Sufle Kabı Sade (MUŞ)",
            price: "₺131,14",
          },
          {
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=165,quality=85,format=webp/39045/uploads/urunresimleri/thumb/cay-setlerisunumlarcicekli-saturn---19-8-0c65.jpg",
            name: "Çiçekli Satürn - 19 Prç Çay Keyfi",
            oldPrice: "₺2.857,16",
            price: "₺1.727,04",
          },
          {
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=165,quality=85,format=webp/39045/uploads/urunresimleri/thumb/masa-lambalarimeissa-masa-lambasi-bvg.--43f5-.jpg",
            name: "MEİSSA MASA LAMBASI BVG.M21",
            price: "₺319,57",
          },
          {
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=165,quality=85,format=webp/39045/uploads/urunresimleri/thumb/cookerckr-2041-0.4-litre-bardak-termos-040ca7.jpg",
            name: "CKR 2041 0.4 Litre Bardak Termos",
            oldPrice: "₺895,21",
            price: "₺410,95",
          },
          {
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=165,quality=85,format=webp/39045/uploads/urunresimleri/thumb/masa-lambalarimeissa-masa-lambasi-bvg.-b1-2d8.png",
            name: "MEİSSA MASA LAMBASI BVG.M19",
            price: "₺463,15",
          },
          {
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=165,quality=85,format=webp/39045/uploads/urunresimleri/thumb/dokum-sahanblack-olimpos-6-parca-dokum-df-4b7.jpg",
            name: "Black Olimpos 6 Parça Döküm Sahan Seti",
            oldPrice: "₺4.559,93",
            price: "₺2.447,74",
          },
          {
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=165,quality=85,format=webp/39045/uploads/urunresimleri/thumb/ahsap-oyuncaklarbvg-0501-cocuk-arabasi-0e5a8a.jpeg",
            name: "BVG 0501 Çocuk Arabası (ÜSKÜP)",
            price: "₺1.815,97",
          },
          {
            image: "https://static.ticimax.cloud/cdn-cgi/image/width=165,quality=85,format=webp/39045/uploads/urunresimleri/thumb/masa-lambalarimeissa-masa-lambasi-bvg.-9366b7.jpg",
            name: "MEİSSA MASA LAMBASI BVG.M04",
            price: "₺463,15",
          },
        ],
      };
    },
    methods: {
      scrollLeft() {
        this.$refs.productList.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      },
      scrollRight() {
        this.$refs.productList.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .product-slider {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .slider-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: left;
  }
  
  .slider-container {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgb(255, 255, 255);
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  }
  
  .prev-btn {
    left: -20px;
  }
  
  .next-btn {
    right: -20px;
  }
  
  .product-list {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px 0;
  }
  
  .product-card {
    flex: 0 0 180px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    max-width: 100%;
    height: 100px;
    margin-bottom: 10px;
    object-fit: contain;
  }
  
  .product-name {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .product-price {
    font-size: 16px;
    font-weight: bold;
    color: #1c3b5e;
    margin-bottom: 10px;
  }
  
  .old-price {
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
    margin-right: 8px;
  }
  
  .add-to-cart-btn {
    background-color: #ffffff;
    color: rgb(52, 96, 171);
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }
  
  .add-to-cart-btn:hover {
    background-color: #14324a;
  }
  </style>