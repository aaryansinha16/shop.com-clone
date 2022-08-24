import { Box, Image, VStack } from "@chakra-ui/react";
import BottomRight from "./BottomRight/BottomRight";

export default function RightSec() {
    return(
        <VStack spacing={3} align='center' justify='center'>
            <Image src="https://www.shop.com/feo-cdn/9/r/Owin3kM4A.webp" alt='navImage' w='300px'/>
            <BottomRight/>
        </VStack>
    )
};
