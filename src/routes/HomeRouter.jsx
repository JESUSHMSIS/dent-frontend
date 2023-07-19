

import { Route, Routes } from "react-router-dom";

import Home from '../home/Home';
import Navbar from '../home/Navbar';
import About from '../home/About';
import Services from '../home/Services';
import Contact from '../home/Contact';
import BookingHours from '../home/BookingHours';


import Login from '../home/Login'
import '../App.css'

export const HomeRouter = () => {

  return (
    <>
      <Routes>
        
        <Route path="/" 
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Services />
              <Contact />
            </>
          } 
        /> 

        <Route path='/login' element={<Login />}/>
        <Route path="/dental-clinic/slot" element={<BookingHours />} />
      </Routes>
    </>
  )
}
