import "./Home.css"
import "font-awesome/css/font-awesome.min.css";
import slider_one from "../home/images/slide_one.png";
import { HashLink } from "react-router-hash-link"

const Home = () => {
    return (
    <>
        <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image">
              <img
                className="w-100"
                src={slider_one}
                alt="First slide"
                data-aos="fade-down"
              />
            </div>
            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    fontSize: "51px",
                    margin: "0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%);",
                  }}
                >
                  Nos Preocupamos Por Su Sonrisa
                </h2>
                <p>
                  Creemos que todo mundo deberia tener acceso a una gran clinica dental
                </p>
                <div className="social_links"></div>
              </div>
              <div className="slider_controls">
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01">
              <h2>Horario Flexible</h2>
              <p>
              Trabajamos en días festivos, además de trabajar hasta tarde en días regulares. En caso de emergencias aceptamos reservas.
              </p>

              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn"> Ver Horarios</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Mejor Precio Garantizado</h2>
              <p>
              Nuestros precios razonables hicieron sonreír a muchas personas con una nueva y
                 hermosa, irresistible sonrisa, como nunca antes!!
              </p>
              <HashLink
                to={"/#our-services"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Ver Tratamientos</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_03">
              <h2>Hora De Apertura</h2>
              <p>
              Lunes – Sábado : 10.00 am – 22.00 pm Domingo : 17.00 pm – 22.00
                 pm
              </p>

              <HashLink
                to={"/home/dental-clinic/slot"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn" id="tr_btn_01">
                  Agendar Una Cita
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
    
    )
}

export default Home;
