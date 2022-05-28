import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react"
import AreaCharts from "../../overlay/charts/areaChart";
import { CalendarIcon } from "../../overlay/icons";

const ExpensesView = () =>{
    return (
        <Box p='32px' w='100%' className='boxShadow' textAlign='left'  borderRadius='10px' border='1px solid #E5E5E5'>
            <Flex alignItems='flex-start'>
                <Heading mb='32px' as='h5' fontSize='24px'>Weekly expenses</Heading>
                <Spacer/>
                <Button rightIcon={<CalendarIcon/>} variant='solid' color='black' bg='rgba(229, 229, 229, 1)' padding=''>Oct - Nov 2019</Button>
            </Flex>
            <AreaCharts/>
            <Text fontSize='12px' color='rgba(156, 156, 156, 1)' mt='61px'>Total Revenue</Text>
            <Heading as='h5'>$4566.41</Heading>
            <Text fontSize='14px' fontWeight='600' color='rgba(74, 175, 5, 1)' mb='18px'>7.00%</Text>
        </Box>
    )
}
export default ExpensesView;