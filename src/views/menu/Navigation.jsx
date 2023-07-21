import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export const Navigation = (props)=>{

  
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseClick = (index) => {
    setHoveredItem(index);
  };


  const {menuItems} = props;
  
  return(
    <div className="navigation">
      <ul>
        {
          menuItems.map((item, index) => (
            <li
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
      </ul>
    </div>

  );
}