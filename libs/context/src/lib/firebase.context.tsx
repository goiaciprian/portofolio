import React, { createContext } from 'react';
import { FirebaseApp } from 'firebase/app';
import { useFirebase } from '@hooks';

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

export function withFirebase(Component: React.FC) {
  return function Comp(props: any) {
    const app = useFirebase();
    console.log('asdasd');
    return (
      <FirebaseContext.Provider value={{ loaded: true, app }}>
        <Component {...props} />
      </FirebaseContext.Provider>
    );
  };
}
