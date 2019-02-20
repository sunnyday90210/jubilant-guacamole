import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBLSbqteIH6kcxD2FKHAPsX0COGcUnslaA',
  authDomain: 'react-messing-app.firebaseapp.com',
  databaseURL: 'https://react-messing-app.firebaseio.com',
  projectId: 'react-messing-app',
  storageBucket: 'react-messing-app.appspot.com',
  messagingSenderId: '548590868012'
};
firebase.initializeApp(config);

export default firebase;
