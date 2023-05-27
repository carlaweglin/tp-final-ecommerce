import {HStack, Heading, Stack } from '@chakra-ui/react'
import { NavApp } from './NavApp'

export function Header() {
  return (
    <HStack bg='pink' w='full' h='10vh'>
      <Stack w='100%' textAlign='center'>
        <Heading as="h1" p={10}>
          Tienda ADA
        </Heading>
      </Stack>
      <NavApp/>
    </HStack>
  )
}
