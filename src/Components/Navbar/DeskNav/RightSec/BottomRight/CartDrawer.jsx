import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Heading, IconButton, VStack } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    HStack,
    Flex,
    Text,
    chakra
  } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
import { getCart } from "../../../../../API/api";
import { AppContext } from "../../../../../contexts/AppContext";
import CartCard from "../../../CartCard/CartCard";

export default function CartDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [test, setTest] = useState(0)
    
    const {cart,setCart} = useContext(AppContext)
    // console.log('this is drawerComp' , cart)
    
    const [cartTotal, setCartTotal] = useState(0)
    var sum = 0
    cart.map((i) => sum+= i.price)
    useEffect(() => {
        setCartTotal(sum)
    }, [sum])
    // console.log('this is total sum from drawerComp',sum)

    useEffect(() => {
        getCart().then((res) => setCart(res.data))
    }, [test])



    return(
        <Box>
            <Button leftIcon={
                <>
                    <BsFillCartFill color='gray.700' fontSize='25px'/>
                    <chakra.span
                        pos="absolute"
                        top="-1px"
                        right="-1px"
                        px={2}
                        py={1}
                        fontSize="xs"
                        fontWeight="bold"
                        lineHeight="none"
                        color="red.100"
                        transform="translate(50%,-50%)"
                        bg="red.600"
                        rounded="full"
                        >
                        {cart.length}
                        </chakra.span>
                </>
                } ref={btnRef} onClick={() => {
                onOpen()
                setTest(test+1)
                }} variant='ghost' display={{base:'none', lg: 'flex'}} placeItems='center'>Cart</Button>
            
            <IconButton display={{base:'flex',lg: 'none'}} placeItems='center'  icon={
                <>
                <BsFillCartFill color='gray.700' fontSize='25px'/>
                <chakra.span
                    pos="absolute"
                    top="-1px"
                    right="-1px"
                    px={2}
                    py={1}
                    fontSize="xs"
                    fontWeight="bold"
                    lineHeight="none"
                    color="red.100"
                    transform="translate(50%,-50%)"
                    bg="red.600"
                    rounded="full"
                    >
                    {cart.length}
                    </chakra.span>
            </>
            }   ref={btnRef} onClick={() => {
                onOpen()
                setTest(test+1)
                }}
            />


            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent bg='#F0F1F7'>
                    <DrawerCloseButton />
                    <DrawerHeader>Shopping Cart</DrawerHeader>
                    <DrawerBody textAlign='center'>
                        {
                            cart.length === 0 ? (
                                <VStack spacing={9} mt='50px'>
                                    <Heading>Your Shopping Cart is Empty!</Heading>
                                    <Text><b>Continue Shopping</b> to add items to your cart</Text>
                                    <Button
                                        fontSize='2xl' 
                                        fontWeight='bold' 
                                        borderRadius='22px' 
                                        variant='solid' 
                                        bg='white' 
                                        border='1px solid black' 
                                        _hover={{bg:'#202340', color:'white'}} 
                                        p='3'
                                        >
                                            Payment Options/Save for later
                                    </Button>
                                </VStack>
                            ) :
                            (
                                <VStack spacing={3}>
                                    <Flex mb='15px'>
                                        <Text fontSize='xl'>Cart Total: {cartTotal}$</Text>
                                    </Flex>
                                    {
                                        cart?.map((item) => (
                                            <CartCard key={item.id} {...item}/>
                                        ))
                                    }
                                    <Link to='/checkout'>
                                    <Button
                                        fontSize='2xl' 
                                        fontWeight='bold' 
                                        borderRadius='22px' 
                                        variant='solid' 
                                        bg='white' 
                                        border='1px solid black' 
                                        _hover={{bg:'#202340', color:'white'}} 
                                        p='3'
                                        >
                                            Proceed to Checkout
                                    </Button>
                                    </Link>
                                </VStack>
                            )
                        }
                        
                    </DrawerBody>
                    <DrawerFooter justifyContent='center'>
                        <Button
                            fontSize='2xl' 
                            fontWeight='bold' 
                            borderRadius='22px' 
                            variant='solid' 
                            bg='white' 
                            border='1px solid black' 
                            _hover={{bg:'#202340', color:'white'}} 
                            p='3'
                            >
                                Continue Shopping
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};
