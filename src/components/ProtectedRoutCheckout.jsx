import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutChechout = ({ children }) => {
  const user = useContext(UserContext)

  console.log(user);

  if (user === undefined) {
    return <Navigate to="/login" replace />
  }

  return children
}


// ver no funciona