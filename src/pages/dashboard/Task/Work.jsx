import React from 'react'
import {Image,Button,Stack,HStack,Input} from "@chakra-ui/react"

const Work = ({wrk}) => {
  return (
    <div>
         <HStack display={'flex'} justifyContent='space-between' >
                <HStack pl='5px' >
                  <span><Image src='https://previews.123rf.com/images/elnurss/elnurss1809/elnurss180903233/109840299-play-button-vector-icon.jpg?fj=1' w='50px' h='50px' /></span>
                  <Button><i class="fa-solid fa-check"></i> &nbsp; Mark as completed</Button>
                </HStack>
                <HStack gap='5px' m='2px' >
                  <span><Image src='https://icon-library.com/images/more-icon/more-icon-25.jpg' w='30px' h='30px' /></span>
                  <span><Image src='https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/arrow-right-33.png' w='30px' h='30px' /></span>
                </HStack>
              </HStack>
              <Stack><Input placeholder='Write a Task Name' value={wrk} /></Stack>
              <HStack>
                <h3>Projects</h3>
                <HStack pl='25px' >
                  <Image w='10px' h='10px' src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/folder.png' /> 
                  <p>No Projects</p>
                </HStack> 

              </HStack>
              <HStack gap='25px' >
                <p>Assignee</p>
                <h4>Shashank Kumar</h4>
              </HStack>
              <HStack>
                <h4>Due Date</h4>
                <HStack pl='25px' >
                  <Image src='https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg' w='20px' h='20px' />
                  <h4>None</h4>
                </HStack>
              </HStack>
               <Stack><Input placeholder='Enter task Description' /></Stack>
              <HStack>
                <h4>Estimate</h4>
                <HStack pl='25px' >
                  <Image src='https://img.freepik.com/premium-vector/black-white-vector-illustration-vintage-analog-clock_97886-1.jpg?w=2000' w='20px' h='20px' />
                  <p>None</p>
                </HStack>
              </HStack> 
              <HStack>
              <Image src='https://static.thenounproject.com/png/861915-200.png' w='20px' h='20px' />
              <h4>Add Tag</h4>
              </HStack>
              <HStack>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OXh5xmCjjEFuWkrLzSAQc_4F-X4t5jKF0Q&usqp=CAU' w='20px' h='20px' />
              <h4>Activity</h4>
            </HStack>
    </div>
  )
}

export default Work