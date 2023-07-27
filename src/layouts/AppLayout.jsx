import {Divider, Stack, VStack } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function AppLayout({ children }) {
  return (
    <VStack >
      <Header />
      <Stack minH='70vh' w='100%' alignItems='center' pt={50} pb={20} background-size="cover" backgroundImage="https://img.freepik.com/foto-gratis/resumen-desenfoque-defocused-centro-comercial_1203-9543.jpg?w=1380&t=st=1690500336~exp=1690500936~hmac=3860ce49dccd6a1ba2f8617490da928a35a30dfe14a1cc87ffd65bb04765e717">
        {children}
      </Stack>
      <Divider />
      <Footer />
    </VStack>
  )
}
