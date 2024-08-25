import React, { useEffect } from 'react';
import './resume.css'; // Create a CSS file for styles

const Resume = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Select the image
    const img = document.querySelector('.resume');

    // Listen for mouseover event
    const handleMouseOver = () => {
      img.style.transform = "scale(1.2)"; // Scale the image up by 1.5 times
    };

    // Listen for mouseout event
    const handleMouseOut = () => {
      img.style.transform = "scale(1)"; // Scale the image back to original size
    };

    img.addEventListener('mouseover', handleMouseOver);
    img.addEventListener('mouseout', handleMouseOut);

    // Cleanup event listeners on component unmount
    return () => {
      img.removeEventListener('mouseover', handleMouseOver);
      img.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div>
      <div className="navbar">
        <a href="/">HOME</a>
        <a href="/images/resume.png" download="MyResume.png">
          <button className="download">Download Resume</button>
        </a>
      </div>

      <div className="center-container">
        <img className="resume" src={`${process.env.PUBLIC_URL}/images/resume.png`} alt="resume" />
      </div>
    </div>
  );
};

export default Resume;