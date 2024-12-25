import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.init";
import axios from "axios";




export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const signInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
   }

   const signInGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, provider);
   }

   const signOutUser = ()=>{
    return signOut(auth);
   }


   const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile)
   }


   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('state change', currentUser);
        setUser(currentUser);
        if(currentUser?.email){
            const user = {email: currentUser.email};
            axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user,{
                withCredentials: true
            })
            .then(res =>{
                console.log(res.data);
                setLoading(false);
            })
        }
        else{
            axios.post(`${import.meta.env.VITE_API_URL}/logout`,{}, {
                withCredentials: true
            })
            .then(res =>{
                console.log(res.data);
                setLoading(false);
            })
        }
    })
    return ()=>{
        unsubscribe();
    }
   },[])
   
   
   
   
    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        signInGoogle,
        signOutUser,
        updateUserProfile
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;