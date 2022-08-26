
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
import Team from './components/Team';

function App() {
  return (
    <div className="App">

       
          <Routes>
             
              <Route path='/' element={<><Navbar/><Homepage/> <Footer/></>}/>
              <Route path='/dashboard/:user' element={<Dashboard/>}/>
              <Route path='/login' element={<><Navbar/><Login /><Footer/></>}/>
              <Route path='/signup' element={<><Navbar/><Signup /><Footer/></>}/>
              <Route path='/contact' element={<><Navbar/><Contact/><Footer/></>}/>
              <Route path='/Pricing' element={<><Navbar/><Pricing/><Footer/></>}/>
          </Routes>

    </div>
  );
}

export default App;
