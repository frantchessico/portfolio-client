import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from './variables';

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider;