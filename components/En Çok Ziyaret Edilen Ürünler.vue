<template>
  <section class="most-visited">
    <h2 class="section-title">EN ÇOK ZİYARET EDİLEN ÜRÜNLER</h2>
    <div class="product-grid">
      <div v-for="(product, index) in products" :key="index" class="product-card">
        <div class="product-image">
          <img :src="product.image" :alt="product.name" />
          <div class="free-shipping">Ücretsiz Kargo</div>
        </div>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">₺{{ product.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    name: "Elektrikli Fincan Isıtıcı Remta",
    price: "16.213,77",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=285,quality=85/39045/uploads/urunresimleri/buyuk/r64-elektrikli-fincan-isitici-remtamut-d-4aa0.jpg",
  },
  {
    name: "Bar Blender BB01 Remta",
    price: "10.558,90",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=285,quality=85/39045/uploads/urunresimleri/buyuk/bb01-2-litre-bar-blender-remtamutfakba-14891e.jpg",
  },
  {
    name: "Bar Blender Pro BB02 Remta",
    price: "16.842,09",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=285,quality=85/39045/uploads/urunresimleri/buyuk/bb02-2-litre-bar-blender-pro-remtamutf-3e-4a1.jpg",
  },
  {
    name: "Soğuk Süt Otomatı 8 Lt Remta",
    price: "4.275,71",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=285,quality=85/39045/uploads/urunresimleri/buyuk/v10-soguk-sut-otomati-8-lt-remtasusut--fc5625.jpg",
  },
  {
    name: "Sıcak Süt Otomatı 36 Litre Remta",
    price: "13.697,35",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=285,quality=85/39045/uploads/urunresimleri/buyuk/v12-sicak-sut-otomati-36-lt-remtasusut-5a9-83.jpg",
  },
];
</script>

<style scoped>
.most-visited {
  margin: 40px 0;
  font-family: Arial, sans-serif;
}

.section-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 0 16px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  text-align: center;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  position: relative;
  background: #f9f9f9;
}

.product-image img {
  width: 100%;
  height: auto;
}

.free-shipping {
  position: absolute;
  top: 0px;
  right: 100;
  background-color: #0097a9;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  font-weight: bold;
}

.product-info {
  padding: 10px;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: 	#363636;
}
</style>