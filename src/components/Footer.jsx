import { HStack,Flex,Link,Img,VStack} from '@chakra-ui/react'
import React from 'react'
import style from './footer.module.css'
const Footer = () => {
  return (
    <div className={style.container}>
      <Link href='/'><Img src="https://tmetric.com/images/v3/tmetric_logo_with_text.svg" alt="logo"/></Link>
      <br/>
      <Flex width='100%'  justifyContent='space-between'>
          <VStack >
                <span><b>TMETRIC</b></span>
                <span>Applications</span>
                <span>Desktop</span>
                <span>iOS </span>   
                <span>Android</span>
          </VStack>
          <VStack>
                    <span><b>Browser Extensions</b> </span>
                    <span>Chrome</span>
                     <span>Firefox</span>
                     <span>Opera</span>
                     <span>Edge</span>
                     <span>Safari</span>
          </VStack>
          <VStack>
                    <span><b>Resources</b></span>
                    <span>Solutions</span>
                     <span>Integrations</span>
                     <span>Help</span>
                     <span>Time Trackers Comparison</span>
                     <span>Blog</span>
          </VStack>
          <VStack>
                    <span><b>About</b></span>
                    <span>About TMetric</span>
                     <span>Terms of Service</span>
                     <span>Privacy Policy</span>
                     <span>Privacy Policy</span>
                     <span>Cookies Policy</span>
          </VStack>
          


      </Flex>
       <hr/>
       <Flex>
        
       </Flex>
      

    </div>
  )
}

export default Footer