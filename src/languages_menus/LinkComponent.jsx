import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

function LinkComponent({links}) {
    const { theme } = useContext(ThemeContext);
    return(
        <div className={`app-container ${theme}`}>
            <ul className="category-menu">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path} className="category-menu-item">{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LinkComponent;