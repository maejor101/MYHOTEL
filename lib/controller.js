import { getFirestore } from 'firebase/firestore';
import { app } from './firebase';
import { collection  } from 'firebase/firestore';
 
export const firestore = getFirestore(app);

export const hotelsCollection = collection(firestore, 'Hotel');