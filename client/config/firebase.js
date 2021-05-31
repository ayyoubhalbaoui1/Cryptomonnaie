import firebase from 'firebase'
import config from '../config'

const firebaseConfig = {
    apiKey: "AIzaSyBCQk2g7uFbLHECWhFwYFW29RKbOZuRPlQ",
    authDomain: "cryptoc-3a873.firebaseapp.com",
    projectId: "cryptoc-3a873",
    storageBucket: "cryptoc-3a873.appspot.com",
    messagingSenderId: "1035788611788",
    appId: "1:1035788611788:web:090f2ffde9f4389e76d269"

}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase