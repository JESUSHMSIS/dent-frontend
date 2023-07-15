import { Component } from 'react';
import "./Dashboard.css"
 class Dashboard extends Component {
    cerrarSesion = () => {
        window.location.href = './login_user';
    }
     
     render() {
        return (
            <div>
                 <h1 className='title'>Dashboard</h1>
                <button onClick={() => this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        );
    }
}
 export default Dashboard;