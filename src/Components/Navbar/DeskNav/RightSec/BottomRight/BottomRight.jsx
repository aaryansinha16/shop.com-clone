import { Box, Button, Flex } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";
import SignLogDrawer from "./SignLogDrawer";
import {FiRotateCcw} from 'react-icons/fi'

export default function BottomRight() {
    return (
        <Flex>
            <SignLogDrawer/>

            <Button variant='ghost' leftIcon={<FiRotateCcw/>}>Orders</Button>

            <CartDrawer/>
        </Flex>
    )
};
