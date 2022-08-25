import React from 'react'
import {Flex ,Stack} from "@chakra-ui/react"
import  "./dashboard.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  HStack,
  
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
    Button
  
} from '@chakra-ui/react'
// import Sidebar from './sidebar';
const Dashboard = () => {
  return (
    

    <div >
      {/* <br />
      <br />
      <br /> */}
      <div border="1px solid" className='main'>
        <Stack  bgColor={"light grey "} w='20%' lineHeight={0}>
          <HStack w='100%' justifyContent='center' h='100px'  p='0'  lh='1px' lineHeight={"0.1px"} mt='none' >
            <Box w='7%' p='0' h='10px'   ><Image src='https://cdn-icons-png.flaticon.com/512/54/54532.png' w='100%' h='100%'  /></Box>
            <Box  h='60px' ml='0' w='75%' border='1px red' mt='none' lineHeight={'0.1px'}>
            <Image w='90%' h='80%' src={'https://comparecamp.com/media/uploads/2020/11/tmetric-logo.png'}  />
            </Box>
           
          </HStack>
          
        <Accordion  allowMultiple w='100%' justifyContent={'center'} bg='#f6f7f8' overflow='auto' >
        

            <AccordionItem border='none' h='31px' mb='10px' >
              <h2 >
                <AccordionButton  >
                  <Box flex='1' ml='20px' display={'flex'} gap='20px'  >
                  <img width='25px' height={'10px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZOiUxzAlBLD8olJjdSvxccaH6hMHE5QGZA&usqp=CAU' />
                    <Box fontWeight={'550'} mt='15px' > Time</Box>
                  
                   
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              {/* <AccordionPanel >
                <h3>Hello man</h3>
              </AccordionPanel> */}
              
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton border='none' h='31px' mb='10px' >
                <Box flex='1' ml='20px' display={'flex'} gap='20px' mt='5px'  >
                    <img width='25px' height={'10px'} src='https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/002/905/original/task.png' />
                    <Box fontWeight={'550'} mt='15px' > Task</Box>
                  
                   
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              {/* <AccordionPanel pb={4}>
                hiii
              </AccordionPanel> */}
            </AccordionItem>
            <AccordionItem  >
              <h2>
                <AccordionButton  >
                  <Box flex='1' textAlign='left' h='20px' mt='10px' >
                   Analysize
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} _hover={{cursor:'pointer',bg:"rgba(191, 191, 191)"}} >
                <Box display='flex' alignItems={'center'}  gap='5px' >
                  <Image src='http://cdn.onlinewebfonts.com/svg/img_501838.png' w='20px' h='20px' />
                  <h4 >Reports</h4>
                </Box>
              
             
              </AccordionPanel>
              <AccordionPanel pb={4} _hover={{cursor:'pointer',bg:"rgba(191, 191, 191)"}} >
              <Box display='flex' alignItems={'center'}  gap='5px' >
                  <Image src='https://static.thenounproject.com/png/675878-200.png' w='20px' h='20px' />
                  <h4 >Activity</h4>
                </Box>
             
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton >
                  <Box flex='1' textAlign='left' border='none'   h='20px' mt='10px'>
                   Manage
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} _hover={{cursor:'pointer',bg:"rgba(191, 191, 191)"}} >
              <Box display='flex' alignItems={'center'}  gap='5px' >
                  <Image src='https://aux.iconspalace.com/uploads/folder-vector-icon-256.png' w='20px' h='20px' />
                  <h4 >Projects</h4>
                </Box>
              </AccordionPanel>
              <AccordionPanel pb={4} _hover={{cursor:'pointer',bg:"rgba(191, 191, 191)"}} >
              <Box display='flex' alignItems={'center'}  gap='5px' >
                  <Image src='https://www.pngfind.com/pngs/m/172-1726057_png-file-svg-office-building-logo-png-transparent.png' w='20px' h='20px' />
                  <h4 >Clients</h4>
                </Box>
              </AccordionPanel>
              <AccordionPanel pb={4} _hover={{cursor:'pointer',bg:"rgba(191, 191, 191)"}} >
              <Box display='flex' alignItems={'center'}  gap='5px' >
                  <Image src='https://thumbs.dreamstime.com/b/receipt-line-icon-outline-vector-sign-linear-style-pictogram-isolated-white-symbol-logo-illustration-editable-stroke-pixel-98994862.jpg' w='20px' h='20px' />
                  <h4 >Invoices</h4>
                </Box>
              </AccordionPanel>
              <AccordionPanel pb={4} _hover={{cursor:'pointer',bg:"rgba(191, 191, 191)"}} >
              <Box display='flex' alignItems={'center'}  gap='5px' >
                  <Image src='https://img1.pnghut.com/22/6/7/9Dpwr3LP3s/logo-symbol-timeline-tourism-tour-operator.jpg' w='20px' h='20px' />
                  <h4 >Time Off</h4>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem  >
              <h2>
                <AccordionButton >
                  <Box flex='1' textAlign='left' border='none'  h='20px' mt='10px' >
                   Workspace
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}  _hover={{cursor:'pointer',bg:"rgba(191, 191, 191)"}} >
              <Box display='flex' alignItems={'center'}  gap='5px' >
                  <Image src='https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png' w='20px' h='20px' />
                  <h4 >Setting</h4>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <Stack mt='200px' >
            <Menu  mt='200px'>
              <MenuButton as={Button}>
                Shashank kumar
              </MenuButton>
              <MenuList placement='right-top'  left='130%'>
                <MenuItem minH="48px">
                  
                  <span>My Profile</span>
                </MenuItem>
                <MenuDivider />
                <MenuItem minH="40px">
                  
                  <span>Logout</span>
                </MenuItem>
              </MenuList>
            </Menu>

            </Stack>
            
          
          </Accordion>
        </Stack>
        <div className='container'  >
        <h3>hello this is window</h3>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard