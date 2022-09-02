import { HStack ,Input } from '@chakra-ui/react'
import React  from 'react'
import {FaPlay} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import {IoIosCheckmarkCircleOutline} from "react-icons/io"


const Add = ({handlechange }) => {
 
  
  return (
    <div>
        <HStack justifyContent={"space-between"} pl="2rem" pr="2rem" >
            <HStack gap='10px' w="80%">
              <IoIosCheckmarkCircleOutline size="30px"/>
                <Input name='name' onChange={handlechange}  placeholder='' />

            </HStack>
            <HStack gap='10px' >
                <CgProfile size={"20px"}/>
                <FaPlay/>
            </HStack>
        </HStack>
    </div>
  )
}

export default Add