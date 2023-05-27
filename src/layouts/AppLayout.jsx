import {Stack, VStack } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function AppLayout({ children }) {
  return (
    <VStack>
      <Header />
      <Stack h='70vh' bg='lightblue' w='100%' textAlign='center'>
        {children}
      </Stack>
      <Footer />
    </VStack>
  )
}
