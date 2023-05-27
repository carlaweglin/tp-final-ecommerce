import {VStack, Heading, Stack } from '@chakra-ui/react'
import { NavApp } from './NavApp'

export function Header() {
  return (
    <VStack bg='pink' w='full' h='20vh'>
      <Stack w='100%' textAlign='center'>
        <Heading as="h1" p={10}>
          Tienda ADA
        </Heading>
      </Stack>
      <NavApp/>
    </VStack>
  )
}
