import { Box, Button, Checkbox, Flex, Heading, Input, useToast, VStack } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Text
  } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from 'react-router-dom'

// Auth Related
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../../Authentication/firebase";


export default function SignUp() {
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    const [lname, setLName] = useState('')
    // Desktime fireBase signup part
    const toast = useToast()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        // if (!name) alert("Please enter name");
        registerWithEmailAndPassword(fname, email, password , toast);
        // navigate('/checkout')
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/checkout");
    }, [user, loading]);



    return (
        <Box mt='200px'  w='100%' mb='100px'>
            <Box w={['95%','95%', '90%' , '60%']} m='auto' color='#202340' >
                <FormControl>
                    <Heading fontSize='28px' color='#202340'>Create an account</Heading>
                    <FormHelperText>* indicates required field.</FormHelperText>
                </FormControl>

                <Flex justify='space-between' mt='15px'>
                    <FormControl isInvalid={isError} w='45%' >
                        <FormLabel fontSize='14px'>First Name*</FormLabel>
                        <Input
                            type='text'
                            value={fname}
                            onChange={(e) => setFName(e.target.value)}
                            placeholder="First name here"
                        />
                        {!isError &&  (
                            <FormErrorMessage fontSize='14px'>First Name is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isInvalid={isError} w='45%'>
                        <FormLabel fontSize='14px'>Last Name*</FormLabel>
                        <Input
                            type='text'
                            value={lname}
                            onChange={(e) => setLName(e.target.value)}
                            placeholder="Last name here"
                        />
                        {!isError &&  (
                            <FormErrorMessage fontSize='14px'>Last Name is required.</FormErrorMessage>
                        )}
                    </FormControl>
                </Flex>
                <Flex  justify='flex-start' mt='25px'>
                    <FormControl isInvalid={isError} w='45%'>
                        <FormLabel fontSize='14px'>Email Address*</FormLabel>
                        <Input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address here"
                        />
                        {!isError &&  (
                            <FormErrorMessage fontSize='14px'>Email Address is required.</FormErrorMessage>
                        )}
                    </FormControl>
                </Flex>
                <Flex justify='space-between' mt='30px'>
                    <FormControl isInvalid={isError} w='45%'>
                        <FormLabel fontSize='14px'>Password*(Atleast 7 characters)</FormLabel>
                        <Input
                            type='Password'
                            // onChange={handleInputChange}
                            placeholder="Password here"
                        />
                        {!isError &&  (
                            <FormErrorMessage fontSize='14px'>Password is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isInvalid={isError} w='45%'>
                        <FormLabel fontSize='14px'>Confirm Password*</FormLabel>
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Confirm Password here"
                        />
                        {!isError &&  (
                            <FormErrorMessage fontSize='14px'>Confirm Password is required.</FormErrorMessage>
                        )}
                    </FormControl>
                </Flex>
                <VStack align='flex-start' mt='30px' spacing={5}>
                    <FormControl>
                        <FormLabel fontWeight='semibold' fontSize='xl'>Text Message (SMS) Alerts: (Optional)</FormLabel>
                        <Checkbox colorScheme='green'>Do you want to sign up for Shopper alerts from SHOP.COM? (Message and data rates may apply.)</Checkbox>
                    </FormControl>
                    <FormControl w='45%' >
                        <FormLabel  fontSize='14px'>Enter Mobile number</FormLabel>
                        <Input 
                            type='number'
                            placeholder="Please enter your 10 digit mobile number (ie. 9999999999)"
                        />
                    </FormControl>
                </VStack>
                
                <VStack border='1px solid #dadbe6' p={4} w='100%' align='flex-start' spacing={1} mt='30px'>
                    <FormLabel fontSize='14px'>Were you reffered by a friend</FormLabel>
                    <FormLabel fontSize='14px'>Enter their email Address(optional)</FormLabel>
                    <Input 
                        type='email'
                        placeContent="Enter friend's email address (Optional)"
                        />
                </VStack>

                <VStack w='100%' align='flex-start' spacing={0} mt='30px'>
                    <FormLabel fontSize='14px'>Email deals (Optional)</FormLabel>
                    <Checkbox defaultChecked>Do you want to sign up for sweet email offers and discounts from SHOP.COM?</Checkbox>
                    <Checkbox defaultChecked>Do you want to sign up for sweet email offers and discounts from MarketAmerica.com and its brands?</Checkbox>
                </VStack>

                <Flex w='45%' justify='flex-start' mt='25px'>
                    <FormControl>
                        <Button bg='#414467' color='white' onClick={register}>Create your new Account</Button>
                        <FormHelperText fontSize='14px'>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</FormHelperText>
                    </FormControl>
                </Flex>
                <Text mt='15px'>Already have an account? <Link to='/login'><b>Login</b></Link></Text>
            </Box>
        </Box>
    )
};
