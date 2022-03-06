import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import  Navbar from './components/Navbar';
import About from './pages/About';
import Contact from  './pages/Contact';
import Project from './pages/Project';
function App() {
  const [currentPage,setCurrentPage]=useState('About')

  const handleClick=()=>{
    if(currentPage==='About'){
      return <About/>
    }
    else if(currentPage==='Contact'){
      return <Contact/>
    }
    else if(currentPage==='Project'){
      return <Project/>
    }
    else {
      return <About/>
    }
  }

  return (
   <>
       <Navbar  setCurrentPage={setCurrentPage} />
       {
         handleClick()
       }
   </>
  );
}

export default App;
