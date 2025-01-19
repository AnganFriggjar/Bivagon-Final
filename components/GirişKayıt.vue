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
        <input type="email" placeholder="E-posta" />
        <div class="password-container">
          <input :type="showPassword ? 'text' : 'password'" placeholder="Şifre" />
          <img
            :src="showPassword ? eyeOpenIcon : eyeClosedIcon"
            alt="Şifre Göster/Gizle"
            class="eye-icon"
            @mouseover="showPassword = true"
            @mouseout="showPassword = false"
          />
        </div>
        <button class="primary-button">Giriş Yap</button>
        <a href="#" class="forgot-password">Şifremi Unuttum</a>
      </div>

      <!-- Üye Ol -->
      <div v-if="currentTab === 'register'" class="register-form">
        <input type="text" placeholder="Adınız" />
        <input type="text" placeholder="Soyadınız" />
        <input type="email" placeholder="E-posta" />
        <div class="password-container">
          <input :type="showPassword ? 'text' : 'password'" placeholder="Şifre" />
          <img
            :src="showPassword ? eyeOpenIcon : eyeClosedIcon"
            alt="Şifre Göster/Gizle"
            class="eye-icon"
            @mouseover="showPassword = true"
            @mouseout="showPassword = false"
          />
        </div>
        <input
          type="text"
          placeholder="gg.aa.yyyy"
          v-model="dateInput"
          @input="validateDate"
        />
        <div class="phone-container">
          <!-- Bayrak simgesi değiştirildi -->
          <button class="flag-button">
            <img src="https://e7.pngegg.com/pngimages/82/322/png-clipart-flag-of-turkey-national-flag-yukselen-bayrak-turk-bayra%C4%9F%C4%B1-100x150-flag-miscellaneous-flag-thumbnail.png" alt="Türkiye Bayrağı" />
          </button>
          <input
            type="tel"
            :placeholder="phonePlaceholder"
            v-model="phoneInput"
            @focus="clearPlaceholder"
            @blur="restorePlaceholder"
            @input="validatePhone"
          />
        </div>
        <div class="checkbox-container">
          <label class="checkbox-label">
            <input type="checkbox" />
            Kampanya, duyuru, bilgilendirmelerden e-posta ile haberdar olmak istiyorum.
          </label>
          <label class="checkbox-label">
            <input type="checkbox" />
            Kampanya, duyuru, bilgilendirmelerden sms ile haberdar olmak istiyorum.
          </label>
          <label class="checkbox-label terms-label">
            <input type="checkbox" />
            <button class="link-button">Üyelik koşullarını</button> ve
            <button class="link-button">kişisel verilerimin korunmasını</button>
            kabul ediyorum.
          </label>
        </div>
        <button class="primary-button">Üye Ol</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: "login", // Başlangıçta Giriş Yap aktif
      showPassword: false, // Şifreyi göster/gizle durumu
      phoneInput: "", // Telefon numarası başlangıç
      phonePlaceholder: "+90 566 612 1411", // Telefon numarası placeholder
      dateInput: "", // Tarih başlangıç
      eyeClosedIcon:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkeJ7bMW3HkXEThrnQP7ou5W9MbAaZvFcwuQ&s",
      eyeOpenIcon:
        "https://w1.pngwing.com/pngs/152/881/png-transparent-eye-symbol-human-eye-black-and-white-line-circle-thumbnail.png",
    };
  },
  methods: {
    addPhonePrefix() {
      // Telefon numarasına odaklandığında "+90" ekle
      if (!this.phoneInput.startsWith("+90")) {
        this.phoneInput = "+90";
      }
    },
    clearPlaceholder() {
      if (this.phoneInput === this.phonePlaceholder) {
        this.phoneInput = "";
      }
    },
    restorePlaceholder() {
      if (!this.phoneInput) {
        this.phoneInput = this.phonePlaceholder;
      }
    },
    validatePhone() {
      // Telefon numarası: yalnızca rakam kabul et
      this.phoneInput = this.phoneInput.replace(/[^0-9]/g, "");

      // Telefon numarası başına +90 ekleyelim
      if (!this.phoneInput.startsWith("90")) {
        this.phoneInput = "90";
      }

      // Maksimum uzunluğu sınırlayalım (12 karakter)
      if (this.phoneInput.length > 12) {
        this.phoneInput = this.phoneInput.slice(0, 12);
      }
    },
    validateDate() {
      // Tarih doğrulama: gg.aa.yyyy formatı
      const sanitized = this.dateInput.replace(/[^0-9]/g, "");
      const day = sanitized.slice(0, 2);
      const month = sanitized.slice(2, 4);
      const year = sanitized.slice(4, 8);
      this.dateInput = [day, month, year].filter((val) => val).join(".");
    },
  },
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
  border-bottom: 2px solid #002855;
  color: #002855;
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

.password-container {
  position: relative;
}

.password-container .eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.phone-container {
  display: flex;
  align-items: center;
}

.phone-container .flag-button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
}

.phone-container .flag-button img {
  width: 24px;
  height: 16px;
}

.phone-container input {
  flex: 1;
  color: #aaa; /* Placeholder için gri ton */
}

.checkbox-container {
  margin-top: 15px; /* Telefon numarasından biraz boşluk bırakmak için */
}

.checkbox-container label {
  display: flex; /* Flex düzeni ile yan yana yerleştirme */
  align-items: center; /* Ortaya hizalama */
  font-size: 14px;
  color: #555;
  margin-bottom: 10px; /* Her bir label arasına boşluk ekledik */
}

.checkbox-container input {
  margin-right: 10px; /* Checkbox ile yazı arasına boşluk */
}

/* Buton */
.primary-button {
  width: 100%;
  padding: 10px;
  background-color: #002855;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 10px;
}

.primary-button:hover {
  background-color: #001f3f;
}

/* Şifremi Unuttum */
.forgot-password {
  display: block;
  text-align: right;
  color: #002855;
  font-size: 14px;
  text-decoration: none;
}
.forgot-password:hover {
  text-decoration: underline;
}

/* Mavi buton görünümü */
.link-button {
  background: none;
  border: none;
  color: #002855; /* Mavi renk */
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
}

.link-button:hover {
  text-decoration: none;
}
</style>
