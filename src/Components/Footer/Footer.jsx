import { Box, Divider, VStack } from '@chakra-ui/react'
import BottomFoot from './BottomFoot/BottomFoot'
import MidFoot from './MidFoot/MidFoot'
import TopFoot from './TopFoot/TopFoot'

export default function Footer() {
    return(
        <VStack spacing={0}>
            <Box w='100%' bg='#545871'>
                <TopFoot/>
            </Box>
            <Box w='100%' bg='#f0f1f7'>
                <Box w='100%'>
                    <MidFoot/>
                </Box>
                <Divider borderColor='blackAlpha.400' mt='10px'/>
                <Box w='100%'>
                    <BottomFoot/>
                </Box>
            </Box>
        </VStack>
    )
};
