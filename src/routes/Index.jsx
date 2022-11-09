import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetailsBox from '../pages/ProductDetailsBox'
import Error from '../pages/Error'
import ProductSearch from '../pages/ProductSearch'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Account from '../pages/Account'
import { AuthContext } from '../context/AuthContext'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Routes>
      <Route index element={<Navigate replace to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetailsBox />} />
      <Route path='/search/:value' element={<ProductSearch />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={isAuth ? <Account /> : <Navigate to='/login' replace />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default RoutesIndex
