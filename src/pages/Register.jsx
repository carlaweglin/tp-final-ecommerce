import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
  Icon,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { Link as RouterLink } from 'react-router-dom'
import { registerUserWithEmailAndPassword } from '../services/auth'

export function Register() {
  const { register, handleSubmit, formState } = useForm()
  const [loginLoader,setLoginLoader] = useState(false)
  const { errors } = formState

  const login = (data) => {
    const registerUser = async () => {
        setLoginLoader(true)
        try {
          const user = await registerUserWithEmailAndPassword(data)
        } catch (error) {
          console.log("sasd");
        } finally {
            setLoginLoader(false)
        }
      }
      registerUser()
  }

  {
    /*Seter para mostrar/ocultar contraseña*/
  }
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  {
    /*Ejecutamos funcion para crear usuario*/
  }

  return (
    <Stack alignItems="left" minW="20%" pt="70px" gap={7}>
      <Heading>Crear cuenta</Heading>
      <Button>
        <Icon boxSize={8}>
          <FcGoogle />
        </Icon>
        Registrarse con Google
      </Button>
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
             {loginLoader ? "verdadero" : "falso"  }
          </Button>
        </FormControl>
      </form>
      <Link as={RouterLink} to="/login" textAlign="center">
        ¿Ya tenés cuenta? Iniciar sesión
      </Link>
    </Stack>
  )
}
