# Javascript Login System

A Simple login system made using Javascript & Firebase. There are a few hard-coded variable since I also use this for my other project and I'm too lazy to change it.

## Features
1. User will automatically redirected to login page if no credential found or wrong credential given.

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
9. Done! You can now host the website anywhere then just go to `{website-url}/login`.
