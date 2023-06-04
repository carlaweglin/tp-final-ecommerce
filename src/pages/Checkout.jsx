import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  
  Stack,
  Text,
} from '@chakra-ui/react'

export const Checkout = () => {
  return (
    <Container w="2xl" centerContent>
      <Stack mb="100px">
        <Heading as="h2">Finalizar compra</Heading>
      </Stack>
      <Flex color="white" w="full" h='full' flexWrap={{base:'wrap',md:'nowrap'}}>
        <Center w="90%">
          <Box color="black">
            <Heading as="h3" size="lg">
              Lista de productos
            </Heading>
          </Box>
        </Center>

        <Center w="90%" >
          <Box color="black">
            <Heading as="h3" size="lg">
              Información
            </Heading>
            <FormControl >
              <FormLabel>Nombre</FormLabel>
              <Input type="text" />
              <FormLabel>Email</FormLabel>
              <Input type="text" />
              <FormLabel>Dirección</FormLabel>
              <Input type="text" />
              <FormLabel>Provincia</FormLabel>
              <Input type="text" />
              <Text>Total a pagar : $1000</Text>
              <Button width="100%" type="submit" colorScheme="green">
                Confirmar compra
              </Button>
            </FormControl>
          </Box>
        </Center>
      </Flex>
    </Container>
  )
}
