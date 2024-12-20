import React, { useContext } from 'react';
function MenuHeader(props){
    return(
        <div className="language-menu-header">
            <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.name.toLowerCase()}/${props.name.toLowerCase()}-original.svg`} 
                alt={props.name}
                width="45"
                height="45"
            />
            <h1>{props.name}</h1> 
        </div>
    );
}

export default MenuHeader;