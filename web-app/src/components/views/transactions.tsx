import { Box, Button, Flex, Heading, Spacer, Text, useMediaQuery} from "@chakra-ui/react"
import BarChar from "../../overlay/charts/lineChart";

const TransactionView = () =>{
    const [isMobileSmall] = useMediaQuery("(max-width: 328px)");
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        
        <>
            <Box display={!isMobileSmall ? 'flex' : 'block'}>
                <Box className='boxShadow' textAlign='center' w='full' borderRadius='10px' border='1px solid #E5E5E5'>
                    <Text color='#171725' fontWeight='700' p='24px' pb='12px' pt='12px'>Transactions</Text>
                    <Text fontWeight='800' fontSize='45px' color='#6979F8' pb='12px'>35</Text>
                    <Text fontSize='12px' color='#999999' pb='12px'>LAST MONTH</Text>
                </Box>
                <Box w='50px'/>
                <Box className='boxShadow' mt='0px' textAlign='center' w='full' borderRadius='10px' border='1px solid #E5E5E5'>
                    <Text color='#171725' fontWeight='700' p='24px' pb='12px' pt='12px'>Transactions</Text>
                    <Text fontWeight='800' fontSize='45px' color='#6979F8' pb='12px'>3</Text>
                    <Text fontSize='12px' color='#999999' pb='12px'>TODAY</Text>
                </Box>

            </Box>
            {isMobile &&
                <Box className='boxShadow' w='full' borderRadius='10px' border='1px solid #E5E5E5' mt='37px'>
                    <Heading p='16px' fontWeight='600' as='h6' fontSize='18px'>Transactions last year</Heading>
                    <Flex w='full' pt='9px' pb='30px'>
                        <Button w='50%' pb='15px' variant='ghost' color='rgba(105, 121, 248, 1)' borderBottom='5px solid rgba(105, 121, 248, 1)' borderRadius={0}>Monthly</Button>
                        <Spacer/>
                        <Button w='50%' pb='15px' variant='ghost' color='rgba(105, 121, 248, 1)'>Daily</Button>
                    </Flex>
                    <BarChar/>

                </Box>
            }
        </>
    )
}
export default TransactionView;