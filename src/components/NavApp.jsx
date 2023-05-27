import { HStack, Link } from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'

export function NavApp() {
  return (
    <HStack w="100%" justifyContent='center' gap={100}>
      <Link as={RouterLink} to="/">
        Inicio
      </Link>
      <Link as={RouterLink} to="/products">
        Productos
      </Link>

      <Link as={RouterLink} to="/cart">
        Carrito
      </Link>
      <Link as={RouterLink} to="/login">
        Iniciar Sesion
      </Link>
    </HStack>
  )
}
