import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
  InputGroup,
  InputRightElement,
  Icon,
  Text,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signInUserWithEmailAndPassword } from '../services/auth'

export function Login() {
  const [loginLoader, setLoginLoader] = useState(false)
  const { register, handleSubmit, formState, reset } = useForm()
  const { errors } = formState
  const [user, setUser] = useState()
  const [error, setError] = useState()
  const toast = useToast()
  const navigate = useNavigate()

  const login = (data) => {
    const signInUser = async () => {
      setLoginLoader(true)
      try {
        const { user, errorMessage } = await signInUserWithEmailAndPassword(
          data
        )
        if (user) {
          setUser(user)
          toast({
            title: 'Sesión iniciada',
            description: 'Sesión iniciada con éxito!',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate('/')
        } else {
          setError(errorMessage)
          toast({
            title: 'Hubo un error al iniciar sesión',
            description: 'Usuario o contraseña incorrectos',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      } catch (error) {
        setError(error)
        toast({
          title: 'Intente en unos minutos',
          description: error,
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
      } finally {
        setLoginLoader(false)
        reset()
      }
    }
    signInUser()
  }

  {
    /*Seter para mostrar/ocultar contraseña*/
  }
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Stack alignItems="left" minW="20%" pt="70px" gap={7}>
      <Heading>Iniciar Sesion</Heading>
      
      <form onSubmit={handleSubmit(login)}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Ingrese su email"
            id="email"
            {...register('email', {
              required: 'Ingrese su email',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Ingrese un email valido',
              },
            })}
          />
          <Text as="i" color="red">
            {errors.email?.message}
          </Text>
          <FormLabel mt="15px">Contraseña</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? 'text' : 'password'}
              placeholder="Ingrese su contraseña"
              id="password"
              {...register('password', {
                required: 'Ingrese una contraseña',
                minLength: {
                  value: 6,
                  message: 'Mínimo de 6 caracteres',
                },
              })}
            />

            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text as="i" color="red">
            {errors.password?.message}
          </Text>
          <Button width="100%" type="submit" mt="30px">
            {loginLoader ? <Spinner size="md" /> : 'Iniciar Sesión'}
          </Button>
        </FormControl>
      </form>
      <Link as={RouterLink} to="/register" textAlign="center">
        ¿No tenés cuenta? Crear cuenta
      </Link>
      <Link as={RouterLink} to="/" textAlign="center">
        Volver al inicio
      </Link>
    </Stack>
  )
}
