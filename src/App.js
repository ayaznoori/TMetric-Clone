
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contacts/Contact";
import Homepage from "./pages/homepage/Homepage";
import Pricing from "./pages/pricing/Pricing";
import Footer from "./components/Footer";
import Login from "./pages/Register/Login/Login";
import Signup from "./pages/Register/Signup/Signup";
import { Box } from '@chakra-ui/react'
import Dashboard from "./dashboard/DashComponents/dashboard/Dashboard";
import Time from "./dashboard/DashComponents/Time/Time";
import Task from "./dashboard/DashComponents/Task/Task";
import Team from "./dashboard/DashComponents/Team/Team";


function App() {
  return (
    <div className="App">     
          <Routes>
              <Route path='/' element={<><Navbar/><Homepage/> <Footer/></>}/>
              <Route path='/login' element={<><Navbar/><Login /><Footer/></>}/>
              <Route path='/signup' element={<><Navbar/><Signup /><Footer/></>}/>
              <Route path='/contact' element={<><Navbar/><Contact/><Footer/></>}/>
              <Route path='/Pricing' element={<><Navbar/><Pricing/><Footer/></>}/>
              <Route path='/dashboard/time' element={<Box display={"flex"}><Dashboard/><Time/></Box>} ></Route>
              <Route path='/dashboard/task' element={<Box display={"flex"}><Dashboard/><Task/></Box>} ></Route>
              <Route path='/dashboard/team' element={<Box display={"flex"}><Dashboard/><Team/></Box>} ></Route>
          </Routes>
    </div>

  );
}

export default App;

 