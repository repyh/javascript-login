window.onload = async () => {
    // Initialize Firebase
    const firebaseConfig = {}; // Fill with your firebase app config
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const sessionKey = localStorage.getItem("sessionKey");
    if(sessionKey) {
        const [username, password] = atob(sessionKey).split(":");
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

        return window.location.replace("http://localhost:3000/");
    }

    const form = document.getElementById("login-form");
    form.addEventListener("submit", async e => {
        e.preventDefault();
        const username = document.getElementById("login-username");
        const password = document.getElementById("login-password");
        
        const query = await db.collection("users").doc(username.value).get();
        if(!query.exists) {
            username.value = "", password.value = "";
            return alert("Wrong username or password!");
        }

        const data = query.data();
        if(data.password !== password.value) {
            username.value = "", password.value = "";
            return alert("Wrong username or password!");
        }

        localStorage.setItem("sessionKey", btoa(`${username.value}:${password.value}`))
        return window.location.replace("http://localhost:3000/");
    })
}
