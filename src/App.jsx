import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import DeskNav from './Components/Navbar/DeskNav/DeskNav'
import RespNav from './Components/Navbar/RespNav/RespNav'
import AllRoutes from './Routes/AllRoutes'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('#f0f1f7', 'green')
  console.log(colorMode)

  return (
    <div className="App">
      <Box bgColor={bg}
          boxShadow="md"
          p="1"
          position="fixed"
          width="100%"
          top='0'
          zIndex='100'
          display={{base: 'none', xl:'block'}}
          >
            <DeskNav/>
      </Box>

      <Box w='100%' display={{xl: 'none'}} m='auto' mb='-150px' p={6} bg={bg}>
        <RespNav/>
      </Box>


      <AllRoutes/>
      {/* <Button onClick={toggleColorMode} mt='145px'>Toggle</Button> */}

      <Box w='100%'>
        <Footer/>
      </Box>
      
    </div>
  )
}

export default App
