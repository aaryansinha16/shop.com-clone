import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import DeskNav from './Components/Navbar/DeskNav/DeskNav'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'green')
  console.log(colorMode)

  return (
    <div className="App">
      <Button onClick={toggleColorMode}>Toggle</Button>

        <Box borderTop="4px solid #4EA819"
            // bgColor={bg}
            boxShadow="lg"
            p="1"
            // position="fixed"
            width="100%"
            // top='0'
            // zIndex='100'
            >
              <DeskNav/>
        </Box>
      
    </div>
  )
}

export default App
