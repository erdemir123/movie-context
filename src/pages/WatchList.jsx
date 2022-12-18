import React, { useContext } from 'react'
import { GlobalContext } from '../Context/MainContext';

const WatchList = () => {
  const {state,dispatch} =useContext(GlobalContext)
  const {watchList,wacthed}=state
console.log(watchList)
  return (
    <div>
      
    </div>
  )
}

export default WatchList
