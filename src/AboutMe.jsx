import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


function AboutMe() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`app-container ${theme}`}>
      <h1 className="about-heading">about.</h1>
      <div className="about-container">
        <p className="about-paragraph">
          Welcome to my LeetCode Blog! 🚀
          <br />
          This space is dedicated to sharing my journey of mastering coding problems, data structures, and algorithms.
          <br />
          Whether you're a beginner tackling your first LeetCode challenge or a seasoned developer sharpening your
          problem-solving skills, you'll find insightful explanations, optimized solutions, and helpful tips here.
          <br />
          I believe that solving problems is not just about finding the answer but about learning and growing through
          the process. My goal is to break down complex concepts into easy-to-understand solutions that benefit everyone
          on their coding journey.
          <br />
          For more about me, my projects, and additional content, check out my{' '}
          <a href="https://vcodestar.github.io/" target="_blank" className="about-link" rel="noopener noreferrer">
            personal website
          </a>
          . Let's grow and code together!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
