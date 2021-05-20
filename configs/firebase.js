import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAKAk5WL9J8tGbNw3RgFcM8WEBGeXLtGGs",
  authDomain: "cryprocurrency-74898.firebaseapp.com",
  projectId: "cryprocurrency-74898",
  storageBucket: "cryprocurrency-74898.appspot.com",
  messagingSenderId: "194471126131",
  appId: "1:194471126131:web:1fb6875a13edc6f7517606"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
