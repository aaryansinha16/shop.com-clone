import { Box } from "@chakra-ui/react";
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
    Link,
    Flex,
    Text
  } from '@chakra-ui/react'

  import {HamburgerIcon} from "@chakra-ui/icons";
  import React from 'react'



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
  
            <DrawerBody textAlign='center'>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    )
  }

