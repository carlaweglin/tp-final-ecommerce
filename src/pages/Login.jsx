import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export function Login() {
  return (
    <Stack alignItems="left" minW="20%" pt="70px" gap={7}>
      <Heading>Iniciar Sesion</Heading>
      <Button>Iniciar sesion con Google</Button>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" mb="15px" />
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" mb="30px" />
        <Button width="100%">Iniciar sesion</Button>
      </FormControl>
      <Link as={RouterLink} to="/register" textAlign='center'>¿No tenés cuenta? Crear cuenta</Link>
    </Stack>
  )
}
