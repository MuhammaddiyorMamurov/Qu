import React, { createContext, useReducer } from 'react'

// Context obyekt
export const MainContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuth: true, userInfo: action.payload }
    case "LOGOUT":
      return { ...state, isAuth: false, userInfo: null }
    case "LIKED":
      return { ...state,likedQuotes: action.payload}
    default:
      return state
  }
}

const initialState = {
  isAuth: true,
  userInfo: null,
  likedQuotes:JSON.parse(localStorage.getItem("liked-quotes") || []),
}

// Provider komponent
function MainProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider

