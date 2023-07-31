import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useAuthStore } from '../../hooks/useAuthStore';
// import Cookies from 'universal-cookie';

export const Navigation = ({menuItems})=>{

  // const cookies = new Cookies();
  const [hoveredItem, setHoveredItem] = useState(null);
  const {startLogout} = useAuthStore();
  const handleMouseClick = (index) => {
    setHoveredItem(index);
  };
  
  return(
    <div className="navigation">
      <ul>
        {
          menuItems.map((item, index) => (
            <li 
              style={{marginTop:item.title == 'Sign Out' ? '55vh' : ''}}
              key={index}
              className={hoveredItem === index ? 'hovered' : ''}
              onClick={() => handleMouseClick(index)}
            >
              {/* Usar link en ves de a */}
              
              <Link to={item.path}>
                <span className="icon">
                  <ion-icon name={item.icon}></ion-icon>
                </span>
                <span className="title">{item.title}</span>
              </Link>
            </li>


          ))
        }
        {/* <li>
        <button onClick={startLogout} style={{height:'30px' , width:'200px' , borderRadius:'10px' , marginTop:'100%' , backgroundColor:'transparent' , color:'#fff', fontSize:'15px' }}>
            <span className="icon" >log-out-outline</span>
          </button>
        </li> */}


      </ul>
    </div>

  );
}