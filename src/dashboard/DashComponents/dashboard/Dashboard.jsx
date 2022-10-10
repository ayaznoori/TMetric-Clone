import React from 'react'
import  "./dashboard.css";
import {BsStopwatch} from "react-icons/bs"
import {BiNotepad} from "react-icons/bi"
import {AiOutlineTeam} from "react-icons/ai"
import {useNavigate} from "react-router-dom"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Box,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Text
} from '@chakra-ui/react'
import { GoogleLogout } from 'react-google-login';

const Dashboard = () => {
  let usersname= JSON.parse(localStorage.getItem("user")) || {name:"user"}
  const navigate=useNavigate();
  let handlelogout = ()=>{
    
    localStorage.removeItem("user");
    navigate("/")
  }
 
  return (
      <div border="1px solid" className='main'>
        <Stack  bgColor={"light grey "}>
          <HStack w='100%' justifyContent='center'  >
            <Box w='55%'>
            <Image src={'https://comparecamp.com/media/uploads/2020/11/tmetric-logo.png'}  />
            </Box>
          </HStack>

                <Box bg='#f6f7f8' mt="70px">
                  <Box>
                  <Button w="100%" bg='#f6f7f8' onClick={()=>navigate('/dashboard/time')}>
                  <Box flex='4'    display={'flex'} gap='10px'  >
                  <BsStopwatch size="1.5rem"/>
                  <Text 
                  fontWeight={'550'} 
              
                  > Time</Text>
                  </Box>
                  </Button>
                  </Box>
                
                  <Box>
                  <Button w="100%" bg='#f6f7f8' onClick={()=>navigate('/dashboard/task')}>
                    <Box flex='1' display={'flex'} gap='10px'  >
                    <BiNotepad size="1.5rem"/>
                    <Text 
                    fontWeight={'550'} 
                 
                    > Task</Text>
                    </Box>
                  </Button>
                  </Box>

                  <Box>

                  <Button w="100%" bg='#f6f7f8' onClick={()=>navigate('/dashboard/team')}>
                    <Box flex='1' display={'flex'} gap='10px' >
                    <AiOutlineTeam size="1.5rem"/>
                    <Text
                    fontWeight={'550'}
                    > Team</Text>
                    </Box>
                  </Button>

                  </Box>
                </Box>
              
           
          <Accordion  allowMultiple w='100%' justifyContent={'center'} bg='#f6f7f8' overflow={"auto"}>
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
                {usersname.name}
              </MenuButton>
              <MenuList placement='right-top'  left='130%'>
                <MenuItem minH="48px">
                  
                  <span>My Profile</span>
                </MenuItem>
                <MenuDivider />
                <MenuItem minH="40px" >
              
                <GoogleLogout
                    clientId='487806808115-u4tnqobdjitv6csr2pom5tdrj5fb8383.apps.googleusercontent.com'
                    buttonText="Sign Out"
                    onLogoutSuccess={handlelogout}
                >
                </GoogleLogout>
                </MenuItem>
              </MenuList>
            </Menu>
            </Stack>
            
          
          </Accordion>
        </Stack>
     </div>
  )
}

export default Dashboard