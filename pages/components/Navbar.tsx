import { Box, InputLeftElement, Grid, Flex, Input, InputGroup, Text} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import NavbarStyle from '../../styles/modules/Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <Box h='3em' bg='#1a1a1a' display={['none','none','block','block']} zIndex='-1'>
      <Flex position='relative' h='90%' justifyContent='space-between' w='100%' p='10px' bg='#f2f2f2' alignItems='center' zIndex='1'>
        <Box>Logo/Content</Box>
        <Box>About</Box>
      </Flex>
    </Box>

    <Box h='3em' bg='#1a1a1a' display={['block','block','none','none']} zIndex='-1'>
      <Flex position='relative' h='90%' p='10px' w='100%' alignItems='center' bg='#f2f2f2' justifyContent='space-between' zIndex='1'>
        <Box>Logo</Box>
        <Box>Content</Box>
        <Box>About</Box>
      </Flex>
    </Box>
  </>
  )
}

export default Navbar;