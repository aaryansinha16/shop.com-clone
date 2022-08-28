import {Box, Button, Heading, Spacer, Link, Text, Icon, IconButton, Image, Flex} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'

/* Auth Inports */
import React , {useEffect, useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate} from 'react-router-dom'
import { auth, sendPasswordReset, sendPasswordResetEmail } from '../../Authentication/firebase';
/* End */


export default function Reset(){


    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);


    return (
        <Flex mt='150px' p={5} w='50vh' ml='auto' mr='auto' flexDirection='column' gap='30px'>
            <Flex flexDirection='column'>
                <Heading color='mainText'>Password Reset</Heading>

                <FormControl mt='30px' >
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Type in your Email address' value={email} onChange={(e) => setEmail(e.target.value)} mt='-10px'/>
                <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <Button type='submit' onClick={() => sendPasswordReset(auth, email)}  color='white' colorScheme='blue' border='1px' borderColor='outline' w='100%' mt='30px'>
                    Send Password reset email
                </Button>

                <Text mt='10px'>Don’t have an account yet? <NavLink to='/signup'  color='lightText'> Sign up here!</NavLink> </Text>
            </Flex>
            {/* <Box border='1px solid gray' w='100%'>
                <SocialBtn/>
            </Box> */}
        </Flex>
    )
}