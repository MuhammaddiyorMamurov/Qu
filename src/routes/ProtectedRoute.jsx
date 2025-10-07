import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { MainContext } from '../context/MainContext'

function ProtectedRoute({children}) {
    const {state} = useContext(MainContext)

    if(!state.userInfo) return <Navigate to="/login" replace={true}/>
  return <>
    {children}
  </>
}

export default ProtectedRoute
