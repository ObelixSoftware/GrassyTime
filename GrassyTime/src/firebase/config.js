import * as firebaseApp from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDg3Hg4x8OpMBTv4pHjznZ53t6-NszfpIQ",
  authDomain: "grassytime-7f60d.firebaseapp.com",
  projectId: "grassytime-7f60d",
  storageBucket: "grassytime-7f60d.appspot.com",
  messagingSenderId: "1016459272521",
  appId: "1:1016459272521:web:7b8ec12ae45ed0c351fa98",
  measurementId: "G-KKHSPWY06N"
};

const app = firebaseApp.initializeApp(firebaseConfig);

export { app };