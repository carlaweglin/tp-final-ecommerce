import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'

export function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const products = await getAllProducts()
        setProducts(products)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <VStack alignItems="center" pb="20px" w="100%" >
      <Box
        bg="#FFFAF0"
        w="70%"
        color="white"
        textAlign="center"
        p="20px"
      
      >
        <Heading fontSize="30px" color="black">
          Proyecto final ADAITW, un ecommerce para aprender y aplicar
          tecnologías web.
        </Heading>
        <Button mt="20px" bg="white" variant="solid" color="black">
          <a href="https://adaitw.org/" target="_blank">
            Ver más
          </a>
        </Button>
      </Box>
      <Box p={5} w="70%" textAlign="left">
        <Text fontSize="3xl">Recientes</Text>
      </Box>
      <Box w="70%">
        <Stack w="100%" alignItems="center">
          {error && (
            <div>
              <h1>Error al mostrar los productos.</h1>
            </div>
          )}
          {!loading && !products.length && (
            <div>
              <h1>No hay productos para mostrar.</h1>
            </div>
          )}
          {loading && <Spinner size="xl" />}
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </VStack>
  )
}
