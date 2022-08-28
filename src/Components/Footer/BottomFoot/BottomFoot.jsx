import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export default function BottomFoot() {
    return(
        <Box w={['90%','90%','80%','50%']} m='auto' mt='20px' pb={8}>
        <SimpleGrid minChildWidth='50px' placeItems='center' gap={1}>
            <Image src="https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp" w='75px'/>
            <Image src="https://www.shop.com/feo-cdn/B/L/K5pf_0c94.webp" w='75px'/>
            <Image src="https://www.shop.com/feo-cdn/m/S/eK8gl_JjY.webp" w='75px'/>
            <Image src="https://www.shop.com/feo-cdn/0/q/U9W4qM8Kw.webp" w='75px'/>
            <Image src="https://www.shop.com/feo-cdn/o/0/XUDdhleMQ.webp" w='75px'/>
            <Image src="https://www.shop.com/feo-cdn/N/z/XfD9Uvd_o.webp" w='75px'/>
            <Image src="https://www.shop.com/feo-cdn/K/F/E44Pe49Qs.webp" w='75px'/>
            <Image src="https://www.shop.com/feo-cdn/3/x/zKAs9fJ9E.webp" w='75px'/>
        </SimpleGrid>
        <Image src="https://www.thesslstore.in/content/images/digicert-basic-seal-new.svg" w='150px' m='auto' mt='40px'/>
        </Box>
    )
};
