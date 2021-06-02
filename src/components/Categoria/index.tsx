import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Categorias from './Categorias'

export default function Categoria() {
    return (
        <Flex direction="column">
            <Grid
                templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
                w="100%"
                justifyContent="space-between"
                align="center"
                mt={["10", "32"]}
                mx="auto"
                maxW="1160px"
                gap={[1, 5]}
            >
                <GridItem>
                    <Categorias icon="cocktail" text="vida noturna" />
                </GridItem>
                <GridItem>
                    <Categorias icon="surf" text="praia" />
                </GridItem>
                <GridItem>
                    <Categorias icon="building" text="moderno" />
                </GridItem>
                <GridItem>
                    <Categorias icon="museum" text="classico" />
                </GridItem>
                <GridItem colSpan={[2, 2, 2, 1]}>
                    <Categorias icon="earth" text="e mais..." />
                </GridItem>
            </Grid>
        </Flex>
    )
}


