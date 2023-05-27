import {Divider, Stack, VStack } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function AppLayout({ children }) {
  return (
    <VStack>
      <Header />
      <Stack minH='70vh' w='100%' alignItems='center' pt={50} pb={20}>
        {children}
      </Stack>
      <Divider />
      <Footer />
    </VStack>
  )
}
