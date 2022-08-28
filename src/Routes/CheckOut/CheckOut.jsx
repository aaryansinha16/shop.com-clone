import { Box, Button, Flex, Heading, HStack, Text, useToast, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Divider } from "semantic-ui-react";
import { AppContext } from "../../contexts/AppContext";

import {FaPaypal, FaCcVisa} from 'react-icons/fa'
import {SiRazorpay} from 'react-icons/si'
import CheckOutCartCard from "../../Components/Cards/CheckOutCartCard";

export default function CheckOut() {

    const {cart} = useContext(AppContext)
    // console.log("this is checkout cart" ,cart)

    const [cartTotal, setCartTotal] = useState(0)
    var sum = 0
    cart.map((i) => sum+= i.price)
    useEffect(() => {
        setCartTotal(sum)
    }, [sum])

    const toast = useToast()
    const handlePayment = (sum) => {
        setTimeout(() => {
            // alert('Payment Successfull!!')
            toast({
                title: `Payment Successfull!! of $${sum}`,
                description: "You've successfully paid the required amount.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }, 3000)
    }

    return (
        <VStack w='95%' m='auto' mt='180px' mb='100px' color='#202340'>
            <Heading textAlign='start' w='100%' mb='20px'>Your Cart</Heading>

            <Flex w='100%' justify='space-between' m='auto' >
                <VStack w='60%'>
                    {
                        cart?.map((item) => (
                            <CheckOutCartCard {...item} key={item.id}/>
                        ))
                    }
                </VStack>

                <VStack w='35%' rounded='2xl' bg='#F0F1F7' align='flex-start' p={7}>
                    <Text fontSize='3xl' fontWeight='semibold' >Order Total</Text>

                    <Box w='100%' h='1px' bg='gray.400'></Box>

                    <Flex justify='space-between' w='100%' mt='0px' fontSize='16px'>
                        <Text>SubTotal:</Text>
                        <Text fontWeight='semibold'>${cartTotal}</Text>
                    </Flex>
                    <Button
                        fontSize='md' 
                        fontWeight='bold' 
                        borderRadius='22px' 
                        variant='solid' 
                        bg='white' 
                        border='1px solid black' 
                        _hover={{bg:'#202340', color:'white'}} 
                        p='3'
                        onClick={() => handlePayment(sum)}
                        >
                            Proceed to Payments
                    </Button>
                    <Flex justify='center' w='100%'>
                        <VStack bg='white' rounded='3xl' p={6} align='center' mt='15px' spacing={3}>
                            <Text fontSize='16px'>Or checkout with :</Text>
                            <Button variant='solid' colorScheme='orange' leftIcon={<FaPaypal/>}>PayPal</Button>
                            <Button variant='solid' colorScheme='linkedin' leftIcon={<FaCcVisa/>}>Visa</Button>
                            <Button variant='solid' colorScheme='messenger' leftIcon={<SiRazorpay/>}>RazorPay</Button>
                        </VStack>
                    </Flex>


                </VStack>
            </Flex>
        </VStack>
    )
};
