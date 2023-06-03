import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState } from 'react'
import { auth } from '../firebase/config';

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

const [user, setUser] = useState()    
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          
          setUser(user)
        } else {
          // User is signed out
          // ...
          
        }
      });


  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
