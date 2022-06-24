import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAoS4hjZ_5-uRCeTmaIixVDZ4N1WdXWKWU',
	authDomain: 'crwnstore-9929c.firebaseapp.com',
	projectId: 'crwnstore-9929c',
	storageBucket: 'crwnstore-9929c.appspot.com',
	messagingSenderId: '968490671738',
	appId: '1:968490671738:web:c189b7ec7c480d0ec265c3',
	measurementId: 'G-R481WPLNJS',
};

const app = initializeApp(firebaseConfig);
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, provider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('done');
};

export const getCathegoriesAndDocuments = async () => {
	const collectionRef = collection(db,'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);

	const categoriesMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
		const {title,items}= docSnapshot.data();
		acc[title.toLowerCase()]=items;
		return acc;
	},{});

	return categoriesMap;
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation //   <----------------------  a pus defaul ={ }
) => {
	const userDocRef = doc(db, 'users', userAuth.uid); //give me the document reference inside  the db database under the users collection with this uid
	const userSnapshot = await getDoc(userDocRef);
	if (!userSnapshot.exists()) {
		//daca NU exista in baza de date !
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			}); //il introducem !! + toate additional informations care vin din signup form
		} catch (error) {
			console.log('Error registering user ', error.message);
		}
	}
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
