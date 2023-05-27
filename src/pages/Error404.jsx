import { Image, Stack } from '@chakra-ui/react'

export function Error404() {
  return (
    <Stack alignItems="center" h='100%'>
      <Image
        boxSize="500px"
        src="https://img.freepik.com/vector-gratis/error-404-perdido-ilustracion-concepto-espacio_114360-7901.jpg?w=740&t=st=1685214863~exp=1685215463~hmac=18b43dd7d91de39621ab39493593afcd4f85d173cdd0c203fec5fe73729716f1"
        alt="Error 404"
      />
    </Stack>
  )
}
