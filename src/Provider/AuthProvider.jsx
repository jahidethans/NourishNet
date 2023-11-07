import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Config/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    
    // google login
    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // password sign up
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // password sign in
    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user
    const handleUpdateProfile = (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:photo
        })
    }

    // signout
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

// using observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
          if(user){
              setUser(user);
            }
            setLoading(false);
        });
    },[]);
  
    



    const authentications = {
        loading,
        googleLogin,
        createUser,
        loginUser,
        logOut,
        user,
        handleUpdateProfile
    }

    return (
        <AuthContext.Provider value={authentications}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;