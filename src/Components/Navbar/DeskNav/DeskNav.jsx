import { Box, Flex } from "@chakra-ui/react";
import LeftSec from "./LeftSec/LeftSec";
import MidSec from "./MidSec/MidSec";
import RightSec from "./RightSec/RightSec";

export default function DeskNav() {
    return(
        <Flex w='98%' m='auto' justifyContent='space-between' pt='15px' pb='15px'>
            <Box>
                <LeftSec/>
            </Box>
            <Box>
                <MidSec/>
            </Box>
            <Box >
                <RightSec/>
            </Box>
        </Flex>
    )
};
