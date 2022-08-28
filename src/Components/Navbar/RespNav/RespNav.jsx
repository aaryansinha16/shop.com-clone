import {Box, HStack, Image, Heading, Flex, Spacer, Icon, Divider, Input, IconButton, Button } from '@chakra-ui/react'
// import TopMenu from './topMenu'
import { ArrowRightIcon, SearchIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import HamDrawer from '../DeskNav/LeftSec/HamDrawer'
import MidMenu from '../DeskNav/MidSec/MidMenu'
import SignLogDrawer from '../DeskNav/RightSec/BottomRight/SignLogDrawer'
import CartDrawer from '../DeskNav/RightSec/BottomRight/CartDrawer'
import { FiRotateCcw } from 'react-icons/fi'

export default function RespNav(){
    return (
        <HStack  justify='space-between'>

            <Flex gap={5} w={['30%', '30%', '15%']} align='center'>
                <NavLink to='/'>
                    <Image src='https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg' w='30px'/>
                </NavLink>
                <Box>
                    <HamDrawer/>
                </Box>
            </Flex>

            <Flex justify="space-between" w='35%'  display={{base:'none', sm:'flex'}}>
                <Box display={{base:'none', lg:'block'}}>
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

            <Flex w={{base:'20%', lg: '30%'}} justifyContent='space-between'>
                <SignLogDrawer/>

                <Button display={{base:'none',lg:'flex'}} placeItems='center' variant='ghost' leftIcon={<FiRotateCcw/>}>Orders</Button>
                <IconButton display={{base:'flex',lg: 'none'}} placeItems='center'  icon={<FiRotateCcw color='gray.700' fontSize='18px'/>}variant='ghost' />

                <CartDrawer/>
            </Flex>
        </HStack>
    )
}