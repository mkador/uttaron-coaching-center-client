import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const popUpGoogleLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribed()
    }
  }, [])

  const auhtInformation = { user, popUpGoogleLogin }

  return (
    <AuthContext.Provider value={auhtInformation}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
