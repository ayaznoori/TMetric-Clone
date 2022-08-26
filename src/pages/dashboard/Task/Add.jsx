import { HStack,Image,Input } from '@chakra-ui/react'
import React from 'react'

const Add = ({handlechange}) => {


  return (
    <div>
        <HStack justifyContent={'space-around'}  >
            <HStack gap='20px' pd='0.1px' >
                <Image w='20px' h='20px' src='https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/circle-check-512.png' />
                <Input variant='flushed' name='name' onChange={handlechange}  placeholder='' />

            </HStack>
            <HStack gap='10px'  >
                <Image src='https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png' h='20px' w='20px' />
                <span><i class="fa-solid fa-play"></i></span>
            </HStack>
        </HStack>
    </div>
  )
}

export default Add