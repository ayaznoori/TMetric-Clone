import React,{useEffect,useRef} from 'react'
import { Button, Stack ,HStack} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Tabs, TabList, TabPanels, Tab, TabPanel,Input,Image
 
} from '@chakra-ui/react';

import {ChevronDownIcon,SearchIcon,Icon} from "@chakra-ui/icons"
import Menu_component from './Menu_component';
let menu=["Client","Project","Status","Create","Souce"]

const Task = () => {



  return (
    <div w='80%' >
        <Stack>
            <HStack>
                <h1 style={{fontSize:"900", fontWeight:"bold",letterSpacing:"1px"}} >My Tasks |</h1>
                <Menu_component style='none' name={"Select Assignee"} />
                
            </HStack>
            <HStack>
              {menu.map((l)=>(
                <Menu_component key={`${l}`} name={l} />
              ))}
            </HStack>
        </Stack>

        <Stack w='100%' h='500px' mt='20px' borderRadius={"10px"}   boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' >
          <HStack justifyContent={'space-between'} alignItems={'center'} h='70px' pl='5px' borderRadius={"10px"}  boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' >
            
            <HStack  >
              <Button  bg='blue' color='white' ><i class="fa-solid fa-plus"></i> &nbsp; New Tak</Button>
              <Menu_component name='Sort :Project' />
            </HStack>
            <Stack>
              <Input></Input>
            </Stack>
          </HStack>
          <HStack >
            <Stack w='50%' h='100%' border='1px solid'  >
              
            </Stack>
            <Stack  w='50%' h='100%' border='1px solid red' >
              <HStack display={'flex'} justifyContent='space-between' >
                <HStack pl='5px' >
                  <span><Image src='https://previews.123rf.com/images/elnurss/elnurss1809/elnurss180903233/109840299-play-button-vector-icon.jpg?fj=1' w='50px' h='50px' /></span>
                  <Button><i class="fa-solid fa-check"></i> &nbsp; Mark as completed</Button>
                </HStack>
                <HStack gap='5px' m='2px' >
                  <span><Image src='https://icon-library.com/images/more-icon/more-icon-25.jpg' w='30px' h='30px' /></span>
                  <span><Image src='https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/arrow-right-33.png' w='30px' h='30px' /></span>
                </HStack>
              </HStack>
              <Stack><Input placeholder='Write a Task Name' /></Stack>
              <HStack>
                <h3>Projects</h3>
                <HStack pl='25px' >
                  <Image w='10px' h='10px' src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/folder.png' /> 
                  <p>No Projects</p>
                </HStack> 

              </HStack>
              <HStack gap='25px' >
                <p>Assignee</p>
                <h4>Shashank Kumar</h4>
              </HStack>
              <HStack>
                <h4>Due Date</h4>
                <HStack pl='25px' >
                  <Image src='https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg' w='20px' h='20px' />
                  <h4>None</h4>
                </HStack>
              </HStack>
               <Stack><Input placeholder='Enter task Description' /></Stack>
              <HStack>
                <h4>Estimate</h4>
                <HStack pl='25px' >
                  <Image src='https://img.freepik.com/premium-vector/black-white-vector-illustration-vintage-analog-clock_97886-1.jpg?w=2000' w='20px' h='20px' />
                  <p>None</p>
                </HStack>
              </HStack>
              <HStack>
              <Image src='https://static.thenounproject.com/png/861915-200.png' w='20px' h='20px' />
              <h4>Add Tag</h4>
              </HStack>
              <HStack>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OXh5xmCjjEFuWkrLzSAQc_4F-X4t5jKF0Q&usqp=CAU' w='20px' h='20px' />
              <h4>Activity</h4>
              </HStack>
            </Stack>
          </HStack>
        </Stack>
    </div>
  )
}

export default Task