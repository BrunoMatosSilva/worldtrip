import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
    return (
        <>
            <Heading fontWeight="600" fontSize={["2xl", "4xl"]} mb="10">
                Cidades + 100
        </Heading>
            <Grid
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={["20px", "45px"]}
                alignItems="center"
                justifyContent="center"
                px={["30px", "0"]}
            >
                <City paisagem={"/londres.png"} capital={"Londres"} pais={"Reino Unido"} bandeira={"/bandeirareinounido.png"} />
                <City paisagem={"/paris.png"} capital={"Franca"} pais={"Paris"} bandeira={"/bandeirafranca.png"} />
                <City paisagem={"/roma.png"} capital={"Roma"} pais={"Itália"} bandeira={"/bandeiraitalia.png"} />
                <City paisagem={"/praga.png"} capital={"Praga"} pais={"República Tcheca"} bandeira={"/bandeiratcheca.png"} />
                <City paisagem={"/amsterda.png"} capital={"Amasterda"} pais={"Holanda"} bandeira={"/bandeiraholanda.png"} />
            </Grid>
        </>
    );
}