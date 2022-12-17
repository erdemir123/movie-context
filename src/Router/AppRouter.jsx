import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MainContext from '../Context/MainContext'
import Add from '../pages/Add'
import Watched from '../pages/Watched'
import WatchList from '../pages/WatchList'

const AppRouter = () => {
  return (
    <>
    <MainContext>
    <Navbar/>
    <Routes>
        <Route index element={<WatchList/>}/>
        <Route path="Watched" element={<Watched/>}/>
        <Route path="Add" element={<Add/>}/>
    </Routes>
   </MainContext>
    </>
  )
}

export default AppRouter