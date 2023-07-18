import LowerFooter from '../Components/LowerFooter';
import './Contact.css';
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Monday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 2,
      c_day: 'Tuesday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 3,
      c_day: 'Wednesday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 4,
      c_day: 'Thursday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 5,
      c_day: 'Friday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 6,
      c_day: 'Saturday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 7,
      c_day: 'Sunday',
      c_time: '5:00 PM-9:00 PM',
    },
  ];
  return (
    <>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <div className="google_map_location">
            <div className="gmap">

              <iframe
                title="gmap_location"
                className="gmap_iframe"
                width="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.1398229503068!2d-68.08661876640437!3d-16.520109924566754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21386f10e489%3A0x8f4d935f3a5ea5d4!2sPrado!5e0!3m2!1ses!2sbo!4v1689445176077!5m2!1ses!2sbo"
              ></iframe>            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2 style={{ fontFamily: 'Poppins' }}>
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                OPD Hours
              </h2>
            </div>
            <hr />
            {clinic_data.map((e, index) => (
              <div className="clinic_timing" key={index}>
                <p className="current_day">{e.c_day}</p>
                <p className="current_day_timing">{e.c_time}</p>
              </div>
            ))}
            <div className="d_and_c">
              <div className="direction_to_clinic">
                <a
                  href="https://goo.gl/maps/micYX7HYW2AiFwyx8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clinic Direction
                </a>
              </div>
              <div className="call_to_clinic">
                <a href="tel:+591 67159666">Call Clinic</a>
              </div>
            </div>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2023
            <a href="/" id="clinic_name">
              Dental Clinic.
            </a>
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
