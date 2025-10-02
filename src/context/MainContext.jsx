import React, { createContext, useReducer } from 'react'

export const mainContext = createContext()

const reducer = function(state,action){
    switch(action.type){
        case "LOGIN":
            return {...state, isAuth: true, userInfo:action.payload}
            case "LOGOUT":
                return{...state, isAuth:false,userInfo:null}
            default:
                return state;
    }
}
const initialState = {
    isAuth:true,
    userInfo: null,
}
 
function MainContext({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

  return <mainContext.Provider value={{state,dispatch}}>
      {children}
  </mainContext.Provider>
}

export default MainContext
