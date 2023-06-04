import {
  Button,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'


export function NavApp() {
  let user = useContext(UserContext)
  const [asd, setasd] = useState(false)
  const userSignOut = () => {
    setasd(!asd)
    try {
      signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <HStack w="100%" justifyContent="center" gap={100}>
      <Link as={RouterLink} to="/">
      <Text as='b'>Inicio</Text>
      </Link>
      <Link as={RouterLink} to="/products">
      <Text as='b'>Productos</Text>
      </Link>
      <Button colorScheme="blackAlpha">Carrito</Button>
      {user !== undefined ? (
        // <Button onClick={userSignOut}>{`Hola! ${user?.email}`}</Button>
        <Menu>
          <MenuButton as={Button} >
            {`Hola! ${user?.email}`}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={userSignOut}>Cerrar sesión</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link as={RouterLink} to="/login">
          <Button colorScheme="blackAlpha">Iniciar Sesión</Button>
        </Link>
      )}
    </HStack>
  )
}
