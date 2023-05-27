import { Heading, Stack } from '@chakra-ui/react'

export function Footer() {
  return (
    <Stack w="full" textAlign="center" bg="pink" h="5vh">
      <Heading as="h5" p={5} fontSize='xl'>
        Ecommerce ADA - 2023
      </Heading>
    </Stack>
  )
}
