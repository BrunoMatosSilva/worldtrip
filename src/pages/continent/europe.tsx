import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import BannerContinent from "../../components/BannerContinet";
import Cities from "../../components/Cities";
import Content from "../../components/Content";
import Header from "../../components/Header";

export default function Europe() {
    return (
        <>
            <Head>
                <title>Europa | Worldtrip</title>
            </Head>
            <Flex
                direction="column"
            >
                <Header />
                <BannerContinent />

                <Flex
                    direction="column"
                    maxW="1160px"
                    mx="auto"
                    mb="10"
                    px="1rem"
                >
                    <Content />
                    <Cities />
                </Flex>
            </Flex>
        </>
    );
}