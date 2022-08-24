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
import {CgProfile} from 'react-icons/cg'

export default function SignLogDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return(
        <Box>
            <Button leftIcon={<CgProfile color='gray.700' fontSize='25px'/>} ref={btnRef} onClick={onOpen} variant='ghost'>SignUp</Button>
            <Drawer
            isOpen={isOpen}
            placement='right'
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
        </Box>
    )
};
