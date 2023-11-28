import React from 'react'
import './nav.css'

const Navbar = () => {
  return (
    <div className='top-area'>
      <div className='header-area'>
        <nav className='navbar navbar-default bootsnav navbar-fixed dark no-background'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle="collapse" data-target="#navbar-menu">
                <i className='fa fa-bars'></i>
              </button>
              <a className="navbar-brand" href="index.html">Portfolio</a>
            </div>
            <div className='collapse navbar-collapse menu-ui-design' id='navbar-menu'>
              <ul className='nav navbar-nav navbar-right' data-in='fadeInDown' data-out='fadeOutUp'>
                <li className="smooth-menu active"><a href="#home">Home</a></li>
                <li className='smooth-menu'><a href="#education">Education</a></li>
                <li className="smooth-menu"><a href="#skills">Skills</a></li>
                <li className="smooth-menu"><a href="#experience">Experience</a></li>
                {/* <li className="smooth-menu"><a href="#profiles">Projects</a></li> */}
                <li className="smooth-menu"><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
