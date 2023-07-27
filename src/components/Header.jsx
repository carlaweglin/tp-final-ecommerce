import { VStack, Heading, Stack } from '@chakra-ui/react'
import { NavApp } from './NavApp'

export function Header() {
  return (
    <VStack justifyContent="space-around" w="full" boxShadow="2xl" >
      <Stack bg="black" color="white" w="full" textAlign="center" ><div> 🚚Envio gratis | ⚡Retiros en 24hs | 💳Hasta 12 cuotas sin interés</div></Stack>
      <Stack textAlign="left" mb="20px">
        <Heading as="h1" color="black" textAlign="center" p="20px">
          Tienda ADA
        </Heading>
      </Stack>
      <NavApp />
    </VStack>
  )
}
