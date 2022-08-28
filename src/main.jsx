import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import AppContextProviderComponent from './contexts/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <AppContextProviderComponent>
    <App />
    </AppContextProviderComponent>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
