import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import DeskNav from './Components/Navbar/DeskNav/DeskNav'
import AllRoutes from './Routes/AllRoutes'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'green')
  console.log(colorMode)

  return (
    <div className="App">
      <Box bgColor={bg}
          boxShadow="lg"
          p="1"
          position="fixed"
          width="100%"
          top='0'
          zIndex='100'
          >
            <DeskNav/>
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
