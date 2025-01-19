<template>
  <footer class="footer-container">
    <div class="footer-top">
      <img
        src="https://cdn.ticimax.com/Uploads/hazirSablonResimleri/footerImg/logo.png"
        alt="Ticimax Logo"
        class="ticimax-logo"
      />
      <div class="social-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/81/81341.png" alt="Facebook" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AIYSxVxzkuwxfAhcIaROSpQ8K9Y2a69x1A&s" alt="Twitter" />
        <img src="https://icons.iconarchive.com/icons/pictogrammers/material/256/instagram-icon.png" alt="Instagram" />
        <img src="https://icons.iconarchive.com/icons/aniket-suvarna/box-logo/256/bxl-google-plus-circle-icon.png" alt="Google+" />
        <img src="https://icons.iconarchive.com/icons/pictogrammers/material/256/linkedin-icon.png" alt="LinkedIn" />
        <img src="https://icons.iconarchive.com/icons/pictogrammers/material/256/youtube-icon.png" alt="YouTube" />
        <img src="https://icons.iconarchive.com/icons/aniket-suvarna/box-logo/256/bxl-pinterest-alt-icon.png" alt="Pinterest" />
      </div>
    </div>
    <div class="footer-separator"></div>
    
    <div class="footer-content">

      <div class="footer-column">
        <h4>ALIŞVERİŞ BİLGİLERİ</h4>
        <ul>
          <li><button>Siparişlerim</button></li>
          <li><button>Beğendiklerim</button></li>
          <li><button>İade Taleplerim</button></li>
          <li><button>Kargo Takip</button></li>
          <li><button>Hesabım</button></li>
        </ul>
      </div>


      <div class="footer-column">
        <h4>MÜŞTERİ HİZMETLERİ</h4>
        <ul>
          <li><button>Canlı Destek</button></li>
          <li><button>Yardım</button></li>
          <li><button>Garanti & İade Sorgulama</button></li>
          <li><button>Sıkça Sorulan Sorular</button></li>
        </ul>
      </div>


      <div class="footer-column">
        <h4>KURUMSAL</h4>
        <ul>
          <li><button>Hakkımızda</button></li>
          <li><button>İletişim</button></li>
        </ul>
      </div>


      <div class="footer-column">
        <h4>E-BÜLTEN KAYIT</h4>
        <p>Kampanyalarımızdan ve indirimlerimizden güncel olarak haberdar olun.</p>
        <div class="newsletter">
          <input type="email" placeholder="E-posta adresinizi yazın..." />
          <button>Gönder</button>
        </div>
      </div>
    </div>


    <div class="footer-bottom">
      <img
        src="https://cdn.ticimax.com/Uploads/hazirSablonResimleri/footerImg/konsept1banka.png"
        alt="Ödeme Yöntemleri"
        class="payment-image"
      />
      <div class="footer-bottom-content">
        <p>&copy; 2017 TİCİMAX - TÜM HAKLARI SAKLIDIR</p>
      </div>
    </div>


    <div class="footer-extra-logo">
      <img
        src="https://cdn.ticimax.com/Uploads/hazirSablonResimleri/footerImg/logo.png"
        alt="Ticimax Logo"
        class="ticimax-small-logo"
      />
    </div>
  </footer>
</template>

<style scoped>

.footer-container {
  background-color: #f9f9f9;
  padding: 20px 0;
  font-family: Arial, sans-serif;
}


.footer-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.ticimax-logo {
  width: 150px;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-icons img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}


.footer-separator {
  border-top: 1px solid #ccc;
  margin: 20px 0;
  background-color: white;
}

.footer-content {
  display: flex;  
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  background-color: #f0f0f0; 
}

.footer-column h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li button {
  background: none;
  border: none;
  color: #444; 
  cursor: pointer;
}

.newsletter {
  display: flex;
  margin-top: 10px;
}

.newsletter input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

.newsletter button {
  padding: 8px 16px;
  background-color: #2596be;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 14px; 
  height: 48px; 
  width: 130px; 
}

.newsletter button:hover {
  background-color: #2596be;
}


.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 14px;
  color: #777;
  background-color: #f0f0f0;
}

.footer-bottom-content {
  width: 100%;
  text-align: center;
  background-color: #f0f0f0; 
  padding: 10px 0;
}

.footer-bottom p {
  margin: 0;
  color: #777; 
}

.payment-image {
  height: 30px;
  cursor: pointer;
}
.footer-extra-logo {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
}

.ticimax-small-logo {
  width: 75px;
}
</style>
