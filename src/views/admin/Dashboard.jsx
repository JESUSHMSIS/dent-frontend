import  { Component } from 'react';
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredItem: null,
      isActive: false,
    };
  }

  handleMouseOver = (index) => {
    this.setState({ hoveredItem: index });
  };

  handleToggleClick = () => {
    this.setState((prevState) => ({ isActive: !prevState.isActive }));
  };

  cerrarSesion = () => {
    window.location.href = './login_user';
  };

  render() {
    const { hoveredItem, isActive } = this.state;

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
              onMouseOver={() => this.handleMouseOver(1)}
            >
              <a href="#">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li className={hoveredItem === 2 ? 'hovered' : ''}
              onMouseOver={() => this.handleMouseOver(2)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title">Customers</span>
                    </a>
                </li>

                <li  className={hoveredItem === 3 ? 'hovered' : ''}
              onMouseOver={() => this.handleMouseOver(3)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>

                <li  className={hoveredItem === 4 ? 'hovered' : ''}
              onMouseOver={() => this.handleMouseOver(4)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

                <li className={hoveredItem === 5 ? 'hovered' : ''}
              onMouseOver={() => this.handleMouseOver(5)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>

                <li  className={hoveredItem === 6 ? 'hovered' : ''}
              onMouseOver={() => this.handleMouseOver(6)}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span className="title">Password</span>
                    </a>
                </li>

                <li  className={hoveredItem === 7 ? 'hovered' : ''}
              onMouseOver={() => this.handleMouseOver(7)}>
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
            <div className="toggle" onClick={this.handleToggleClick}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>

            <div className="user">
              <img src="assets/imgs/customer01.jpg" alt="" />
            </div>
          </div>

          {/* <!-- ======================= Cards ================== --> */}
          <div className="cardBox">
            {/* Contenido de las tarjetas aquí */}
            <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Daily Views</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Sales</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">284</div>
                        <div className="cardName">Comments</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">$7,842</div>
                        <div className="cardName">Earning</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
          </div>

          {/* <!-- ================ Order Details List ================= --> */}
          <div className="details">
            <div className="recentOrders">
              <div className="cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" className="btn">View All</a>
              </div>

              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                  </tr>
                </thead>

                <tbody>
                  {/* Contenido de las filas de datos aquí */}
                  <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- ================= New Customers ================ --> */}
            <div className="recentCustomers">
              <div className="cardHeader">
                <h2>Recent Customers</h2>
              </div>

              <table>
              <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
