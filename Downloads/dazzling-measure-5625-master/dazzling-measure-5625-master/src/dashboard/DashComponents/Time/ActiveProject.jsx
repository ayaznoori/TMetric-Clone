import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { FaPlay, FaStop } from 'react-icons/fa'
import { FcFolder } from 'react-icons/fc'

const ActiveProject = ({props,setPlay,play}) => {
    const[count,setCount]=useState(0)
    const[is,setIs]=useState(false)
    const timerId=useRef(null)
    const Start=()=>{
        setIs(true)
        setPlay(true)
        if(!timerId.current){
            timerId.current= setInterval(()=>{
              setCount((count)=>count+1)
            },60000)
          }
    }
    const Pause=()=>{
      setPlay(false)
        setIs(false)
        clearTimeout(timerId.current)
        timerId.current=null; 
    }


  return (
    <Box>
        <Flex border={"1px  solid #d0d6db"} p={"1rem"} justifyContent="space-between">
        <Flex gap="20px">
        <Checkbox ></Checkbox>
        <Text>{props.description}</Text>
        </Flex>
        <Flex gap="20px">
        <Flex gap="4px"> <FcFolder size="1.5rem"/><Text>{props.project}</Text></Flex>
        <Flex>{props.start} - {props.end}</Flex>

        <Text>{count} : min</Text>
        {!is? 
        <FaPlay color='gray' onClick={Start}/>
        :
        <FaStop color='gray' onClick={Pause}/>
        }
        </Flex>
        </Flex>
      
    </Box>
  )
}

export default ActiveProject
