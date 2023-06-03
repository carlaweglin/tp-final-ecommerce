import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'


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


export const signInUserWithEmailAndPassword = async (data) => {
    const { email, password } = data
    let user,errorMessage;
    try {
      const userCredential = await signInWithEmailAndPassword(
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