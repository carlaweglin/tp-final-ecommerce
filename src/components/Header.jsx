import { VStack, Heading, Stack } from '@chakra-ui/react'
import { NavApp } from './NavApp'

export function Header() {
  return (
    <VStack
      justifyContent="space-around"
      w="full"
      
      boxShadow="2xl"
      
    >
      <Stack textAlign="left">
        <Heading as="h1" color="black" textAlign="center">
          Tienda ADA
        </Heading>
      </Stack>
      <NavApp />
    </VStack>
  )
}
