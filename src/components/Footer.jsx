import { Heading, Stack } from '@chakra-ui/react'

export function Footer() {
  return (
    <Stack w="full" textAlign="center" bg="pink" h="10vh">
      <Heading as="h2" p={5}>
        Footer
      </Heading>
    </Stack>
  )
}
