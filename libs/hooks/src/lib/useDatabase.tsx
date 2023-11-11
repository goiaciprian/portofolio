import { useFirebase } from './useFirebase';
import { Firestore, getFirestore } from 'firebase/firestore';

export const useDatabase = (): [Firestore, string] => {
  const app = useFirebase();
  const isonProd = import.meta.env.VITE_ENV === 'prod';
  return [getFirestore(app), isonProd ? 'contact-prod' : 'contact'];
};
