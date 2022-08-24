import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import {AiFillDollarCircle} from 'react-icons/ai'

export default function UpperMost() {
    return(
        <Flex justifyContent='space-between' align='center' fontSize='12px' bg="#f0f1f7" p={2}>
            <Box>
                <Text>Your Shop Consultant is <Link to='/'>SHOP Corporate Services.</Link></Text>
            </Box>
            <Flex align='center' gap={2}>
                <Text>
                    Earn up to <b>50%</b>
                </Text>
                <AiFillDollarCircle size='2xl' style={{color:'#09a79d', width:'20px'}}/>
                <Text>
                    <b>Cashback</b> on eligible purchases. <Link to='/'><b>Learn More</b></Link>
                </Text>
            </Flex>
        </Flex>
    )
};
