import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";

/*
NOTE: Set security rules to the following:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/

const firebaseConfig = {
// insert your config here
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

const ref = doc(firestore, 'foo/id');

// Uncomment this to contrast the behavior with getDoc().
/*
getDoc(ref)
  .then(snapshot => { console.log('getDoc() returned snapshot:', snapshot); })
  .catch(e => { console.error('getDoc() failed:', e); });
*/

const unsubscribe = onSnapshot(ref,
  (snapshot) => {
    console.log('Snapshot received:', snapshot);
  },
  error => {
    console.error('onSnapshot error:', error);
  }
);
