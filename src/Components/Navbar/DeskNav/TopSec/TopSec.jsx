import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, IconButton, Image, Input, Text } from "@chakra-ui/react";


function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

export default function TopSec() {
    return (
        <HStack spacing={8} border='1px solid red' align='center' justify='space-between'>

            <Image src="https://img.shop.com/Image/resources/logos/shop-logo-us-gold.svg" w='175px'/>

            <HStack>
                <Flex>
                    <Input placeholder="Search SHOP.COM..." size='md' h='50px' p='2'/>
                    <IconButton
                        colorScheme='blue'
                        aria-label='Search database'
                        icon={<SearchIcon />}
                        h='50px'
                    />
                    <Image src="https://www.shop.com/feo-cdn/9/r/Owin3kM4A.webp" alt='navImage' w='300px'/>
                </Flex>
                
            </HStack>
        </HStack>
    )
}
