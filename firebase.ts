import firebase from 'firebase/compat/app';

const config = {
  apiKey: 'AIzaSyDfkoD8sDDaOgecavnBqffBW0KzxxyhClw',
  authDomain: 'w1793796.firebaseapp.com',
  projectId: 'w1793796',
  storageBucket: 'w1793796.appspot.com',
  messagingSenderId: '1065379907575',
  appId: '1:1065379907575:web:e8f87765bd6c6e44ce10f2'
};

export const { firestore } = firebase;

export const fire = firebase.initializeApp(config);
