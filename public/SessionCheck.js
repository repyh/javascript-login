window.onload = async () => {
    const sessionKey = localStorage.getItem("sessionKey");
    console.log(sessionKey);
    if(!sessionKey) window.location.replace("http://localhost:3000/login");
    
    // Initialize Firebase
    const firebaseConfig = {}; // Fill with your firebase app config
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
