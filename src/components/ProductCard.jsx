import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export function ProductCard(product) {

  console.log(product.name);
  return (
    <Card maxW="350px">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="producto"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>

          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link as={RouterLink} to="/productDetails">
            <Button variant="solid" colorScheme="blue">
              Ver detalles
            </Button>
          </Link>
          <Link as={RouterLink} to="/cart">
            <Button variant="ghost" colorScheme="blue">
              Agregar al carrito
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
