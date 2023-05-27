import {VStack, Heading, Stack } from '@chakra-ui/react'
import { NavApp } from './NavApp'

export function Header() {
  return (
    <VStack w='full' h='20vh' boxShadow='2xl' bgRepeat='no-repeat' bgPosition='center' bgSize='cover' bgImage='url("https://img.freepik.com/foto-gratis/concepto-compras-carrito-compras-minimo-sobre-fondo-naranja-representacion-3d_56104-1396.jpg?w=1380&t=st=1685217837~exp=1685218437~hmac=1f2118e8b59e2849046b86c87d4dcf4717ab2c745cc54acb7970700bdb2303c2")'>
      <Stack w='100%' textAlign='left'>
        <Heading as="h1" p={10} color='black'>
          Tienda ADA
        </Heading>
      </Stack>
      <NavApp/>
    </VStack>
  )
}
