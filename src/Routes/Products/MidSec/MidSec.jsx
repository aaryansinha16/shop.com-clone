import { Box, Button, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProducts, getTotalPages } from "../../../API/api";
import PaginationComponent from "../../../Components/Pagination/PaginationComponent";
import ProductCard from "../../../Components/Cards/ProductCard";

export default function MidSec({data, page, setPage}) {
    // console.log('this is midSec', data)
    const [allData, setAllData] = useState([])

    useEffect(() => {
        getTotalPages().then((res) => setAllData(res.data))
    },[])

    const totalPages = Math.ceil(allData.length/20)


    console.log(totalPages, data.length)

    return(
        <Flex flexDir='column' >
            <SimpleGrid minChildWidth='250px' placeItems='center'>
                {
                    data.map((item) => (
                        <ProductCard {...item} key={item.id}/>
                    ))
                }
            </SimpleGrid>
            <Box m='auto' mt='20px' display={{base:'none', lg:'block'}}>
                <PaginationComponent currentPage={page} totalPages={totalPages} setPage={setPage} />
            </Box>
            <Box display={{ lg:'none'}} m='auto'>
                <Button onClick={() => setPage(page-1)}>Prev</Button>
                {page}
                <Button onClick={() => setPage(page+1)}>Next</Button>
            </Box>
        </Flex>
    )
};
