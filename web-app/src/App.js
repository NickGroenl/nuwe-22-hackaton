import { ChakraProvider, Container, Text, Box, useMediaQuery, Flex, Spacer} from '@chakra-ui/react'
import Navbar from './components/navbar/index.tsx'

import './global.css'

function App() {
  const [isMobile] = useMediaQuery("(max-width: 768px)") 
  return (
    <ChakraProvider >
      <Box maxH='100vh' bg={!isMobile ? '#F2F6F9' : 'white'}></Box>
        <Navbar/>
        
        <Container w='full' pl='16px' pr='16px'>
          
              
        </Container>

    </ChakraProvider>
  )
}

export default App