import React, { useContext, useLayoutEffect } from 'react'
import Routes from './routes/Routes'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase.config'
import { MainContext } from './context/MainContext'

function App() {

  const {state:{isAuth}, dispatch } = useContext(MainContext)

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user })
      } else {
        dispatch({ type: "LOGOUT" })
      }
    })
  }, [dispatch])   

  return<>
   <Routes /> 
  </> 
}

export default App

