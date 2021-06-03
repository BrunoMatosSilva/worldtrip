import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link"

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider() {
    return (
        <Flex
            w="100%"
            h={["250px", "450px"]}
            maxW="1240px"
            mx="auto"
            mb={["5", "10"]}
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                style={{
                    width: '100%',
                    flex: '1'
                }}
            >
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url(/europa.png)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                        bgPosition="center"
                    >
                        <Link href="continent/europe" >
                            <a >
                                <Heading
                                    _hover={{
                                        color: "yellow.300"
                                    }}
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold"
                                >Europa
                                </Heading>
                                <Text
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    color="gray.300"
                                    fontWeight="bold"
                                    mt={["2", "4"]}
                                >
                                    O Continente mais antigo.
                                    </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url(/europa.png)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                        bgPosition="center"
                    >
                        <Link href="continent/europe">
                            <a>
                                <Heading
                                    _hover={{
                                        color: "yellow.300"
                                    }}
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold"
                                >Europa
                                </Heading>
                                <Text
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    color="gray.300"
                                    fontWeight="bold"
                                    mt={["2", "4"]}
                                >
                                    O Continente mais antigo.
                                    </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}