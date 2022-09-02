import React, { useState } from 'react'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import {FiChevronDown} from "react-icons/fi"
import db from "../../../db"

const Menus = () => {
  let abc = db();
  let [d,setD] = useState([...abc.teams])
  return (
    <Box ml="7px" >
    <Menu >
  <MenuButton as={Button} colorScheme='gray' variant='ghost' rightIcon={<FiChevronDown/>}>
    <Text fontSize={"xl"} color="#d0d6db">Select User or Team </Text> 
  </MenuButton>
  <MenuList>
    {d.map((l)=>(
       <MenuItem> {l.teamLead}</MenuItem>
    ))}
   
    
  </MenuList>
</Menu>
    </Box>
  )
}

export default Menus
