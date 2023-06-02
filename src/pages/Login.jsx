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
} from '@chakra-ui/react'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link as RouterLink } from 'react-router-dom'

export function Login() {
  {
    /*Seter para mostrar/ocultar contraseña*/
  }
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Stack alignItems="left" minW="20%" pt="70px" gap={7}>
      <Heading>Iniciar Sesion</Heading>
      <Button>
        <Icon boxSize={8}>
          <FcGoogle />
        </Icon>
        Registrarse con Google
      </Button>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" mb="15px" placeholder="Ingrese su email" />
        <FormLabel>Contraseña</FormLabel>
        <InputGroup size="md">
          <Input
            mb="30px"
            type={show ? 'text' : 'password'}
            placeholder="Ingrese su contraseña"
            id="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button width="100%">Iniciar sesion</Button>
      </FormControl>
      <Link as={RouterLink} to="/register" textAlign="center">
        ¿No tenés cuenta? Crear cuenta
      </Link>
    </Stack>
  )
}
