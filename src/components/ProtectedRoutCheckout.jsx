import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutCheckout =  ({ children }) => {
  let user = useContext(UserContext)

 

  

  if (user !== "pending") {
      if (user === undefined) {
        return <Navigate to="/login" replace />
      }
  }



  return children
}


// ver no funciona