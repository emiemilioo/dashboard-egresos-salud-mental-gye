import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDD5wzcTrDDoBaJFqE0uESTx5VNjCgJICc',
  authDomain: 'egresos-salud-mental-gye.firebaseapp.com',
  databaseURL:
    'https://egresos-salud-mental-gye-default-rtdb.firebaseio.com',
  projectId: 'egresos-salud-mental-gye',
  storageBucket: 'egresos-salud-mental-gye.firebasestorage.app',
  messagingSenderId: '77340849133',
  appId: '1:77340849133:web:e5e65485e08041ea46ede4',
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);