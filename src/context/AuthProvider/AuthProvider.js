import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const popUpGoogleLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const popUpWithGitLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
      .then(() => {})
      .catch((error) => {})
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)
    })
    return () => {
      unsubscribed()
    }
  }, [])

  const auhtInformation = {
    user,
    popUpGoogleLogin,
    logOut,
    popUpWithGitLogin,
    createUser,
    signIn,
  }

  return (
    <AuthContext.Provider value={auhtInformation}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
