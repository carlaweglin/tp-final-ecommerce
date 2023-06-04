import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  Link,
} from '@chakra-ui/react'
import { BsCartCheck } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

export function DrawerCart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme="yellow" variant="ghost" onClick={onOpen}>
        <Icon boxSize={8}>
          <BsCartCheck />
        </Icon>
      </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Mi Carrito</DrawerHeader>
  
            <DrawerBody>
              Lista de productos
            </DrawerBody>
  
            <DrawerFooter>
              <Button colorScheme='red' variant='outline' mr={3} onClick={onClose}>
                Vaciar carrito
              </Button>
              <Link as={RouterLink} to="/checkout">
              <Button colorScheme='green' onClick={onClose}>Finalizar Compra</Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }