import React, { useState } from 'react'
import style from './homepage.module.css';
import { Text,InputGroup,InputLeftElement,Input,Button, Flex, Img, Box, VStack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { Showhide } from './Showhide';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const [img,setimg]=useState('https://tmetric.com/media/e5enfaae/img-advantages.png');
    const navigate=useNavigate();
  return (
    <div className={style.container}>
        <div className={style.topsection}>
            <div className={style.topleft}>
            <Text fontSize='7xl' fontWeight={700}>Make the best use of your time</Text>
            <Text fontSize='1xl' fontWeight={700}>TMetric is a smart choice for time tracking to see work in progress and keep team, cost and quality under control</Text>
            <br/>
            <InputGroup >
               <InputLeftElement 
                  pointerEvents='none'
                  children={<EmailIcon color='rgb(48,112,240)' />}
                
                  />
                  <Input type='email'  placeholder='Enter your email address' fontSize='20px' width={'80%'} bgColor='white' />
            </InputGroup>
            <br/>
            <Flex alignItems='center'>
            <Button colorScheme='blue' size='md' width='230px'>Get Started</Button>&nbsp;&nbsp; <Text fontWeight='500'>Fully Functional 30-Day Trial</Text>
            </Flex>
            </div>


            <div className={style.topright}>
              <img src="https://tmetric.com/media/w53hmkzd/img-video-cover.png" alt="fulllogo" width="80%" />
              <a target='_blank' rel="noreferrer" href="https://www.youtube.com/embed/d2LwNiALPIM?autoplay=1&amp;controls=1&amp;list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f&amp;listType=playlist" class="btn-play" data-toggle="modal" data-target="#youTubeVideoModal" data-video-url="https://www.youtube.com/embed/d2LwNiALPIM?autoplay=1&amp;controls=1&amp;list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f&amp;listType=playlist"><Img className={style.playbutton} src='https://cdn-icons-png.flaticon.com/512/17/17550.png' width='100px'/></a>
            </div>
        </div> 
        <div className={style.companyflex} >
            <ul  >
                    <li>
                        <a href="https://www.saasworthy.com/product/tmetric">
                            <img src="https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png" width="120" height="120" alt="Highly Rated Time Tracking Software"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.softwareworld.co/time-tracking-software/#TMetric">
                            <img src="https://tmetric.com/media/w4mhgaul/time-tracking-software.png" width="120" height="120" alt="Top Time Tracking Software in 2020"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://crozdesk.com/operations-management/time-management-software/tmetric">
                            <img src="https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png" width="120" height="120" alt="Crozdesk Happiest Users"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.g2.com/products/tmetric/reviews">
                            <img src="https://tmetric.com/media/c2eewysw/g2_2022_main_page.png" width="120" height="120" alt="G2 High Performer Spring 2022"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.capterra.com/p/148624/TMetric/">
                            <img src="https://tmetric.com/media/a00doqsb/icon-customer-rating.png" width="120" height="120" alt="Capterra"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.softwaresuggest.com/tmetric-free-time-tracker">
                            <img src="https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png" width="120" height="120" alt="Software Suggest"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.getapp.com/project-management-planning-software/a/tmetric/">
                            <img src="https://tmetric.com/media/jfxavlps/getapp-logotype.svg" width="120" height="120" alt="GetApp"/>
                        </a>
                    </li>
            </ul>
        </div>
        <div style={{margin:"auto",width:"60%",textAlign:"center",padding:"50px"}}> <Text fontSize={'5xl'} fontWeight='700'  >What makes TMetric your best business companion</Text></div>
        <Flex  padding='15px' justifyContent='center'>
            <Box width={"65%"}  >
                <img src={img} width={"90%"} alt="" srcset="" />
            </Box>
            <Box width={"30%"}>
                <Showhide si={1} setimg={setimg} title="Time Tracking" icon="https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg" value="Capture every task you work on. Take control over time intervals by simple time tracking"/><br/>
                <Showhide si={2} setimg={setimg} title="Project Management" icon ="https://tmetric.com/media/1niddz51/icon-project-blue.svg" value="Create projects, set rates and budgets. Keep tracking of hours spent on tasks and see the project progress at a glance, collaborate easily, keep deadlines and prevent over budgeting"/><br/>
                <Showhide si={3} setimg={setimg} title="Team Management" icon="https://tmetric.com/media/2gxihhdu/icon-team-blue.svg" value="Measure productivity and activity level of your team, assign tasks in a click, monitor workflow and distribute the workload. Syncs your teams’ work and improves efficiency." /><br/>
                <Showhide si={4} setimg={setimg} title="Billing & Invoicing" icon="https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg" value="With the accurate billing system, set billable rates and easily create an invoice based on tracked time and expenses, and get paid promptly."/><br/>
                <Showhide si={5} setimg={setimg} title="Reporting" icon ="https://tmetric.com/media/yoblhiut/icon-reports-blue.svg" value="With a flexible reporting system, you have a choice to get insights into your projects and team productivity, analyze incomes and keep costs under control"/><br/>
                <Showhide si={6} setimg={setimg}title="Time Off" icon="https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg" value="Add a PTO policy for your organization, simply ask for days off, control missed workdays, manage balances and teams attendance hassle-free"/><br/>
            </Box>

        </Flex>
        <Flex  padding='50px' justifyContent='center' backgroundColor='#F6F7F8'>
            <Box width={"45%"}>
            <Text fontSize='6xl' fontWeight="bold">Manage your team effectively</Text>
            <Box fontWeight='bold' paddingLeft='60px'>
            <ul >
            <li>timekeeping</li>
            <li>sites and apps monitoring</li>
            <li>activity tracking</li>
            <li><Text color ='blue'>screenshots capturing</Text></li>
            <li><Text color ='blue'>task management</Text></li>
            <li>50+ integrations</li>
            <li><Text color ='blue'>work schedule</Text></li>
            </ul>
            </Box>
            <br/>
        
            <Button colorScheme='blue' size='md' fontSize='1xl' width='230px' onClick={()=>navigate('/login')}>Start Free Trial</Button>
            </Box>

            <Box width={"65%"}  >
                <img src='https://tmetric.com/media/upkh02nn/img-activity-cases.svg' width={"100%"} alt="" srcset="" />
            </Box>
        </Flex>
        <Flex  padding='20px'   >.
            <Box width={"70%"}  >
                <img src='https://tmetric.com/media/hx0j4hno/img-report-cases-svg.svg' width={"100%"} alt="" srcset="" />
            </Box>
            <Box width={"45%"}>
            <Text fontSize='5xl' fontWeight="bold">Ensure the profitability of your business</Text><br/>
            <Box fontWeight='bold' paddingLeft='60px'>
            <ul >
            <li>project management</li>
            <li>project budgeting</li>
            <li>billing and invoicing</li>
            <li><Text color ='blue'>accurate payroll</Text></li>
            <li><Text color ='blue'>detailed reports</Text></li>
            </ul>
            </Box>
            <br/>
        
            <Button colorScheme='blue' size='md' fontSize='1xl' width='230px' onClick={()=>navigate('/login')}>Start Free Trial</Button>
            </Box>

            
        </Flex>
        <Flex  padding='50px' justifyContent='center' backgroundColor='#F6F7F8'>
            <Box width={"45%"}>
            <Text fontSize='6xl' fontWeight="bold">Monitor attendance and time-off requests</Text><br/>
            <Box fontWeight='bold' paddingLeft='60px'>
            <ul >
            <li>flexible time off policy</li>
            <li>time off requests management</li>
            <li>time off calendar</li>
            <li>pto calculations</li>
            </ul>
            </Box>
            <br/>
        
            <Button colorScheme='blue' size='md' fontSize='1xl' width='230px' onClick={()=>navigate('/login')}>Start Free Trial</Button>
            </Box>

            <Box width={"65%"}  >
                <img src='https://tmetric.com/media/0sapzfi1/time-off-calendar-case.png' width={"100%"} alt="" srcset="" />
            </Box>
        </Flex>
        <Flex backgroundColor='rgb(65,51,143)' color='white' justifyContent='center' padding="50px">
            <VStack>
           <Text fontSize='6xl' fontWeight='bold'>Make time work for you!</Text> 
           <Button bgColor='white' color='black' size='md' fontSize='1xl' width='230px' onClick={()=>navigate('/login')}>Start Free Trial</Button>
           <br/>
           <Text color='white' fontWeight='bold'>Powered by  A software vendor with 20 years of experience.</Text>
           </VStack>
        </Flex>
    </div>
  )
}

export default Homepage