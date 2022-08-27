import React from 'react'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import {FiChevronDown} from "react-icons/fi"

const Menus = () => {
  return (
    <Box ml="7px" >
    <Menu >
  <MenuButton as={Button} colorScheme='gray' variant='ghost' rightIcon={<FiChevronDown/>}>
    <Text fontSize={"xl"} color="#d0d6db">Select User or Team </Text> 
  </MenuButton>
  <MenuList>
    <MenuItem> Download </MenuItem>
    <MenuItem> Create a Copy </MenuItem>
    <MenuItem> Mark as Draft </MenuItem>
    <MenuItem> Delete </MenuItem>
    <MenuItem> Attend a Workshop </MenuItem>
  </MenuList>
</Menu>
    </Box>
  )
}

export default Menus
