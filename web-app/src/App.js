import { ChakraProvider, Container, Text, Box, useMediaQuery, Flex, Spacer} from '@chakra-ui/react'
import Navbar from './components/navbar/index.tsx'
import TransactionView from './components/views/transactions';
import ConversionView from './components/views/conversion';
import ExpensesView from './components/views/expenses';

import './global.css'

function App() {
  const [isMobile] = useMediaQuery("(max-width: 768px)") 
  return (
    <ChakraProvider position='fixed' maxH='100vh' maxw='100vw' height='100vh'>
      <Navbar/>
      <Box  bg={!isMobile ? '#F2F6F9' : 'white'}></Box>
        
        
        <Box pb='150px' w='full' pl='16px' pr='16px'>
          {isMobile ? 
          <>
            <TransactionView/>
            <ConversionView/>
          </>
          :
          <Flex alignItems='flex-start'>
            <Box w={{base:'30%', md: '50%', lg:'35%'}}>
              <TransactionView/>
              <ConversionView/>
            </Box>
            <Box ml='22px' w={{base:'70%', md: '50%', lg:'65%'}}>
              <ExpensesView/>
            </Box>
          </Flex>
          
        }
        </Box>

    </ChakraProvider>
  )
}

export default App