import { createContext } from 'react';
import { FirebaseApp } from 'firebase/app';

export type IFirebaseContext =
  | {
      loaded: false;
    }
  | {
      loaded: true;
      app: FirebaseApp;
    };

export const FirebaseContext = createContext<IFirebaseContext>({
  loaded: false
});
