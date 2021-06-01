import { Flex, Grid, Image } from '@chakra-ui/react';
import React from 'react'

export default function Header() {
    return (
        <Flex
            bg="white"
            w="100%"
            as="header"
            mx="auto"
            px="1rem"
            h={["50px", "100px"]}
            align="center"
            justify="center"
        >
            <Grid
                w="100%"
                h="100%"
                mx="auto"
                maxW="1160px"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
            >
                <Image
                    w={["81px", "184px"]}
                    src="/Logo.svg"
                    alt="Logotipo da Worldtrip"
                    justifySelf="center"
                    gridColumn="2"
                />

            </Grid>

        </Flex>
    );
}
