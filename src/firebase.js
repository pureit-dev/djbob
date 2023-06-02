import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	where,
    setDoc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyD91PtgeUtLibh-9jEsbV129J4EfqlFLGk',
	authDomain: 'djbob-dbf07.firebaseapp.com',
	projectId: 'djbob-dbf07',
	storageBucket: 'djbob-dbf07.appspot.com',
	messagingSenderId: '823816073836',
	appId: '1:823816073836:web:29a0efbb4fd3d484fb9e49',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const reviewsCollectionRef = collection(db, 'reviews');

export const getReviews = async () => {
    const q = query(reviewsCollectionRef);
    const querySnapshot = await getDocs(q);
    const reviews = [];
    if (querySnapshot) {
		querySnapshot.forEach((doc) => {
			reviews.push(doc.data());
		});
	};
    return reviews;
}

export const addReview = async (review) => {
    const docRef = doc(reviewsCollectionRef);
    await setDoc(docRef, review);
}


