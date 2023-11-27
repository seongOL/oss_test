// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js';
import {
    getAuth, // authentication 설정
    signInWithEmailAndPassword, // email login
    createUserWithEmailAndPassword, //email signup
    onAuthStateChanged, //state change method
} from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCewXKX4dEBB-Lrh4ymr_EOcn1Jdw3_pUk',
    authDomain: 'opensource-project-b2d2f.firebaseapp.com',
    projectId: 'opensource-project-b2d2f',
    storageBucket: 'opensource-project-b2d2f.appspot.com',
    messagingSenderId: '857335827397',
    appId: '1:857335827397:web:64711d1e837f9264f199ac',
    measurementId: 'G-6MPQYRFD68',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
