import React from 'react'
import {Container,Flex,Button,Box,Text,extendTheme} from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  
} from '@chakra-ui/react'
import { useEffect } from 'react'
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
const theme = extendTheme({ breakpoints })
const Login_failedmodal = ({setStrike,txt,c}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

useEffect(()=>{
  onOpen()
},[])
  return (
    <Container  maxW={'md'}  centerContent>
      

      
      

      <Modal onClose={()=>{onClose();setStrike(false)}}  isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody mt='3em' mb='3em' alignSelf={'center'} color={`${c}`} >
            <Text>{txt} !</Text>
           
          </ModalBody>
          
        </ModalContent>
      </Modal>

    </Container>
  )
}

export default Login_failedmodal;