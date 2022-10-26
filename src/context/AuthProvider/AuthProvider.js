import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  onAuthStateChanged,
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

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
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

  const auhtInformation = { user, popUpGoogleLogin, logOut, popUpWithGitLogin }

  return (
    <AuthContext.Provider value={auhtInformation}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
