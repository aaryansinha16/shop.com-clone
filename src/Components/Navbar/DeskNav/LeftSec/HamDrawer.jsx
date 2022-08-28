import { Box, VStack } from "@chakra-ui/react";
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
    Heading,
    Image
  } from '@chakra-ui/react'

  import React from 'react'

  import {HamburgerIcon} from "@chakra-ui/icons";
  import {CgProfile} from 'react-icons/cg'
  import {FaTruckMoving} from 'react-icons/fa'
  import {FiRotateCcw} from 'react-icons/fi'
  import {AiFillDollarCircle} from 'react-icons/ai'
  import {BsFillPersonPlusFill} from 'react-icons/bs'
  import {QuestionOutlineIcon} from '@chakra-ui/icons'
  import { Divider } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";



  export default function HamDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


  
    return (
      <Flex >
        <Button 
          leftIcon={<HamburgerIcon color='gray.700' fontSize='25px'/>} 
          ref={btnRef} 
          onClick={onOpen} 
          variant='ghost'
          >
          <Text display={{base: 'none', xl:'block'}}>
            Categories
          </Text>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader>
                <Flex align='center' color='#202340'>
                <NavLink to='/'><Image src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg" w='50px'/></NavLink>
                    <Heading>SHOP.COM</Heading>
                </Flex>
            </DrawerHeader>
              <DrawerBody textAlign='center' p={0} mt='15px'>
                  <VStack align='flex-end' spacing={3}>
                      <Text mb='15px' pl={6} fontSize='lg' textAlign='left'>Your shop consultant is <Link to='#'><b>SHOP corporate services</b></Link></Text>

                      <Link to='/products' style={{width: '100%'}}><Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<CgProfile fontSize='22px'/>} onClick={onClose}> Clothes</Button></Link>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<FaTruckMoving fontSize='22px'/>}>Back to school</Button>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<FiRotateCcw fontSize='22px'/>}>Reorder Items</Button>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<AiFillDollarCircle fontSize='22px'/>}>Cashback programe</Button>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<QuestionOutlineIcon fontSize='22px'/>}>Help</Button>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<CgProfile fontSize='22px'/>}>My Account</Button>

                  </VStack>
                  <Divider/>
                  <VStack align='flex-end' spacing={3}>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<CgProfile fontSize='22px'/>}>List Manager</Button>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<FaTruckMoving fontSize='22px'/>}>Gift Registry</Button>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<FiRotateCcw fontSize='22px'/>}>eGifts</Button>
                      <Button variant='ghost' w='100%' justifyContent='flex-start' fontSize='14px' alignItems='center' pl={6} leftIcon={<AiFillDollarCircle fontSize='22px'/>}>Wellness Manager</Button>

                  </VStack>

              </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    )
  }

