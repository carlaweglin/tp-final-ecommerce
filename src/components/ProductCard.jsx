import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useToast,
} from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'
import { addProductToCart } from '../utils/addProductToCart'

export function ProductCard({ product }) {
  const toast = useToast()
  const { name, image, description, price, id } = product

  return (
    <Card maxW="350px">
      <CardBody>
        <Image src={image} alt="producto" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text size="sm">{description}</Text>

          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup flexWrap="wrap" spacing="3">
          <Link as={RouterLink} to={`/products/${id}`}>
            <Button variant="solid" colorScheme="blue">
              Ver detalles
            </Button>
          </Link>

          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => {
              addProductToCart(product)
              toast({
                title: 'Producto agregado',
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            }}
          >
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
