import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDflosXDSO719vFcgq9SaIBGmMiBf0qvyU",
    authDomain: "react-project-ed047.firebaseapp.com",
    projectId: "react-project-ed047",
    storageBucket: "react-project-ed047.appspot.com",
    messagingSenderId: "592837445512",
    appId: "1:592837445512:web:7a6f8257cddd278fca5c3d",
    measurementId: "G-DVM4YFMF1D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

setPersistence(auth,browserLocalPersistence)
.then(()=>{
    console.log('Auth persitance')
})
.catch(err => console.error(err))