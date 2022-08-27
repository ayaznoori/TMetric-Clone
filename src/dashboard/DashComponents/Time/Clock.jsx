import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import TimePicker from 'react-time-picker'

const Clock = ({setClock2}) => {
    const [value, onChange] = useState("9:00");
   
  return (
    <Box>
        <Text textAlign={"left"}>End Time</Text>
        <TimePicker onChange={onChange} value={value}/>
    </Box>
  )
}

export default Clock
