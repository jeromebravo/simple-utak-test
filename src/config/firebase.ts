import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAlLewJ3b-JtyU7N1LnrrZY2_iTjQ5Bw6c',
  authDomain: 'simple-utak-test.firebaseapp.com',
  projectId: 'simple-utak-test',
  storageBucket: 'simple-utak-test.appspot.com',
  messagingSenderId: '647154099262',
  appId: '1:647154099262:web:596257404678c5aa58dd6f',
  measurementId: 'G-Z2WRX94K1K',
  databaseURL: 'https://simple-utak-test-default-rtdb.asia-southeast1.firebasedatabase.app'
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);