import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import HamDrawer from "./HamDrawer";


export default function LeftSec() {
    return (
        <VStack spacing={3} align='center' justify='space-between' w='175px'>
            <Image src="https://img.shop.com/Image/resources/logos/shop-logo-us-gold.svg" />
            <HamDrawer/>
        </VStack>
    )
}
