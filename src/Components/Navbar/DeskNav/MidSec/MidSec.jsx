import { SearchIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, IconButton, Input, VStack } from "@chakra-ui/react";
import MidMenu from "./MidMenu";
import {Link} from 'react-router-dom'

export default function MidSec() {
    return(
        <VStack spacing={3} align='center' justify='space-between'>
            <Flex justify="space-between" w='100%' border='1px solid black'>
                <Box>
                    <MidMenu/>
                </Box>
                <Divider orientation='vertical' w='20px' h='35px' m='auto'/>
                <Input placeholder="Search SHOP.COM..." size='sm' h='50px' p={3} border='none' focusBorderColor="none"/>
                <IconButton
                    borderRadius='0px 0px 0px 0px'
                    bg='black'
                    aria-label='Search database'
                    icon={<SearchIcon color='white'/>}
                    h='50px'
                    _hover={{background: 'black.100'}}
                />
            </Flex> 
            <Flex gap={5} >
                <Box >
                    <Link to='/'>Exclusive Brands</Link>
                </Box>
                <Box>
                    <Link  to='/'>Stores</Link>
                </Box>
                <Box>
                    <Link to='/' >Deals</Link>
                </Box>
                <Box>
                    <Link  to='/'>SHOP travel</Link>
                </Box>
                <Box>
                    <Link  to='/'>Departments</Link>
                </Box>
                <Box>
                    <Link  to='/'>ShopBuddy</Link>
                </Box>
                <Box>
                    <Link  to='/'>SHOP Local</Link>
                </Box>
            </Flex>
        </VStack>
    )
};
