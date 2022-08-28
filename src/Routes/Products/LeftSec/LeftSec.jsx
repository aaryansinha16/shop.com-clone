import { Box, Button, Flex } from "@chakra-ui/react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export default function LeftSec({data}) {
    return (
        <Box>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Brand
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Flex flexDir='column' gap={2} justify='center' align='flex-start' pl={6}>
                            {
                                data.slice(0,10).map((item) => (
                                    <Button fontSize='13px' color='#2e2c38' variant='link' key={item.id}>{item.brand}({item.number_of_reviews})</Button>
                                ))
                            }
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Price Range
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                        <Flex flexDir='column' gap={2} justify='center' align='flex-start' pl={6}>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>$20 & below</Button>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>$20.01 to $35</Button>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>$35.01 to $55</Button>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>$55.01 to $120</Button>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>$120.01 & above</Button>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Ratings Range
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                        <Flex flexDir='column' gap={2} justify='center' align='flex-start' pl={6}>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>1 & below</Button>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>1.1 to 2</Button>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>2.1 to 3</Button>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>3.1 to 4</Button>
                            <Button fontSize='13px' color='#2e2c38' variant='link'>4.1 & above</Button>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
};
