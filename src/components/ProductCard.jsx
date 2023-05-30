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

export function ProductCard({product}) {

  const {name,image,description,price,stock} = product;

  return (
    <Card maxW="350px">
      <CardBody>
        <Image
          src={image}
          alt="producto"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text size="sm">{description}</Text>

          <Text color="blue.600" fontSize="2xl">
            ${price}
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
