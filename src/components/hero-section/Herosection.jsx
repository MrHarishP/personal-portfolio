import React from 'react'
// import './Hero_section.css'
const Hero_section = () => {
  return (
   <div>
    {/* <!--welcome-hero start --> */}
		<section id="welcome-hero" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>hi <span>,</span> i am <br/>harish<br/> pandey <span>.</span> </h2>
							<p>ui/ux designer and web developer</p>
							<a href="/src/components/hero-section/Harish pandey resume.pdf" download>download resume</a>
						</div>
					</div>
				</div>
			</div>

		</section>
		{/* <!--welcome-hero end --> */}
   </div>
  )
}

export default Hero_section
