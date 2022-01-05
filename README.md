This is a sample app to reproduce/investigate https://github.com/firebase/firebase-js-sdk/issues/5856:

> Firestore onSnapshot() will silently fail when forbidden by security rules

### Prerequisites
1. `npm install -g typescript ts-node`

### Steps
1. Edit `index.ts` with your API credentials.
2. `npm install`
3. `ts-node index.ts`
4. Press CTRL+C when done to quite.
