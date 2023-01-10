import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,} from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const callContext = createContext()
const auth = getAuth(app)

const Contexting = ({ children }) => {
    const [user , setUser] = useState({})
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return (() => {
            unsubcribe()
        })
    }, [])
    const logOut = () => {
        return signOut(auth)
    }
    const value = {handleRegister,user,logOut}
    return (
        <div>
            <callContext.Provider value={value}>
                {children}
            </callContext.Provider>
        </div>
    );
};

export default Contexting;