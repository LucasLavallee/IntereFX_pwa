import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUK9aumbamOfZfGojVVAA5E9AC56D7mao",
    authDomain: "interefx-appli.firebaseapp.com",
    databaseURL: "https://interefx-appli.firebaseio.com",
    projectId: "interefx-appli",
    storageBucket: "interefx-appli.appspot.com",
    messagingSenderId: "960254307063",
    appId: "1:960254307063:web:109825474f7fd676d641f2",
    measurementId: "G-2L2ECFQ96S"
};

export default firebase.initializeApp(firebaseConfig).database()