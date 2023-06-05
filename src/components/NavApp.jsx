import {
  Button,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'
import { DrawerCart } from './DrawerCart'

export function NavApp() {
  let user = useContext(UserContext)

  const userSignOut = () => {
    try {
      signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HStack
      w="100%"
      justifyContent="center"
      gap={10}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
    >
      <Link as={RouterLink} to="/">
        <Button colorScheme="yellow" variant="ghost">
          Inicio
        </Button>
      </Link>
      <Link as={RouterLink} to="/products">
        <Button colorScheme="yellow" variant="ghost">
          Productos
        </Button>
      </Link>
      <DrawerCart/>
      {user !== undefined ? (
        <Menu>
          <MenuButton as={Button} colorScheme="yellow" variant="ghost">
            Mi cuenta
          </MenuButton>
          <MenuList>
            <MenuItem onClick={userSignOut}>Cerrar sesión</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link as={RouterLink} to="/login">
          <Button colorScheme="yellow" variant="ghost">Iniciar Sesión</Button>
        </Link>
      )}
    </HStack>
  )
}
