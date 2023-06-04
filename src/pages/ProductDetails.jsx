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
  Spinner,
} from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { getProductById } from '../services/products'
import { useEffect, useState } from 'react'
import { addProductToCart } from '../utils/addProductToCart'

export function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const product = await getProductById(id)
        product.id = id
        setProduct(product)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    
    getData()
  }, [])

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
          src={product.image}
          alt="Caffe Latte"
        />

        <Stack>
        {error && (
            <div>
              <h1>Error al mostrar los productos.</h1>
            </div>
          )}
          {loading && <Spinner size="xl" />}
          <CardBody>
            <Heading size="lg">{product.name}</Heading>

            <Text p="4">{product.description}</Text>
            <Text p="3">${product.price}</Text>
          </CardBody>

          <CardFooter gap={5}>
            <Button variant="solid" colorScheme="blue" onClick={() => addProductToCart(product)}>
              Agregar al carrito
            </Button>
            <Link as={RouterLink} to="/products">
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
