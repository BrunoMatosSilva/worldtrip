import { Flex, Grid, Icon, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { RiArrowLeftSLine } from 'react-icons/ri'
import React from 'react'

export default function Header() {
    const { asPath } = useRouter();
    const notHomePage = asPath !== "/"

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
                {notHomePage && (
                    <Link href="/">
                        <a>
                            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
                        </a>
                    </Link>
                )}

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
