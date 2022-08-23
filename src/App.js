import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/dashboard/:user' element={<Dashboard/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/Pricing' element={<Pricing/>}/>
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
