import Home from './home/Home'
import Navbar from './home/Navbar'
import About from './home/About'
import Services from './home/Services'
import Contact from './home/Contact'
// import Appointment from './home/Appointment'
import BookingHours from './home/BookingHours'
import './App.css'

import {Routes , Route} from "react-router-dom"
import Login from './home/Login'
import Dashboard from './views/admin/Dashboard'
import RegistrationForm from './views/admin/RegistrationForm'


function App() {

  return (
    <>
      
      <Routes>
        <Route 
        exact
        path="/" 
        element={
          <>
            <Navbar />
            <Home />
            <About />
            <Services /> 
            <Contact />
          </>
        } /> 

        <Route exact path='login_user' element={<Login />}/>
        <Route exact path="/dental-clinic/slot" element={<BookingHours />} />
      </Routes>
     <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/add-user" element={<RegistrationForm />} />
    </Routes>

    </>
  )
}

export default App
