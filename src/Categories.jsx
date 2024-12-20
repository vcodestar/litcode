import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Card from './Card';
import { Link } from 'react-router-dom';
import Java from './languages/Java';

function Categories() {
    const { theme } = useContext(ThemeContext);
    const languages = ['C', 'Java', 'Python', 'MySQL', ];

    return (
        <div className={`app-container ${theme}`}>
            <h1>categories.</h1>
            <div className="card-wrapper">
                {languages.map((language, index) => (
                    <Link
                        key={index}
                        to={`/categories/${language}`} 
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Card name={language} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;
