<template>
  <div class="auth-container">
    <div class="tab-menu">
      <button :class="{ active: currentTab === 'login' }" @click="currentTab = 'login'">
        Giriş Yap
      </button>
      <button :class="{ active: currentTab === 'register' }" @click="currentTab = 'register'">
        Üye Ol
      </button>
    </div>
    <div class="tab-content">
      <!-- Giriş Yap -->
      <div v-if="currentTab === 'login'" class="login-form">
        <form @submit.prevent="handleLogin">
          <input type="email" v-model="email" required placeholder="E-posta" />
          <input type="password" v-model="password" required placeholder="Şifre" />
          <button type="submit" class="primary-button">Giriş Yap</button>
        </form>
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
 
      <!-- Üye Ol -->
      <div v-if="currentTab === 'register'" class="register-form">
        <form @submit.prevent="handleRegister">
          <input type="text" v-model="name" required placeholder="Adınız" />
          <input type="text" v-model="surname" required placeholder="Soyadınız" />
          <input type="email" v-model="email" required placeholder="E-posta" />
          <input type="password" v-model="password" required placeholder="Şifre" />
          <button type="submit" class="primary-button">Üye Ol</button>
        </form>
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>
 
<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth"; 
 
const currentTab = ref("login"); 
const email = ref("");
const password = ref("");
const name = ref("");
const surname = ref("");
const errorMessage = ref("");
 
// PINIA Store
const authStore = useAuthStore();
 
const handleLogin = async () => {
  try {
    await authStore.loginUser(email.value, password.value);
    alert("Giriş başarılı!");
  } catch (error) {
    errorMessage.value = error.message || "Giriş işlemi sırasında bir hata oluştu.";
  }
};
 
const handleRegister = async () => {
  try {
    await authStore.registerUser(email.value, password.value);
    alert("Kayıt başarılı!");
  } catch (error) {
    errorMessage.value = error.message || "Kayıt işlemi sırasında bir hata oluştu.";
  }
};
</script>
 
<style scoped>
/* Genel Konteyner */
.auth-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}
 
/* Tab Menüsü */
.tab-menu {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
}
 
.tab-menu button {
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #888;
}
 
.tab-menu button.active {
  border-bottom: 2px solid #007bff;
  color: #007bff;
  font-weight: bold;
}
 
/* Formlar */
.tab-content input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}
 
.primary-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
}
 
.primary-button:hover {
  background-color: #0056b3;
}
 
/* Hata Mesajı */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}
</style>
 