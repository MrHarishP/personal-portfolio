import React, { useState, useEffect } from 'react';
import './nav.css';

const Navbar = () => {
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: 'transparent',
    transition: 'all 0.9s ease',
  });

  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll detection
  const [projectLinkColor, setProjectLinkColor] = useState('#d92cf9'); // State for "Project" link color

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100; // Adjust this threshold as needed
    const opacity = Math.min(scrollY / threshold, 1); // Calculate opacity based on scroll position

    setNavbarStyle({
      backgroundColor: `rgba(255, 255, 255, ${opacity})`, // Change to white with opacity
      transition: 'all 0.9s ease',
    });

    // Update scrolled state
    setIsScrolled(scrollY > threshold);

    // Update Project link color
    setProjectLinkColor(scrollY > threshold ? '#000' : '#d92cf9'); // Change color on scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='top-area'>
      <div className='header-area'>
        <nav className='navbar navbar-default navbar-fixed' style={navbarStyle}>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle="collapse" data-target="#navbar-menu">
                <i className='fa fa-bars'></i>
              </button>
              <a className="navbar-brand" href="/home">Portfolio</a>
            </div>
            <div className='collapse navbar-collapse menu-ui-design' id='navbar-menu'>
              <ul className='nav navbar-nav navbar-right' data-in='fadeInDown' data-out='fadeOutUp'>
                <li className="smooth-menu active">
                  <a
                    href="/project"
                    className={isScrolled ? 'scrolled' : ''}
                    style={{ backgroundColor: 'transparent', color: projectLinkColor }} // Inline style for link color
                  >
                    Project
                  </a>
                </li>
                <li className="smooth-menu active">
                  <a
                    href="/project"
                    className={isScrolled ? 'scrolled' : ''}
                    style={{ backgroundColor: 'transparent', color: projectLinkColor }} // Inline style for link color
                  >
                    Blog
                  </a>
                </li>
                
                {/* Add more navigation items here if needed */}
              </ul>
            </div>
            
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
