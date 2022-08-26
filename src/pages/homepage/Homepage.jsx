import React from 'react'
import style from './homepage.module.css';
import { Text,InputGroup,InputLeftElement,Input,Button, Flex, Img, Box } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
const Homepage = () => {
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
              <a target='_blank' href="https://www.youtube.com/embed/d2LwNiALPIM?autoplay=1&amp;controls=1&amp;list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f&amp;listType=playlist" class="btn-play" data-toggle="modal" data-target="#youTubeVideoModal" data-video-url="https://www.youtube.com/embed/d2LwNiALPIM?autoplay=1&amp;controls=1&amp;list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f&amp;listType=playlist"><Img className={style.playbutton} src='https://cdn-icons-png.flaticon.com/512/17/17550.png' width='100px'/></a>
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
        <Flex margin={'auto'}>
            <Box width={"80%"} margin='auto' justifyContent='center'>
                <img src="https://tmetric.com/media/e5enfaae/img-advantages.png" width={"90%"} alt="" srcset="" />
            </Box>
            <Box width={"20%"}>

            </Box>

        </Flex>
    </div>
  )
}

export default Homepage