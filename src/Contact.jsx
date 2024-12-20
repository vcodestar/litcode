import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';  

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h1 id="contact-header"> contact. </h1>
      <div id="contact-container">
        <h1>GET IN TOUCH</h1>
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/evangelos-chasanis-708610280/" target="_blank" rel="noopener noreferrer">
          <h4>LinkedIn</h4>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        {/* GitHub Link */}
        <a href="https://github.com/vcodestar" target="_blank" rel="noopener noreferrer">
          <h4>Github</h4>
          <i className="fa-brands fa-github"></i>
        </a>
        {/* Email Link */}
        <a href="mailto:vaggelischasanis@gmail.com">
          <h4>Email</h4>
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
