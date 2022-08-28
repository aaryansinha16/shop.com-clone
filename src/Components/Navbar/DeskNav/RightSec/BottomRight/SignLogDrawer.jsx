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
    Text
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {FaTruckMoving} from 'react-icons/fa'
import {FiRotateCcw} from 'react-icons/fi'
import {AiFillDollarCircle} from 'react-icons/ai'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {QuestionOutlineIcon} from '@chakra-ui/icons'
import { Divider } from "semantic-ui-react";

import {Link, useNavigate} from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../../../../Authentication/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function SignLogDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    const [user, loading] = useAuthState(auth)

    const [name, setName] = useState('')
    let navigate = useNavigate()

    // const fetchUserName = async () => {
    //     try {
    //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    //     const doc = await getDocs(q);
    //     const data = doc.docs[0].data();
    //     setName(data.name);
    //     } catch (err) {
    //     console.error(err);
    //     //   alert("An error occured while fetching user data");
    //     }
    // };
    // useEffect(() => {
    //     if (loading) return;
    //     if (!user) return navigate("/");
    //     fetchUserName();
    // }, [user, loading]);


    return(
        <Box>
            <Button display={{base:'none', lg:'flex'}} justifyContent='center' alignItems='center' leftIcon={<CgProfile color='gray.700' fontSize='20px'/>} ref={btnRef} onClick={onOpen} variant='ghost'>{user === null ? "SignUp" : "Welcome Aaryan"}</Button>

            <IconButton display={{base:'flex',lg: 'none'}} placeItems='center'  icon={<CgProfile color='gray.700' fontSize='25px'/>}
            ref={btnRef} onClick={onOpen} variant='ghost'
            />


            <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    
                    <DrawerHeader>
                        <Flex align='center' color='#202340'>
                            <CgProfile fontSize='42px'/>
                            <Heading>Account</Heading>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody textAlign='center' p={0} mt='15px'>
                        <VStack align='flex-start' spacing={3}>
                            <Text mb='15px' pl={6} fontSize='lg' textAlign='left'>Your shop consultant is <Link to='#'><b>SHOP corporate services</b></Link></Text>

                            <Link to='/login' style={{width: '100%'}}><Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<CgProfile fontSize='22px'/>} onClick={onClose}> Login</Button></Link>
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<FaTruckMoving fontSize='22px'/>}>Track Orders</Button>
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<FiRotateCcw fontSize='22px'/>}>Reorder Items</Button>
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<AiFillDollarCircle fontSize='22px'/>}>Cashback programe</Button>
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<QuestionOutlineIcon fontSize='22px'/>}>Help</Button>
                            {
                                user ? (<Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<BsFillPersonPlusFill fontSize='22px'/>} onClick={() => logout()}>Logout</Button>):
                                (<Link to='/signup' style={{width: '100%'}}><Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<BsFillPersonPlusFill fontSize='22px'/>}>Create Account</Button></Link>)
                            }
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<CgProfile fontSize='22px'/>}>My Account</Button>

                        </VStack>
                        <Divider/>
                        <VStack align='flex-start' spacing={3}>
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<CgProfile fontSize='22px'/>}>List Manager</Button>
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<FaTruckMoving fontSize='22px'/>}>Gift Registry</Button>
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<FiRotateCcw fontSize='22px'/>}>eGifts</Button>
                            <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<AiFillDollarCircle fontSize='22px'/>}>Wellness Manager</Button>

                        </VStack>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};
