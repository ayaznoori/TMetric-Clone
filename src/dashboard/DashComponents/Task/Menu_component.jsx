import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,Select
   
  } from '@chakra-ui/react';
  import {ChevronDownIcon} from "@chakra-ui/icons"
import db from "../../../db"



const Menu_component = (props) => {
  let data = db();
  let [d,setD] = useState([...data.teams])
 
  


  return (
    <div>
      {props.name=="Select Assignee" ? (
                    <Select placeholder='Select Assignee' variant='filled' >
                    {d.map((l)=>(
                      <option value={`${l.teamLead}`}>{l.teamLead}</option>
                    ))}
                   
                  </Select>
                  ):props.name=="Project" ? (
                    <Menu  >
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' > 
                    {props.name}
                  </MenuButton>
                  
                  <MenuList>
                  
                  
                    {props.users.map((l)=>(
                      <MenuItem minH='40px' key={l.name.length}  >
                      <span >{l.name}</span>
                      </MenuItem>
                      ))}  
                     
                 
                    
                  
                    
                  </MenuList>
                </Menu>
                  ):(
                    <Menu  >
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' > 
                    {props.name}
                  </MenuButton>
                  
                  <MenuList>
                  
                  <MenuItem minH='40px'>
                      
                     <span>Simon the pensive</span>
                  </MenuItem>
                    
                  
                    
                  </MenuList>
                </Menu>
                  )}
                

    </div>
  )
}

export default Menu_component