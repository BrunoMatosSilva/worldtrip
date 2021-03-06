import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Categoria from "../components/Categoria";
import Header from "../components/Header";
import Separador from "../components/Separador";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Banner />
        <Categoria />
        <Separador />
        <Slider />
      </Flex>
    </>
  )
}
