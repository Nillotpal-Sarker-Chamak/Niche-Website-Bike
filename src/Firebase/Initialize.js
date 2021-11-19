import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyDGlUAvea_CKU0eDqNdAHBBwKZUZ81T_jc",
  authDomain: "again-bike.firebaseapp.com",
  projectId: "again-bike",
  storageBucket: "again-bike.appspot.com",
  messagingSenderId: "992438565586",
  appId: "1:992438565586:web:46040cf329ade321140b0b"
};


const initializeAuth = () => {
  initializeApp(firebaseConfig);
  getAnalytics(initializeApp(firebaseConfig));
}

export default initializeAuth;