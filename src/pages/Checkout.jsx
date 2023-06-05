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
  useToast,
} from '@chakra-ui/react'
import { totalOrder } from '../utils/totalOrder'
import { useForm } from 'react-hook-form'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { addOrder } from '../services/products'

export const Checkout = () => {
  let user = useContext(UserContext)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const toast = useToast()

  let products = JSON.parse(localStorage.getItem('products'))
  let price = totalOrder(products)


  const info = (data) => {
    const registerInfo = () => {
      const request = {
        customer:data,
        products:products,
        total:price
      }
      addOrder(request)
      localStorage.removeItem("products");
      toast({
        title: 'Gracias por tu compra!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
    registerInfo()
    navigate('/')
  }

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
          <form onSubmit={handleSubmit(info)}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                placeholder="Ingrese nombre"
                id="name"
                {...register('name')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="text" id="email" {...register('email')} placeholder={`${user.email}`} />
            </FormControl>
            <FormControl>
              <FormLabel>Dirección</FormLabel>
              <Input
                type="text"
                placeholder="Ingrese su dirección"
                id="address"
                {...register('address')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Provincia</FormLabel>
              <Input
                type="text"
                placeholder="Ingrese su provincia"
                id="province"
                {...register('province')}
              />
            </FormControl>
            <Text mt={3} mb={3}>
              Total a pagar : ${price}
            </Text>
            <Button width="100%" type="submit" colorScheme="green">
              Confirmar compra
            </Button>
          </form>
        </Stack>
      </Flex>
    </Container>
  )
}
