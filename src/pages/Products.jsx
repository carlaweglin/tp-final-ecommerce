import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'

export function Products() {
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

  return (
    <VStack alignItems="center" justifyContent="space-around" w="70%">
      <Stack mb="20px">
        <Heading as="h2">Productos</Heading>
      </Stack>
      <HStack w="100%">
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Categoría</FormLabel>
          <Select placeholder="Selecionar categoria">
            <option>Tecnología</option>
            <option>Hogar</option>
            <option>Electrodomesticos</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Precio</FormLabel>
          <NumberInput max={100000} min={1000}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </HStack>
      <Stack w="100%" pt="50px" alignItems="center">
        <SimpleGrid columns={[2, null, 3]} gap={12}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </SimpleGrid>
      </Stack>
    </VStack>
  )
}
