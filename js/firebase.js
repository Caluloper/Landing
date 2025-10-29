// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/x.y.z/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

let saveVotes = (productID) => {
    const votesRef = ref(database, 'votes');
    const newVoteRef = push(votesRef);

    return set(newVoteRef, {
        productID: productID,
        timestamp: Date.now()
    })
    .then(() => {
        return {
            status: 'true',
            message: 'Vote saved successfully'
        }
    })
    .catch((error) => {
        console.error("Error saving vote: ", error);
        return {
            status: false,
            message: "Error saving vote"
        }
    })
}

export { saveVotes };