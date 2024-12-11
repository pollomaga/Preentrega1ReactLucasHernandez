import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



    const firebaseConfig = {
        apiKey: "AIzaSyC6fy8FA2vOTpHKvu6ATl6qyJpwhjVmcQs",
        authDomain: "todocamisetasbd.firebaseapp.com",
        projectId: "todocamisetasbd",
        storageBucket: "todocamisetasbd.firebasestorage.app",
        messagingSenderId: "39630563660",
        appId: "1:39630563660:web:74f0f4af2d1207491d07e9"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;
