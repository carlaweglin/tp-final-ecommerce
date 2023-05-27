import { Button, Image, Link, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export function Error404() {
  return (
    <Stack alignItems="center" h='100%' justifyContent='center'>
      <Image
        boxSize="400px"
        src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=826&t=st=1685218421~exp=1685219021~hmac=736eeafb46375e17ad2262b9a997aa2cb3c359269b8156afc8ff0fb8a4090c06"
        alt="Error 404"
      />
      <Link as={RouterLink} to="/">
      <Button colorScheme='red'>Volver al inicio</Button>
      </Link>
    </Stack>
  )
}
