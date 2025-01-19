<template>
  <div class="cart-empty">
    <!-- Sağ üstte kullanıcı ikonu -->
    <div class="user-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4"></circle>
        <path d="M5 20c0-4 8-4 8-4s8 0 8 4"></path>
      </svg>
    </div>

    <div class="header">
      <h1>bivagon.com</h1>
    </div>
    <div class="content">
      <!-- Sepet ikonu -->
      <div class="custom-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1c3b5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </div>
      <h2>Sepetin Boş</h2>
      <button class="shopping-button" @click="goToShopping">
        Alışverişe Başla
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartEmpty",
  methods: {
    goToShopping() {
      // Alışverişe Başla butonuna tıklanınca yönlendirme
      this.$router.push("/"); // Ana sayfaya yönlendirir
    },
  },
};
</script>

<style scoped>
/* Ana kapsayıcı */
.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Arial", sans-serif;
  background-color: #ffffff;
  margin: 0;
  position: relative;
}

/* Sağ üstteki kullanıcı ikonu */
.user-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* Header bölümü */
.header {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 10px;
  font-weight: bold;
  color: #000000;
}

/* İçerik alanı */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Özel sepet ikonu */
.custom-icon {
  margin-bottom: 10px;
}

.custom-icon svg {
  display: block;
  margin: 0 auto;
}

/* "Sepetin Boş" başlığı */
h2 {
  font-size: 24px;
  color: #1c1c1c;
  margin-bottom: 20px;
}

/* Alışverişe Başla butonu */
.shopping-button {
  background-color: #1c3b5e; /* Koyu mavi */
  color: #ffffff;
  padding: 12px 240px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.shopping-button:hover {
  background-color: #14324a; /* Daha koyu mavi */
}
</style>
