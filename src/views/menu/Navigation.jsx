import React, {useState} from 'react';

export const Navigation = (props)=>{

  
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOver = (index) => {
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
              onMouseOver={() => handleMouseOver(index)}
            >
              {/* Usar link en ves de a */}
              <a href="#">
                <span className="icon">
                  <ion-icon name={item.icon}></ion-icon>
                </span>
                <span className="title">{item.title}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>

  );
}