import React, { createContext, useEffect, useReducer, useState } from 'react'
import {initialState,reducer} from "./reducer"
export const GlobalContext = createContext()

const MainContext = ({children}) => {
    const [state,dispatch]= useReducer(reducer,initialState)
    useEffect(()=>{
        localStorage.setItem("watchList",JSON.stringify(state.watchList))
        localStorage.setItem("watched",JSON.stringify(state.watched))
    },[state])
  return (
    <GlobalContext.Provider value={{state,dispatch}}>{children}</GlobalContext.Provider>
  )
}
export default MainContext