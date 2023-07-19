import axios from 'axios';
import { useState , useEffect} from 'react';
import "./Dashboard.css";
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';
const cookies = new Cookies();
const Dashboard = () =>{

  const [users, setUsers] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
      axios.get('http://localhost:8080/api/user', {
        headers: {
          Authorization: `Bearer ${cookies.get('token')}`
        }
      }).then((response) => {
        if (response.data.ok) {
          setUsers(response.data.usuarios);
          console.log(response.data.usuarios);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);
    


  const handleMouseOver = (index) => {
    setHoveredItem(index);
  };

  const handleToggleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  // const cerrarSesion = () => {
  //   window.location.href = './login_user';
  // };

    return (
      <div className={`container${isActive ? ' active' : ''}`}>
        <div className="navigation">
          <ul>
            <li
              className={hoveredItem === 0 ? 'hovered' : ''}
              onMouseOver={() => this.handleMouseOver(0)}
            >
              <a href="#">
                <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span className="title">Brand Name</span>
              </a>
            </li>

            <li
              className={hoveredItem === 1 ? 'hovered' : ''}
              onMouseOver={() =>handleMouseOver(1)}
            >
              <a href="#">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li className={hoveredItem === 2 ? 'hovered' : ''}
              onMouseOver={() => handleMouseOver(2)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title">Customers</span>
                    </a>
                </li>

                <li  className={hoveredItem === 3 ? 'hovered' : ''}
              onMouseOver={() => handleMouseOver(3)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>

                <li  className={hoveredItem === 4 ? 'hovered' : ''}
              onMouseOver={() => handleMouseOver(4)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

                <li className={hoveredItem === 5 ? 'hovered' : ''}
              onMouseOver={() =>handleMouseOver(5)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>

                <li  className={hoveredItem === 6 ? 'hovered' : ''}
              onMouseOver={() => handleMouseOver(6)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span className="title">Password</span>
                    </a>
                </li>

                <li  className={hoveredItem === 7 ? 'hovered' : ''}
              onMouseOver={() =>handleMouseOver(7)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
          </ul>
        </div>

        {/* <!-- ========================= Main ==================== --> */}
        <div className={`main${isActive ? ' active' : ''}`}>
          <div className="topbar">
            <div className="toggle" onClick={handleToggleClick}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>

            <div className="user">
              
            </div>
          </div>

          {/* <!-- ================ Order Details List ================= --> */}
          <div className="details">
                     
             <div className="recentOrders">
              <div className="cardHeader">
                <h2>Lista de Usuarios</h2>
                <Link to={"/add-user"} className="btn">
                  Añadir usuario
                </Link>
              </div>

              <table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Email</th>
      <th>Acción</th>
    </tr>
  </thead>
  <tbody>
    {users.length > 0 ? (
      users.map((user,index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td >
            <button className='buttons edit'><ion-icon name="create-outline"></ion-icon></button>
            <button className='buttons trash'><ion-icon name="trash-outline"></ion-icon></button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4">No hay usuarios</td>
      </tr>
    )}
  </tbody>
</table>

            </div>
          </div>
        </div>
      </div>
  );
 }


export default Dashboard;
