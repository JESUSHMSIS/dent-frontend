import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
// import Appointment from './pages/Appointment'
import BookingHours from './pages/BookingHours'
import './App.css'
import {Routes , Route} from "react-router-dom"
import Login from './pages/Login'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
        exact
        path="/" 
        element={
          <>
            <Home />
            <About />
            <Services /> 
            <Contact />
          </>
        } /> 

        <Route exact path='login_user' element={<Login />}/>
        <Route exact path="/dental-clinic/slot" element={<BookingHours />} />
      </Routes>

    </>
  )
}

export default App
