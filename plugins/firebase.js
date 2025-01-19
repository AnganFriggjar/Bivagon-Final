import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(() => {
  // Firebase tarafından verilen kodu buraya ekleyin
  const firebaseConfig = {
    apiKey: "AIzaSyDFR5x7ZDw42-5F3eQY-NLB6ep8UKXjPy8",
    authDomain: "bivagon-final-24cd0.firebaseapp.com",
    projectId: "bivagon-final-24cd0",
    storageBucket: "bivagon-final-24cd0.firebasestorage.app",
    messagingSenderId: "340691686962",
    appId: "1:340691686962:web:3501366c7e7a74b3dfce2b"
  };

  // Firebase uygulamasını başlat
  const firebaseApp = initializeApp(firebaseConfig);

  // Firebase'i Nuxt içine sağlayın
  return {
    provide: {
      firebase: firebaseApp,
    },
  };
});