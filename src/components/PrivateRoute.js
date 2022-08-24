import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { useGlobalContext } from '../context/AuthContext'
const PrivateRoute = () => {
  const {isLogin, user} = useGlobalContext()
  return user ? <Outlet  /> : <Navigate to="login"/>
}

export default PrivateRoute