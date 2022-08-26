import { Box, Button, Flex, Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProducts } from "../../../API/api";
import ChakraCarousel from "../../../Components/Carousel/ChakraCarousel";
import capsFirst from "../../../Components/Carousel/utils/capsFirst";
import ProductCard from "../../../Components/ProductCard/ProductCard";

export default function NewProducts() {

    const [data,setData] = useState([])

    useEffect(() => {
        getProducts(2, 10).then((res) => setData(res.data))
    })

    return (
        <Box w='95%' bg='white' m='auto' pt='20px' pl={5} pr={5} borderRadius='8px'>
            <Heading mb='20px'>New Products</Heading>
            <ChakraCarousel gap={32}>
                {
                    data.slice(0,10).map((item, index) => (
                        // <Flex
                        //     key={index}
                        //     boxShadow="lg"
                        //     justifyContent="space-between"
                        //     flexDirection="column"
                        //     overflow="hidden"
                        //     color="#202340"
                        //     bg="base.d100"
                        //     flex={1}
                        //     p={5}
                        //     >
                        //     <VStack mb={6}>
                        //         <Image src="https://burst.shopifycdn.com/photos/hipster-enamel-pin-hat.jpg?width=373&format=pjpg&exif=1&iptc=1"/> 
                        //         <Text w="full" fontSize='xl' color='black' >{capsFirst(item.name)}</Text>
                        //         <Text w="full" fontSize='xl' color='black' >${item.price}</Text>
                        //     </VStack>

                        //     <Flex justifyContent="space-between">
                        //         <HStack spacing={2}>
                        //         <Tag size="sm" variant="outline" colorScheme="green">
                        //             User: {item.id}
                        //         </Tag>
                        //         <Tag size="sm" variant="outline" colorScheme="cyan">
                        //             Post: {item.id - 5}
                        //         </Tag>
                        //         </HStack>
                        //         <Button
                        //         onClick={() => alert(`Post ${item.id - 5} clicked`)}
                        //         colorScheme="green"
                        //         fontWeight="bold"
                        //         color="white"
                        //         size="sm"
                        //         >
                        //         Buy Now!
                        //         </Button>
                        //     </Flex>
                        // </Flex>
                        <ProductCard {...item}/>
                    ))
                }
            </ChakraCarousel>
        </Box>
    )
};
