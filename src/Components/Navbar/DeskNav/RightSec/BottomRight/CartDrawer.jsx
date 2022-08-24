import { HamburgerIcon } from "@chakra-ui/icons";
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
import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'

export default function CartDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return(
        <Box>
            <Button leftIcon={<BsFillCartFill color='gray.700' fontSize='25px'/>} ref={btnRef} onClick={onOpen} variant='ghost'>Cart</Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
        
                    <DrawerBody textAlign='center'>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};
