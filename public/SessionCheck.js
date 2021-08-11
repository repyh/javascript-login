window.onload = async () => {
    const sessionKey = localStorage.getItem("sessionKey");
    console.log(sessionKey);
    if(!sessionKey) window.location.replace("http://localhost:3000/login");
    
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAbV0ddJS2tsm2LoSgf5i3JILwbv38sbwo",
        authDomain: "wb-pos-d4271.firebaseapp.com",
        projectId: "wb-pos-d4271",
        storageBucket: "wb-pos-d4271.appspot.com",
        messagingSenderId: "570129367737",
        appId: "1:570129367737:web:09f7b90f4f56194dd39168",
        measurementId: "G-BSGHHVV9G3"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const serializedInfo = localStorage.getItem("sessionKey");
    const [username, password] = atob(serializedInfo).split(":");

    const query = await db.collection("users").doc(username).get();
    if(!query.exists) {
        localStorage.removeItem("sessionKey");
        return window.location.replace("http://localhost:3000/login");
    }
    
    const data = query.data();
    if(data.password !== password) {
        localStorage.removeItem("sessionKey");
        return window.location.replace("http://localhost:3000/login");
    }

    return window.location.toString().startsWith("http://localhost:3000/") ? 0 : window.location.replace("http://localhost:3000/");
}