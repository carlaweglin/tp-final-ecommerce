import { Box, Button, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export function Home() {
  return (
    <Stack alignItems="center" pt='50px'>
      <Box bg="rgb(242, 206, 130)" w="70%" color="white" textAlign="center">
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
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <Box bg="tomato" height="80px">Producto 1</Box>
          <Box bg="tomato" height="80px">Producto 2</Box>
          <Box bg="tomato" height="80px">Producto 3</Box>
        </SimpleGrid>
      </Box>
    </Stack>
  )
}
