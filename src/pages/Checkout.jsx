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
      <Flex
        color="white"
        w="full"
        h="full"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        <Stack w="100%" color="black" gap={5}>
          <Heading as="h3" size="lg">
            Información
          </Heading>
          <form>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Dirección</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Provincia</FormLabel>
              <Input type="text" />
            </FormControl>
            <Text mt={3} mb={3}>Total a pagar : $1000</Text>
            <Button width="100%" type="submit" colorScheme="green">
              Confirmar compra
            </Button>
          </form>
        </Stack>
      </Flex>
    </Container>
  )
}
