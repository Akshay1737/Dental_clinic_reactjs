
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import NavBar from '../src/Components/NavBar.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './Components/Footer.jsx';
const App = () => {
  return (
    <div className="">
   
      <NavBar/>


      
      <Routes>
        <Route path='/' element={<Home />} />
      
       
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>

      <Footer />
    </div>
  )
}

export default App
