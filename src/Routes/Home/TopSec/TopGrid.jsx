import { Box, Flex, Grid, GridItem, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../../../API/api"

export default function TopGrid() {

    const [fourData, setFourData] = useState([])
    const [thirdBox, setThirdBox] = useState([])

    function getData(page, limit){
        getProducts(page, limit).then((res) => {
            setFourData(res.data)
            // console.log(res.data)
        })
    }

    function getSingleData(page, limit){
        getProducts(page, limit).then((res) => {
            setThirdBox(res.data)
        })
    }
    useEffect(() => {
        getData(1, 4)
        getSingleData(2, 4)
    },[])

    return (
        <SimpleGrid
         minChildWidth='200px' 
         placeItems='center' 
         gap={5} 
         w='95%' 
         m='auto'>
            
            <VStack spacing={4} w='100%' alignItems='flex-start' boxShadow='lg' p={4} bg='white'>
                <Text fontSize='20px'>Recently Viewed</Text>
                <SimpleGrid
                 gap={3} 
                 templateColumns='repeat(2, 1fr)' 
                 placeItems='center'>
                    {
                        fourData?.map((item) => (
                            <Box backgroundColor='#F0F1F7' p='2' textAlign='center' key={item.id}>
                                <Image src={item.image}/>
                                <Text> <Link to={`/singleProduct/:${item.id}`}> {item.name} </Link></Text>
                            </Box>
                        ))
                    }
                </SimpleGrid>
                <Text ><Link to='/'>Browsing History</Link></Text>
            </VStack>

            <VStack spacing={4} alignItems='flex-start' justify='space-between' boxShadow='lg' w='100%' bg='white' h='100%' p={4}>
                <Text fontSize='20px'>Your Favourite Departments</Text>
                {
                    fourData.length > 2 &&
                    (
                        <>
                    <Image src={fourData[0].image}/>
                    <Text><Link to={`/singleProduct/${fourData[0].id}`}>{fourData[0].name}</Link></Text>
                    </>)
                }
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='flex-start' bg='white'>
                <Text fontSize='20px'>Featured OneCart Stores</Text>
                <Flex flexDir='column' w='100%' align='center' gap={2}>
                {
                    thirdBox?.map((prod) => (
                        // console.log(prod)
                        <Box  w='80%' >
                        <Link to={`/singleProduct/:${prod.id}`} border='1px solid black'>
                        <Image src={prod.image} key={prod.id} h='80px' w='100%' />
                        </Link>
                        </Box>
                    ))
                }
                </Flex>
                <Text><Link to={`/products`}>See More Stores</Link></Text>
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='flex-start' bg='white'>
                <Text fontSize='20px'>Featured OneCart Stores</Text>
                <Flex flexDir='column' w='100%' align='center' gap={2}>
                {
                    thirdBox?.map((prod) => (
                        // console.log(prod)
                        <Box  w='80%' >
                        <Link to={`/singleProduct/:${prod.id}`} border='1px solid black'>
                        <Image src={prod.image} key={prod.id} h='80px' w='100%' />
                        </Link>
                        </Box>
                    ))
                }
                </Flex>
                <Text><Link to={`/products`}>See More Stores</Link></Text>
            </VStack>

        </SimpleGrid>
    )
};
