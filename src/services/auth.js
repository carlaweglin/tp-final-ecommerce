import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

export const registerUserWithEmailAndPassword = async (data) => {
  const { email, password } = data

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    const user = userCredential.user
    return user
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
  }
}
