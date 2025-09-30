import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { mainContext } from '../context/MainContext'

function ProtectedRoute({children}) {
    const {state} = useContext(mainContext)

    if(!state.isAuth) return <Navigate to="/login" replace={true}/>
  return <>
    {children}
  </>
}

export default ProtectedRoute
