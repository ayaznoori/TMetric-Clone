import { Box } from '@chakra-ui/react'
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Dashboard from "./DashComponents/dashboard/Dashboard"
import Time from "./DashComponents/Time/Time"
import Task from "./DashComponents/Task/Task"
const HomeDash = () => {
  return (
    <Box className="App" display={"flex"}>
      <Dashboard/>
      <Routes>
        <Route path='/' element={<Time/>} ></Route>
        <Route path='/dashboard/task' element={<Task/>} ></Route>
        <Route path='/dashboard/team' element={""} ></Route>
      </Routes> 
    </Box>
  )
}

export default HomeDash
