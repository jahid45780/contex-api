import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../Firebase/Firebase.config";
 
 export const AuthContext = createContext(null)
 const facebookProvider = new FacebookAuthProvider()
 const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

  const [user, setUser]= useState(null)

  const [loading, setLoading]= useState(true)

  
 
 const createUser= (email, password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword (auth, email,password)
 }
   // sing in 
 const singInUser = (email, password) =>{

    return signInWithEmailAndPassword(auth, email, password)


  }
      // google login
      const GoogleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
      }


     // login facebook
     const facebookLogin = ()=>{
        return signInWithPopup(auth, facebookProvider)
     }

    // sing out

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth) 
    }

 

 // observe auth state check
 useEffect (()=>{
  const unSubscribe=  onAuthStateChanged(auth, currentUser=>{
        console.log('current user that ', currentUser)
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
 },[])





    const authInfo = {user,createUser,singInUser,logOut, facebookLogin, GoogleLogin, loading}
        return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;

AuthProvider.propTypes  ={
    children:PropTypes.node
}
