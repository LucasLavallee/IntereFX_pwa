import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCs6tCFPnApYujxdlxklZWKGBn4rVrjhPU",
    authDomain: "supercomics-8dcad.firebaseapp.com",
    databaseURL: "https://supercomics-8dcad.firebaseio.com",
    projectId: "supercomics-8dcad",
    storageBucket: "supercomics-8dcad.appspot.com",
    messagingSenderId: "1030783718068",
    appId: "1:1030783718068:web:89cb74a842e03f68b47de1"
};

export default firebase.initializeApp(firebaseConfig).database()