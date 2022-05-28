import { Box, Flex, Text} from "@chakra-ui/react"

const ConversionView = () =>{
    return (
        <Flex>
            <Box className='boxShadow' textAlign='center' w='full' borderRadius='10px' border='1px solid #E5E5E5'>
                <Text color='#171725' fontWeight='700' p='24px' pb='12px' pt='12px'>Transactions</Text>
                <Text fontWeight='800' fontSize='45px' color='#6979F8' pb='12px'>35</Text>
                <Text fontSize='12px' color='#999999' pb='12px'>LAST MONTH</Text>
            </Box>
            <Box w='50px'/>
            <Box className='boxShadow' textAlign='center' w='full' borderRadius='10px' border='1px solid #E5E5E5'>
                <Text color='#171725' fontWeight='700' p='24px' pb='12px' pt='12px'>Transactions</Text>
                <Text fontWeight='800' fontSize='45px' color='#6979F8' pb='12px'>3</Text>
                <Text fontSize='12px' color='#999999' pb='12px'>TODAY</Text>
            </Box>

        </Flex>
    )
}
export default ConversionView;