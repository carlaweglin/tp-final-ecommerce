import { VStack } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function AppLayout({ children }) {
  return (
    <VStack>
      <Header />
      <main>
        {children}
      </main>
      <Footer/>
    </VStack>
  )
}
