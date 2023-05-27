import {
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export function ProductDetails() {
  return (
    <HStack w="80%" justifyContent="center" pt="5%">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px', lg: '400px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="lg">Nombre Producto</Heading>

            <Text p="4">Descripción</Text>
            <Text p="3">Precio</Text>
          </CardBody>

          <CardFooter gap={5}>
            <Button variant="solid" colorScheme="blue">
              Agregar al carrito
            </Button>
            <Link as={RouterLink} to="/">
              <Button variant="solid" colorScheme="blue">
                Volver atrás
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </HStack>
  )
}
