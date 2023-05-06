import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut,} from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const callContext = createContext()

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const Contexting = ({ children }) => {
    const[change ,setChange] = useState("")
    const [user , setUser] = useState({})
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleGoogleAuth =()=>{
        return signInWithPopup(auth,provider)
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
    const value = {handleRegister,user,logOut,handleGoogleAuth,change,setChange}
    return (
        <div>
            <callContext.Provider value={value}>
                {children}
            </callContext.Provider>
        </div>
    );
};

export default Contexting;