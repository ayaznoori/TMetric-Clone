import { HStack,Image } from '@chakra-ui/react'
import React from 'react'

const Add = () => {


  return (
    <div>
        <HStack justifyContent={'space-around'}  >
            <HStack gap='10px' >
                <Image w='20px' h='20px' src='https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/circle-check-512.png' />
                <Input variant='flushed' placeholder='' />

            </HStack>
            <HStack gap='10px'  >
                <Image  />
                <span><i class="fa-solid fa-play"></i></span>
            </HStack>
        </HStack>
    </div>
  )
}

export default Add