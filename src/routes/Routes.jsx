import React, { useContext } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'
import { MainContext } from '../context/MainContext'
import SignUp from '../pages/SignUp'
import CreateQuote from '../pages/CreateQuote'

function Routes() {
    const {state} = useContext(MainContext)
    const router = createBrowserRouter([
        {
            path:"/",
            element:<ProtectedRoute>

                <MainLayout/>
            </ProtectedRoute>,

            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                path:"/create-quote",
                element:<CreateQuote/>,
                }
            ]
        },
        {
            path:"/login",
            element: state.userInfo ? <Navigate to="/" replace={true}/> : <Login/>
        },
        {
            path:"/signup",
            element: state.userInfo ? <Navigate to="/" replace={true}/> : <SignUp/>
        }
    ])
  return <RouterProvider router={router}/>
}

export default Routes
