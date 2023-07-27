// import React from 'react';
import { HashLink } from 'react-router-hash-link';
import about_long_des_data from '../home/PagesData/AboutData';
import './LowerFooter.css';
import footer_01 from '../home/images/footer_01.jpg';
import footer_02 from '../home/images/footer_01.jpg';

function LowerFooter() {
  const contact_recent_data = [
    {
      index: 1,
      rp_img: footer_01,
      rp_text:
        'Los problemas dentales son una emergencia sin importar cuán menor o mayor sea el problema. Los problemas dentales son variados y saber cómo manejarlos puede ser de gran ayuda para prevenir daños a largo plazo.',
      rp_btn: 'Leer mas',
    },
    {
      index: 2,
      rp_img: footer_02,
      rp_text:
        'Aunque cepillarse los dientes y usar hilo dental son dos importantes rutinas diarias de higiene bucal para mantener la salud de los dientes y las encías, hay algunas otras cosas sencillas que puede hacer para prevenir las caries.',
      rp_btn: 'Leer mas',
    },
  ];

  const nav_data = [
    { index: 1, link_to: '/#home', nav_name: 'Inicio' },
    { index: 2, link_to: '/#about-doctors', nav_name: 'Informacion' },
    { index: 3, link_to: '/#our-services', nav_name: 'Tratamientos' },
    {
      index: 4,
      link_to: '/dental-clinic/appointment',
      nav_name: 'Agendar Citas',
    },
    { index: 5, link_to: '/#contact-us', nav_name: 'Contactenos' },
  ];
  const contact_data = [
    {
      index: 1,
      title: 'Email:',
      cu_data: 'dentalClinic@gmail.com',
    },
    {
      index: 2,
      title: 'Phone:',
      cu_data: '+591 67159666',
    },
  ];

  const contact_link = [
    {
      index: 1,
      img: <i className="fa-brands fa-facebook-f"></i>,
      on_link: 'https://www.facebook.com/OdontoMedicSpaJC',
    },
    {
      index: 2,
      img: <i className="fa-brands fa-instagram"></i>,
      on_link: '#',
    },
    {
      index: 3,
      img: <i className="fa-brands fa-twitter"></i>,
      on_link: '#',
    },
    {
      index: 4,
      img: <i className="fa-sharp fa-solid fa-globe"></i>,
      on_link: '#',
    },
  ];
  return (
    <>
      <div className="lower_outer_footer_container">
        <div className="about_us">
          <div className="wrapper_container_ab">
            <h2>Mas Informacion</h2>
            <p data-aos="fade-right">{about_long_des_data.text}</p>
          </div>
        </div>
        <div className="recent_posts">
          <h2>Publicacion Reciente</h2>
          {contact_recent_data.map((data, index) => {
            return (
              <div
                className="rp_data"
                key={index}
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img src={data.rp_img} alt="" />
                <div className="rp_compile_container">
                  <p>{data.rp_text}</p>
                  <a href="#">{data.rp_btn}</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer_menu">
          <div className="wrapper_container_fm">
            <h2>Menu</h2>
            <div className="footer_data_menu">
              {nav_data.map((data, index) => {
                return (
                  <HashLink
                    className="nav_data"
                    key={index}
                    to={data.link_to}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {data.nav_name}
                  </HashLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contact_us">
          <div className="wrapper_container_cu">
            <h2>Contactenos</h2>
            <div
              className="contact_address"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <address>
                Ubicado en el Prado 
              </address>
            </div>
            <div className="contact_data">
              {contact_data.map((data, index) => {
                return (
                  <p
                    className="cs_data"
                    key={index}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <span style={{ color: '#0396fe' }}>{data.title} </span>
                    {data.cu_data}
                  </p>
                );
              })}
            </div>
            <div className="contact_links">
              {contact_link.map((data, index) => {
                return (
                  <a
                    className="contact_data_links"
                    key={index}
                    href={data.on_link}
                  >
                    {data.img}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerFooter;
