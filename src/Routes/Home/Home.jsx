import {Box} from '@chakra-ui/react'
import NewProducts from './NewProducts/NewProducts'
import TopGrid from './TopSec/TopGrid'
import TopSec from './TopSec/TopSec'
import UpperMost from './UpperMost/UpperMost'

export default function Home() {
    return (
        <>
        <Box w='100%' mt='145px' display={{base: 'none', md:'block'}}>
            <UpperMost/>
        </Box>

        <Box w='100%' mt={{base: '150px', md:'0'}}>
            <TopSec/>
        </Box>

        <Box w='100%' bg='#F0F1F7' pt={4} pb={4}>
            <TopGrid/>
        </Box>

        <Box w='100%' bg='#F0F1F7' m='auto' pt={4} pb={4}>
            <NewProducts/>
        </Box>
        </>
    )
};
