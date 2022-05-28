import { Box, Button, Flex, Heading, Spacer, Text, useMediaQuery} from "@chakra-ui/react"
import BarChart from "../../overlay/charts/barChart";
import BarChar from "../../overlay/charts/lineChart";

const ConversionView = () =>{
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (
        <>
        {!isMobile && 
            <Box w='100%' className='boxShadow' textAlign='left'  borderRadius='10px' border='1px solid #E5E5E5' mt={{base: '37px', lg:'15px'}}>
                <Flex p='32px'>
                    <Heading as='h5' fontSize='24px'>Conversion</Heading>
                    <Spacer/>
                    <Button variant='outline' color='gray.800'>...</Button>
                </Flex>
                <BarChart/>
                <Flex p='24px' pt='10px'>
                    <Flex alignItems='flex-start'>
                        <Box borderRadius='100%' bg='#007AFF' width='8px' height='8px'></Box>
                        <Text color='#9C9C9C' fontSize='12px' ml='16px'> Screens</Text>
                    </Flex>
                    <Spacer/>
                    <Flex alignItems='flex-start'>
                        <Box borderRadius='100%' bg='#FB8832' width='8px' height='8px'></Box>
                        <Text color='#9C9C9C' fontSize='12px' ml='16px'> PC</Text>
                    </Flex>
                    <Spacer/>
                    <Flex alignItems='flex-start'>
                        <Box borderRadius='100%' bg='#9B51E0' width='8px' height='8px'></Box>
                        <Text color='#9C9C9C' fontSize='12px' ml='16px'> Phones</Text>
                    </Flex>
                    <Spacer/>
                    <Flex alignItems='flex-start'>
                        <Box borderRadius='100%' bg='#E6E5E6' width='8px' height='8px'></Box>
                        <Text color='#9C9C9C' fontSize='12px' ml='16px'> Other</Text>
                    </Flex>
                    
                </Flex>

            </Box>
        }
        </>
    )
}
export default ConversionView;