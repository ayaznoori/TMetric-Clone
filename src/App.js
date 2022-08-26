import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Contact from './pages/contacts/Contact';
import Homepage from './pages/homepage/Homepage';
import Pricing from './pages/pricing/Pricing';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/Footer';
import Login from './pages/Register/Login/Login';
import Signup from './pages/Register/Signup/Signup';

function App() {
  return (
    <div className="App">
          {/* <Navbar/> */}
          <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/dashboard/:user' element={<Dashboard/>}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/Pricing' element={<Pricing/>}/>
          </Routes>
          {/* <Footer/> */}
    </div>
  );
}

export default App;
