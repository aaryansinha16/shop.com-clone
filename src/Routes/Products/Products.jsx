import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Flex, HStack, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProducts } from "../../API/api";
import LeftSec from "./LeftSec/LeftSec";
import MidSec from "./MidSec/MidSec";
import RightSec from "./RightSec/RightSec";

export default function Products() {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("ASC")

    useEffect(() => {
        // console.log('this is filter' , filter)
        getProducts(page, 20, filter).then((res) => setData(res.data))
    }, [page, filter])

    return(
        <Box
            mt='160px'
            w='100%'
        >
            <Flex justify='flex-start' w='96%' m='auto' fontSize='12px' color='#6c6d70'>
                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>SHOP.COM</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='/products'>Rc-Toys</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
            </Flex>

            <Divider/>

            <Flex justify='flex-start' w='96%' m='auto' align='center' pt={2} pb={2} fontSize='14px'>
                <HStack w='20%' align='center'>
                    <Text >Sort:</Text>
                    <Select placeholder="Best Match" variant='outline'  fontWeight='semibold' color='#202340' w='150px' onChange={(e) => setFilter(e.target.value)}>
                        <option value='DESC'>High to Low</option>
                        <option value='ASC'>Low to High</option>
                    </Select>
                </HStack>
                <Text w='80%'>You searched <b>rc toys</b>: 6,523 product results</Text>
                
            </Flex>
            
            <Divider borderColor='gray.400'/>

            <Flex mt='30px' mb='30px'  >
                <Box w='15%' borderRight='1px solid' borderColor='gray.300'>
                    <LeftSec data={data}/>
                </Box>

                <Box w={{base:'80%', xl:'65%'}} >
                    <MidSec data={data} page={page} setPage={setPage}/>
                </Box>

                <Box w='15%' display={{base: 'none', xl:'block'}}>
                    <RightSec/>
                </Box>
            </Flex>

        </Box>
    )
};
