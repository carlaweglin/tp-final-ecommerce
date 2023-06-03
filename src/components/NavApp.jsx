import { Button, HStack, Link } from '@chakra-ui/react'
import { useContext } from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export function NavApp() {
  
  const user = useContext(UserContext)


console.log(user);

  return (
    <HStack w="100%" justifyContent="center" gap={100}>
      <Link as={RouterLink} to="/">
        <Button colorScheme="blackAlpha">Inicio</Button>
      </Link>
      <Link as={RouterLink} to="/products">
        <Button colorScheme="blackAlpha">Productos</Button>
      </Link>
      <Button colorScheme="blackAlpha">Carrito</Button>
      <Link as={RouterLink} to="/login">
        <Button colorScheme="blackAlpha">{(user !== undefined) ? `Hola! ${user.email}` : 'Iniciar sesion'}</Button>
      </Link>
    </HStack>
  )
}
