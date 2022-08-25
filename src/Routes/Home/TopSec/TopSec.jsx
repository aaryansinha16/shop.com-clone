import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function TopSec() {
    return (
        <>
        <Flex align='center' gap={2} justify="center" pt='10px' pb='10px' flexDir={{base: 'column', md: 'row'}}>
            <Text fontSize='3xl' color='#545871'>
                $50,074,194
            </Text>
            <Flex align='center' gap='1'>
                <Text>awarded in</Text>
                <AiFillDollarCircle size='2xl' style={{color:'#09a79d', width:'36px'}}/>
                <Text fontSize='lg' fontWeight='semibold'>Cashback!</Text>
                <Button
                fontSize='md' 
                fontWeight='bold' 
                borderRadius='22px' 
                variant='solid' 
                bg='white' 
                border='1px solid black' 
                _hover={{bg:'#202340', color:'white'}} 
                p='3'
                >
                    Learn More
                </Button>
            </Flex>
        </Flex>
        <Image src='https://img.shop.com/Image/resources/homepage/30_Anniversary_Banner.png' w='100%'/>
        <Image
         src='https://img.shop.com/Image/homepage/shop-usa-101082-extra-cashback-hero1660162712272.jpg'
         w='100%'
         mt='20px'
         mb='20px'/>
        </>
    )
};
