import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDbUurpcKsQoO2wUtuW7ogr2WX5piTRS0Q",
    authDomain: "cryptotest-2a552.firebaseapp.com",
    projectId: "cryptotest-2a552",
    storageBucket: "cryptotest-2a552.appspot.com",
    messagingSenderId: "901410321184",
    appId: "1:901410321184:web:3b56b842d838c83645dd45"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
