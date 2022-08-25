import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MidFoot() {
    return(
        <VStack align='flex-start' pl={5} fontSize='12px' pt={3}>
            <Text>© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.</Text>
            <Text>Only Customers will receive cashback on qualifying purchases. UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases.</Text>
            <Flex gap={3}>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>Terms of Use</Link>
                <Link to='/'>Advertising Disclousure</Link>
                <Link to='/'>Return Policy</Link>
                <Link to='/'>Shipping Information</Link>
            </Flex>
        </VStack>
    )
};
