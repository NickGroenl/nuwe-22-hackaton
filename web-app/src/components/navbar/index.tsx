import { 
    Text, Flex, Box, Spacer, useMediaQuery, Heading
} from '@chakra-ui/react'
import { ConfigIcon, ExcludeIcon, NeoBankIcon, PersonIcon, StatsIcons } from '../../overlay/icons'

const MobileView = () => {
    return (
        <Box w='full' pl='30px' pt='48px' >
            <NeoBankIcon/>
            <Box position='absolute' w='full' left='0px' bottom='38px' pl='10px' pr='10px'>
                <Flex alignItems='flex-start' bg='#2D14C4' borderRadius='31px' pt='20px' pb='20px' pl='60px' pr='60px'>
                    <StatsIcons/>
                    <Spacer/>
                    <ExcludeIcon/>
                    <Spacer/>
                    <PersonIcon/>
                </Flex>

            </Box>
        </Box>
    )
}
const WebView = () => {
    return (
        <Box w='full' p='32px'>
            <Flex>
                <NeoBankIcon/>
                <Spacer/>
                <ConfigIcon/>
            </Flex>
        </Box>
    )
}

const Navbar = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
    return (
        
        <Box>
            {isMobile ? 
            <MobileView/>
            :
            <WebView/> 
            
        }
        {isMobile ? 
            <Box w='full' p='18px' pl='19px' pr='19px'>
                <Heading as='h6' fontSize='28px' fontWeight='500' mb='8px'>Transaction History</Heading>
                <Text fontSize='16px'>These are you monthly and daily actions.</Text>
            </Box>
        : 
            <Box w='full' p='18px' mb='24px' pl='16px' pr='16px' bg='#F5F5F5'>
                <Text>Dashboard</Text>
            </Box>
        }
        </Box>
    )
}

export default Navbar;