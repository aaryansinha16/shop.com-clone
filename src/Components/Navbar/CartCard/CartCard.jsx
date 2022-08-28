import { Box, CloseButton, Flex, Image, Select, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { deleteCart, getCart } from "../../../API/api";
import { AppContext } from "../../../contexts/AppContext";

export default function CartCard({
    id, 
    name,
    price,
    image
}) {

    const {handleDelete} = useContext(AppContext)

    return (
        <Flex rounded='lg' w='100%' h='100px' align='center' gap={3} bg='white'>
            <Image src='https://img.shop.com/Image/280000/289000/289093/products/1907720179__100x100__.jpg' w='20%' />
            <VStack spacing={2} align='flex-start' justify='center' w='45%'>
                <Text fontSize='lg' textAlign='left'>{name}</Text>
                <Text fontSize='sm'>16% Cashback</Text>
                <Text fontSize='xl'>${price}</Text>
            </VStack>
            <Flex w='25%' flexDir='column' align='flex-end' justifyContent='center' gap={3}>
                <CloseButton size='sm' onClick={() => handleDelete(id)}/>
                <Select placeholder='Qty'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </Select>
            </Flex>
        </Flex>
    )
};
