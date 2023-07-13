import Logo from '../assets/logo.png';
// import {Link} from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
// import Spinner from '../Components/Spinner';
const Login = () => {
    return (
        <>
          <div className="login_form_section">
            <div className="form_container_for_login">
              <form
                method="POST"
                className="login_u_form"
                // onSubmit={PostData}
                data-aos="fade-right"
              >
                <div className="brand">
                  <img src={Logo} alt="logo" />
                  <h1>Om Dental Clinic</h1>
                </div>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  name="email"
                />
                <input
                  type="Password"
                  placeholder="Password"
                  name="password"
                />
                <button className="login_form_button" type="submit">
                  Login In
                  {/* <Spinner id="login_loder" style={loader} /> */}
                </button>
                <span className="lower_title_login">
                </span>
              </form>
            </div>
            {/* <ToastContainer /> */}
          </div>
        </>
      );
    };
    
    export default Login;
    