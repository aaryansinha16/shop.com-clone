import { Box, Button, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import {MdContentCopy} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {IoMdMail} from 'react-icons/io'
import {FaFacebookF, FaTwitter, FaPinterestP} from 'react-icons/fa'

export default function TopFoot() {
    return(
        <VStack pt='10px' pb='10px' pl={4} pr={4} spacing={7}>
            <Flex justify='space-between' w='100%' align='center' flexDir={{base:'column', lg:'row'}}>
                <Flex align='center' gap={6}>
                    <Text fontSize='13px' fontWeight='semibold' color='white'>Get Email Deals & Earn Cashback</Text>
                    <HStack spacing={0}>
                        <Input type='email' placeholder="Enter Email Address" size='sm' bg='whiteAlpha'/>
                        <Button fontSize='13px' size='sm'>Sign Up</Button>
                    </HStack>
                </Flex>
                <Flex align='center' gap={6}>
                    <Text fontSize='13px' fontWeight='semibold' color='white'>Link To This Page & Tell All Your Friends!</Text>
                    <Button size='sm' fontSize='13px' rightIcon={<MdContentCopy/>}>Copy Link</Button>
                </Flex>
            </Flex>

            <Flex w='100%' justify='space-between' align='center'>
                <Flex fontSize='12px' fontWeight='semibold' color='white' gap={4} flexDir={{base:'column', lg:'row'}}>
                    <Link to='/'><Text>About Us</Text></Link>
                    <Link to='/'><Text>Help</Text></Link>
                    <Link to='/'><Text>Accessibility Statement</Text></Link>
                    <Link to='/'><Text>Contact Us</Text></Link>
                    <Link to='/'><Text>Partner with Us</Text></Link>
                    <Link to='/'><Text>Services</Text></Link>
                    <Link to='/'><Text>Country/Region</Text></Link>
                    <Link to='/'><Text>Connect</Text></Link>
                    <Link to='/'><Text>Own your own SHOP site</Text></Link>
                </Flex>
                <Flex gap={3}>
                    <IoMdMail style={{color:'white'}}/>
                    <FaFacebookF style={{color:'white'}}/>
                    <FaTwitter style={{color:'white'}}/>
                    <FaPinterestP style={{color:'white'}}/>
                </Flex>
            </Flex>
        </VStack>
    )
};
