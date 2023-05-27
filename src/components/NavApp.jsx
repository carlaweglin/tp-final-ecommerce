import { Button, HStack, Link } from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'

export function NavApp() {
  return (
    <HStack w="100%" justifyContent='center' gap={100}>
      <Link as={RouterLink} to="/">
      <Button colorScheme='blackAlpha'>Inicio</Button>
      </Link>
      <Link as={RouterLink} to="/products">
      <Button colorScheme='blackAlpha'>Productos</Button>
      </Link>

      <Link as={RouterLink} to="/cart">
      <Button colorScheme='blackAlpha'>Carrito</Button>
      </Link>
      <Link as={RouterLink} to="/login">
      <Button colorScheme='blackAlpha'>Iniciar Sesion</Button>
      </Link>
    </HStack>
  )
}
