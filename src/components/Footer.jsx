import {Heading, Stack } from '@chakra-ui/react'

export function Footer() {
  return (
    <>
      <Stack w="full" textAlign="center" bg="pink">
        <Heading as="h1" p={10}>
          Footer
        </Heading>
      </Stack>
     
    </>
  )
}