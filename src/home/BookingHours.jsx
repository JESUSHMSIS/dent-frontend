// import React, { useState } from 'react';
import EveningData from './PagesData/EveningData';
import MorningData from './PagesData/MorningData';
import Logo from '../assets/logo.png';
// import { ToastContainer, toast } from 'react-toastify';
import './BookingHours.css';
// import { useNavigate } from 'react-router-dom';
// import Spinner from '../Components/Spinner';
import Navbar from './Navbar';
const BookingHours = () => {
  return (
    <>
      <Navbar />
      <div className="booking_section_container">
        <div className="bsc_lower">
          <form method="POST">
            <div className="bsc_lower_container">
              <div className="bsc_header">
                <div className="appointment_hours_form">
                  <div className="form_for_booking">
                    <div className="brand">
                      <img src={Logo} alt="logo" />
                      <h1>OMs Consultorio Dental</h1>
                    </div>
                    <div className="in__container">
                      <label>Elija La Fecha</label>
                      <input
                        type="date"
                        placeholder="Selecciona la fecha"
                        name="date"
                        style={{ color: 'White' }}
                        onChange={(event) => {
                          const selectedDate = event.target.value;
                          console.log(selectedDate);
                         
                        }}
                      />

                    </div>
                    <div className="in__container">
                      <label>Ingrese su nombre</label>
                      <input
                        type="text"
                        placeholder="Ingresa su nombre"
                        name="name"
                        min="3"
                        required
                      />
                    </div>
                    <div className="in__container">
                      <label>Ingrese su email</label>
                      <input
                        type="email"
                        placeholder="Ingresa su email"
                        name="email"
                        min="3"
                        required
                      />
                    </div>
                    <div className="in__container">
                      <label>Su telefono</label>
                      <input
                        type="number"
                        placeholder="Ingresa su numero de telefono"
                        name="phone"

                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="me_slot_selection">
                <div className="bsc_lower_morning_container">
                  <span>Horarios en la mañana y en la tarde</span>
                  <div className="morning_info_container" id="container45">
                    {MorningData.map((data, index) => {
                      return (
                        <div
                          className="md_data"
                          
                          key={index}
                        >
                          {data.m_slot_time}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr />
                <div className="bsc_lower_evening_container">
                  <div className="evening_info_container">
                    {EveningData.map((data, index) => {
                      return (
                        <div
                          className="ed_data"
                          key={index}
                        >
                          {data.e_slot_time}
                        </div>
                      );
                    })}
                    <div className="submit_slot_btn">
                      <button className="booking_c_btn" id="bcb" type="submit">
                        <span>
                          Enviar
                        </span>
                        {/* <Spinner id="sb_loader" style={loader} /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </>
  );
};

export default BookingHours;
