import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Separador() {
    return (
        <Flex direction="column">
            <Box
                w={["60px", "90px"]}
                mx="auto"
                h="2px"
                bg="gray.700"
                my={["9", "20"]}
            />
            <Heading
                textAlign="center"
                fontWeight="500"
                mb={["5", "14"]}
                fontSize={["lg", "3xl", "4xl"]}
            >
                <Text>
                    Vamos nessa?
                </Text>
                <Text>
                    Então escolha seu continente
                </Text>
            </Heading>
        </Flex>
    );
}