import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,Tabs, TabList, TabPanels, Tab, TabPanel,Button
   
  } from '@chakra-ui/react';
  import {ChevronDownIcon} from "@chakra-ui/icons"

const Menu_component = (props) => {
  return (
    <div>
        <Menu  >
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' > 
                    {props.name}
                  </MenuButton>
                  <MenuList>
                    <MenuItem minH='48px'>
                      
                      <span>HIi</span>
                    </MenuItem>
                    <MenuItem minH='40px'>
                      
                      <span>Simon the pensive</span>
                    </MenuItem>
                  </MenuList>
                </Menu>

    </div>
  )
}

export default Menu_component