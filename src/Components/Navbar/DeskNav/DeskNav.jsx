import { Box } from "@chakra-ui/react";
import BottomSec from "./BottomSec/BottomSec";
import TopSec from "./TopSec/TopSec";

export default function DeskNav() {
    return(
        <Box border='1px solid green' w='98%' m='auto'>
            <Box>
                <TopSec/>
            </Box>
            <Box>
                <BottomSec/>
            </Box>
        </Box>
    )
};
