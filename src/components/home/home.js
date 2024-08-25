import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
  // Smooth scroll
  const handleScroll = (event, target) => {
    event.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  };

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      handleScroll(e, href);
    });
  });
  
    $(".navbar a[href='#Home']").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $("#home").offset().top,
        },
        1000
      );
    });

    $(".navbar a[href='#Skills']").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".skills-heading").offset().top,
        },
        1000
      );
    });

    $(".navbar a[href='#Portfolio']").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".port-heading").offset().top,
        },
        1000
      );
    });

    $(".navbar a[href='#Contact']").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".footer").offset().top,
        },
        1000
      );
    });

    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navbar = document.querySelector(".navbar");

    hamburgerMenu.addEventListener("click", () => {
      navbar.style.display = navbar.style.display === "none" ? "flex" : "none";
    });

      // Set initial color to white
  const links = document.querySelectorAll(".navbar a");
  links.forEach((link) => {
    link.style.color = "white";
  });

     // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  // Scroll event listener to change navbar text color based on section

    window.addEventListener("scroll", ()=> {
      const whiteSections = document.querySelectorAll(".white-section");
  
      let isWhiteSectionInView = false;
  
      whiteSections.forEach((section) => {
        if (isInViewport(section)) {
          isWhiteSectionInView = true;
        }
      });
  
      // Change navbar text color based on the white section's visibility
      links.forEach((link) => {
        link.style.color = isWhiteSectionInView ? "white" : "black";
      });
    });

    // Clean up the scroll event listener on component unmount
  return () => {
    window.removeEventListener("scroll", this);
  };
    
  }, []);

  return (
    <div className="main">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#Home">HOME</a>
        <a href="#Skills">SKILLS</a>
        <a href="#Portfolio">PORTFOLIO</a>
        <Link className="resume" to="/resume">
          RESUME
        </Link>
        <a href="#Contact">CONTACT</a>
      </div>

      <div className="header" id="home">
        <div className="header-left">
        <div className="bio">
          <h1>Hi 👋, my name is</h1>
          <h1 className="name">PRAMOD.</h1>
        </div>
        <h1 className="Description">
            I'm a UI/UX Designer, I Design Web and Mobile Applications, Digital
            products, I'm here to turn your dreams into focused and clear
            products.
          
        </h1>
        <div className="tools">
          <img
            src={`${process.env.PUBLIC_URL}/images/html.png`}
            alt="html"
            className="tool-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/css.png`}
            alt="css"
            className="tool-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/js.png`}
            alt="js"
            className="tool-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/reactjs.png`}
            alt="reactjs"
            className="tool-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/figma.png`}
            alt="Figma"
            className="tool-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/photoshop.png`}
            alt="Photoshop"
            className="tool-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/ai.jpg`}
            alt="adobe illustrator"
            className="tool-icon"
          />
        </div>
        </div>
        <div class="blob">
        </div>
        
        
       
        
      </div>
      <h1 className="skills-heading">SKILLS</h1>
      <div className="section-divider"></div>
      <div className="skills-container">
        <div className="lists-container">
          <div className="list-1">
            <ul>
              <li>
                <span>JavaScript</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "90%" }}></div>
                </div>
              </li>
              <li>
                <span>HTML 5</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "85%" }}></div>
                </div>
              </li>
              <li>
                <span>CSS - Cascading style sheet</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <span>React JS</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
              </li>
              <li>
                <span>UI design</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
              </li>
              <li>
                <span>UX Principles</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "65%" }}></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="list-2">
            <ul>
              <li>
                <span>Figma</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <span>Adobe Photoshop</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
              </li>
              <li>
                <span>Adobe Illustrator</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
              </li>
              <li>
                <span>Adobe XD</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "65%" }}></div>
                </div>
              </li>
              <li>
                <span>C</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "60%" }}></div>
                </div>
              </li>
              <li>
                <span>Python</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "85%" }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className="port-heading">PORTFOLIO</h1>
      <div className="work-container">
        <div className="work-item1">
          <div className="rectangle1">
            <p className="rectangle-text">Amazon Clone</p>
          </div>
          <div className="desc">
            <h1 className="desc-heading">
              {" "}
              <strong>Amazon Clone UI/UX Project</strong>
            </h1>
            <p>
              I designed an Amazon clone using Figma, focusing on replicating
              and improving the user experience. The project included creating
              wireframes, high-fidelity prototypes, and interactive elements.
              Key features were intuitive navigation, a streamlined checkout
              process, and responsive design, ensuring a seamless experience
              across all devices.
            </p>
            <div className="tools">
              <img
                src={`${process.env.PUBLIC_URL}/images/figma.png`}
                alt="Figma"
                className="tool-icon"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photoshop.png`}
                alt="Photoshop"
                className="tool-icon"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/ai.jpg`}
                alt="adobe illustrator"
                className="tool-icon"
              />
            </div>
            <div className="buttons">
              <div className="github-container">
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/github-mark.png`}
                    alt="GitHub"
                    className="icon"
                  />
                  <span className="github-text">Code</span>
                </a>
              </div>
              <a
                href="https://your-live-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-button"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="work-item2">
          <div className="rectangle2">
            <p className="rectangle-text">Portfolio</p>
          </div>
          <div className="desc">
            <h1 className="desc-heading">
              {" "}
              <strong>Personal Portfolio Project</strong>
            </h1>
            <p>
              I built my own portfolio website to showcase my UI/UX design
              skills and projects. The site features a clean, user-friendly
              design, highlighting my work in an organized, visually appealing
              manner. I focused on responsive design, ensuring seamless
              navigation across devices, and integrated interactive elements to
              enhance user engagement.
            </p>
            <div className="tools">
              <img
                src={`${process.env.PUBLIC_URL}/images/html.png`}
                alt="html"
                className="tool-icon"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/css.png`}
                alt="css"
                className="tool-icon"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/js.png`}
                alt="js"
                className="tool-icon"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/reactjs.png`}
                alt="reactjs"
                className="tool-icon"
              />
            </div>
            <div className="buttons">
              <div className="github-container">
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/github-mark.png`}
                    alt="GitHub"
                    className="icon"
                  />
                  <span className="github-text">Code</span>
                </a>
              </div>
              <a
                href="https://your-live-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-button"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="work-item1">
          <div className="rectangle3">
            <p className="rectangle-text">Amazon Clone</p>
          </div>
          <div className="desc">
            <h1 className="desc-heading">
              {" "}
              <strong>Amazon Clone UI/UX Project</strong>
            </h1>
            <p>
              I designed an Amazon clone using Figma, focusing on replicating
              and improving the user experience. The project included creating
              wireframes, high-fidelity prototypes, and interactive elements.
              Key features were intuitive navigation, a streamlined checkout
              process, and responsive design, ensuring a seamless experience
              across all devices.
            </p>
            <div className="tools">
              <img
                src={`${process.env.PUBLIC_URL}/images/figma.png`}
                alt="Figma"
                className="tool-icon"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photoshop.png`}
                alt="Photoshop"
                className="tool-icon"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/ai.jpg`}
                alt="adobe illustrator"
                className="tool-icon"
              />
            </div>
            <div className="buttons">
              <div className="github-container">
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/github-mark.png`}
                    alt="GitHub"
                    className="icon"
                  />
                  <span className="github-text">Code</span>
                </a>
              </div>
              <a
                href="https://your-live-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-button"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
          {/* add more items here */}
      </div>
      <div className="footer" id="home">
        <h1 className="desc-footer">Thanks for stopping by my portfolio!</h1>
        <h1 className="hitme">
          Do I have your Attention? <br />
          hit me up :)
        </h1>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/pramod-pulicherla-0113b916a/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your-email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="tel:yourphonenumber">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
