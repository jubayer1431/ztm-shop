// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	writeBatch,
} from 'firebase/firestore';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signInWithRedirect,
	signOut,
} from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA-zX0Ox-i50cVobXl9-3pqojTM8sYN6Uo',
	authDomain: 'ztm-shop-2022.firebaseapp.com',
	projectId: 'ztm-shop-2022',
	storageBucket: 'ztm-shop-2022.appspot.com',
	messagingSenderId: '39082040520',
	appId: '1:39082040520:web:337d6ee074b729a48259fd',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
	prompt: 'select_account',
});

// getAuth() create auth instance
export const firebaseAuth = getAuth();
export const signInWithGooglePopUp = () =>
	signInWithPopup(firebaseAuth, googleAuthProvider);

export const signInWithGoogleRedirect = () =>
	signInWithRedirect(firebaseAuth, googleAuthProvider);

// Firestore configuration
export const db = getFirestore();
export const createUserDocFromAuth = async (
	userAuth,
	additionalInfoObject = {}
) => {
	if (!userAuth) return;

	// creating a document [It won't store to the firestore immediately, It just create a instance]
	const userDocRef = doc(db, 'User', userAuth.uid);

	// It will return a snapShot Object if the document exist
	const userSnapshot = await getDoc(userDocRef);

	// If Document doesn't exist try to create a new one
	if (!userSnapshot.exists()) {
		try {
			// getting some fields from Firebase Auth to store User data fields in firestore User collection
			const { displayName, email } = userAuth;
			const createdAt = new Date();

			// Storing UserDoc into Firestore. setDoc(docInstance, {data fields Object})
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfoObject,
			});
		} catch (e) {
			console.log('Error Creating User => ' + e.message);
		}
	}

	return userDocRef;
};

// Firebase Auth methods
export const createAuthUserFromEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const createSignInWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const signOutFromFirebaseAuth = async () => await signOut(firebaseAuth);

export const onAuthStateChangedObserverListener = (callback) =>
	onAuthStateChanged(firebaseAuth, callback);

// Firestore methods
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((obj) => {
		const docRef = doc(collectionRef, obj.title.toLocaleLowerCase());
		batch.set(docRef, obj);
	});

	await batch.commit();
};

export const getCategoriesAndDocs = async () => {
	// 1) get collection reference
	const collectionRef = collection(db, 'Categories');

	// 2) generate a query of this collection
	const collectionQuery = query(collectionRef);

	// 3) getting snapshots that getDocs() returns
	const querySnapshot = await getDocs(collectionQuery);

	// 4) creating and returning categories Array instead of categoriesMap object,
	// so that we can target the basic form of this data in other places of the code. we will takae care of categoriesMap object in the categoriesSelectore inside redux.
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

	// .reduce((accumulatorObject, docSnapshot) => {
	//   // title, items are keys in each docs in categories collection inside firestore
	//   const { title, items } = docSnapshot.data();
	//   accumulatorObject[title.toLowerCase()] = items;

	//   return accumulatorObject;
	// }, {});
};
