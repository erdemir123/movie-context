import React, { createContext, useEffect, useReducer } from 'react'
import {initialState,reducer} from "./reducer"
export const GlobalContext = createContext()

const MainContext = ({children}) => {
    const [state,dispatch]= useReducer(reducer,initialState)
    useEffect(()=>{
        localStorage.setItem("WatchList",JSON.stringify(state.watchList))
        localStorage.setItem("Watched",JSON.stringify(state.watched))
    },[state])
  return (
    <GlobalContext.Provider value={{state,dispatch}}>{children}</GlobalContext.Provider>
  )
}

export default MainContext