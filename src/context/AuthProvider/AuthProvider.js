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
  const [loading, setLoading] = useState(true)

  const popUpGoogleLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const popUpWithGitLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
      .then(() => {})
      .catch((error) => {})
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
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
    loading,
  }

  return (
    <AuthContext.Provider value={auhtInformation}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
