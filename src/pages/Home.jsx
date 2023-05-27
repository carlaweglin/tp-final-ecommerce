import { Box, Button, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'

export function Home() {
  return (
    <Stack alignItems="center" w='80%' pb='20px'>
      <Box bg="rgb(242, 206, 130)" w="70%" color="white" textAlign="center" p='20px'>
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
      <Stack w="100%" alignItems='center' >
        <SimpleGrid columns={[2, null, 3]} gap={10} >
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </SimpleGrid>
      </Stack>
      </Box>
    </Stack>
  )
}
