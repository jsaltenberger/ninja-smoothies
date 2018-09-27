import firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAvbElchpG9OqWH78VbcEAbJp90rQ-rhZI",
    authDomain: "ninja-smoothies-1ae53.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-1ae53.firebaseio.com",
    projectId: "ninja-smoothies-1ae53",
    storageBucket: "ninja-smoothies-1ae53.appspot.com",
    messagingSenderId: "207047587401"
  };
  
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();