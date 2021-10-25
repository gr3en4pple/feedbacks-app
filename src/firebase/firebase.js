import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWNWvSEnSlaAaJzjx3Zc4N0PF4j7NAHQk',
  authDomain: 'feedbacks-5728d.firebaseapp.com',
  projectId: 'feedbacks-5728d',
  storageBucket: 'feedbacks-5728d.appspot.com',
  messagingSenderId: '499223480052',
  appId: '1:499223480052:web:df7750196af695c62480a1',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
