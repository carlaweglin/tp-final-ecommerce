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
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  HStack,
} from '@chakra-ui/react'
import { BsCartCheck } from 'react-icons/bs'
import { DeleteIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { totalOrder } from '../utils/totalOrder'
import { deleteProductCart } from '../utils/deleteProductCart'

export function DrawerCart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  let products = JSON.parse(localStorage.getItem('products')) || []
  const price = totalOrder(products)
  console.log(products);
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="yellow"
        variant="ghost"
        onClick={onOpen}
      >
        <Icon boxSize={8}>
          <BsCartCheck />
        </Icon>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi Carrito</DrawerHeader>

          <DrawerBody>
            {!products.length && <Text>No hay productos en el carrito!</Text>}
            {(products.length) &&
              products.map((product) => (
                <Card key={product.id}>
                  <CardBody>
                    <HStack gap={5}>
                      <Image
                        boxSize="50px"
                        objectFit="cover"
                        src={product.image}
                        alt={product.name}
                      />
                      <Heading size='sm'>{product.name}</Heading>
                      <Button  size='sm' onClick={() => deleteProductCart(product.id)}><DeleteIcon /></Button>
                    </HStack>
                  </CardBody>
                  <Text textAlign='center'>{`${product.quantity} x $${product.price}`}</Text>
                </Card>
              ))}
          </DrawerBody>
          {products.length && (
            <>
              <DrawerFooter>
                <Heading textAlign="left">{`Total: $ ${price}`}</Heading>
              </DrawerFooter>
              <DrawerFooter>
                <Button
                  colorScheme="red"
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                >
                  Vaciar carrito
                </Button>
                <Link as={RouterLink} to="/checkout">
                  <Button colorScheme="green" onClick={onClose}>
                    Finalizar Compra
                  </Button>
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
