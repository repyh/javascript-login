# Javascript Login System

A Simple login system made using Javascript & Firebase. There are a few hard-coded variable since I also use this for my other project and I'm too lazy to change it.

## Live Demo
Check out the Live Demo at https://javascript-login-demo.herokuapp.com/login.
- Username: demo
- Password: demo

## Features
1. User will automatically redirected to login page if no credential found or wrong credential given.

## Development
1. Log Out: It's fairly easy to log out. Current logged in user's credential are stored in localStorage and encrypted, the only thing you need to do is remove the `sessionKey` from localStorage. e.g: `localStorage.removeItem("sessionKey")`.
2. Import `SessionCheck.js` for every page that you need the user to be signed in.

## TODO
- [ ] Add Sign-Up form

## How to Setup
1. Fork/Download this repository.
2. Head on over to https://firebase.google.com and make a new firebase project.
3. Follow the setup for web application and there you'll be given a javascript object.
4. Copy the object and paste it into `public/Login.js` and `public/SessionCheck.js` inside the `firebaseConfig` object.
5. Go back to firebase console and go to activate firestore by going into the firestore tab.
6. In permission pop up page, make sure you change `allow read, write: if false;` into `allow read, write: if true;` (You can google a more thorough and advance permissions).
7. Add a new collection named `users` and then add a new document.
8. Name the document `admin` and then add 2 fields, `username` and `password` field. Fill both field with `admin`.
9. Go back to the repo and go to all javascript file and change `http://localhost:300` into your website url (yes, I'm too lazy)
10. Done! You can now host the website anywhere then just go to `{website-url}/login`.

# Hosting Locally
1. Download `node.js` latest version.
2. Download the repo
3. Open Command Prompt/Terminal and then change your directory into the repo that you've downloaded.
4. Run `node .` or `node index.js`.
5. Done! Go to http://localhost:3000 to check out your website
