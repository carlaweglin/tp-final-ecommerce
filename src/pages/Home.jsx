import { Box, Button, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'

export function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const products = await getAllProducts()
      setProducts(products)
      setLoading(false)
    }

    getData()
  }, [])

 console.log(products);

  return (
    <Stack alignItems="center" w="80%" pb="20px">
      <Box
        bg="rgb(242, 206, 130)"
        w="70%"
        color="white"
        textAlign="center"
        p="20px"
      >
        <Heading fontSize="30px">
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
          <SimpleGrid columns={[2, null, 3]} gap={10}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Stack>
  )
}
