import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
const config = {
  apiKey: 'AIzaSyDsJqOsS4z76QCUcBrj-3Hl_c45dKIvmsE',
  authDomain: 'netflix-clon-d7712.firebaseapp.com',
  databaseURL: 'https://netflix-clon-d7712.firebaseio.com',
  projectId: 'netflix-clon-d7712',
  storageBucket: 'netflix-clon-d7712.appspot.com',
  messagingSenderId: '244686403588',
  appId: '1:244686403588:web:67b432fa3f76eb21a9dd51',
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);
export { firebase };
