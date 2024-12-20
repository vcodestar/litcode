import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import logo from './assets/logo-black.png';
import logoBlack from './assets/logo-black.png';
import logoWhite from './assets/logo-white.png';

function Home() {
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`app-container ${theme}`}>
            <div className="hive">
                <div className="hexagon-empty"></div>
                <div className="hexagon"><i className="fa-brands fa-react"></i></div>
                <div className="hexagon"><i className="fa-solid fa-fire-flame-curved"></i></div>
                <div className="hexagon"><i className="fa-solid fa-code"></i></div>
                <div className="hexagon-empty"></div>
                <div className="hexagon-empty"></div>

            </div>

            <div class="litcode-home-logo">
                <h1>LitCode</h1>
                {/* <img src={logo} alt="Logo" /> */}
                {/* <img 
                    src={theme === 'dark' ? logoWhite : logoBlack} 
                    alt="Logo" 
                    id="logo-home" 
                /> */}
                <span>The write-ups you need to elevate</span>
            </div>
            
            <div class="reverse-hive">
                <div className="hexagon"><i className="fa-solid fa-code-fork"></i></div>
                <div className="hexagon-empty"></div>
                <div className="hexagon-empty"></div>
                <div className="hexagon"><i className="fas fa-terminal"></i></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"><i className="fas fa-database"></i></div>
                <div className="hexagon-empty"></div>

            </div>
        </div>
    );
}

export default Home;