import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Card(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`app-container ${theme} card`}>
            <div className="card-container">
                <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.name.toLowerCase()}/${props.name.toLowerCase()}-original.svg`} 
                    alt={props.name}
                    width="45"
                    height="45"
                />
                <h1>{props.name}</h1> {/* Capitalize first letter */}
            </div>
        </div>
    );
}

export default Card;
