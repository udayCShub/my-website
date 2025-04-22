    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import { getFirestore, addDoc,collection, getDocs,getDoc,setDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
  
    const firebaseConfig = {
    apiKey: "AIzaSyAG2OBGHpuPp0J_gVRowl9auzboSVmzJWM",
    authDomain: "trying-forebase.firebaseapp.com",
    projectId: "trying-forebase",
    storageBucket: "trying-forebase.firebasestorage.app",
    messagingSenderId: "18119804797",
    appId: "1:18119804797:web:74d2047787c24055db6e14",
    measurementId: "G-ED0S4J6SLB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    const db = getFirestore();
    //let mainArray =  JSON.parse(localStorage.getItem('mainArray'))
    /*
    await setDoc(doc(db, "useru", "useru1"), {
      mainArray
    });*/
    
    const docRef = doc(db, "useru", "useru1");
    const docSnap = await getDoc(docRef);
    
    export let mainArray;
    if (docSnap.exists()) {
      const data = docSnap.data();
      mainArray = data.mainArray; // this will be the array
    }

   export async function storeInFire(){
      await setDoc(doc(db, "useru", "useru1"), {
            mainArray
        });
    }
    
