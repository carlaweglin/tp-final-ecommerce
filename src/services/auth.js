import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useState } from 'react'

export const registerUserWithEmailAndPassword = async (data) => {
  const { email, password } = data
  let user,errorMessage;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    user = userCredential.user
  } catch (error) {
    errorMessage = error.message
  }
  finally {
    const response = {user,errorMessage}
    return response
  }
}
