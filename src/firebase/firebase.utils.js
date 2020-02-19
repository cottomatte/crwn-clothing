import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyBg3x7-dhuvBTowFnKzXW3J8_xma4ZjuWE',
    authDomain: 'crwn-db-9975f.firebaseapp.com',
    databaseURL: 'https://crwn-db-9975f.firebaseio.com',
    projectId: 'crwn-db-9975f',
    storageBucket: 'crwn-db-9975f.appspot.com',
    messagingSenderId: '429858235363',
    appId: '1:429858235363:web:39864a47979615a4e836d6'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
