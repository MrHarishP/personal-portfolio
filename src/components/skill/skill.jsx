import React from 'react'
import './skill.css'
const mystyle = {
    width:"90%" ,
}
const cssstyle={
    width :"85%"
}
const javascriptsytle ={
    width:"70%"
}
const skill = () => {
  return (
    <section id="skills" className="skills">
				<div className="skill-content">
					<div className="section-heading text-center">
						<h2>skills</h2>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="single-skill-content">
									<div className="barWrapper">
										<span className="progressText">html5</span>
										<div className="single-progress-txt">
											<div className="progress ">
												<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100"style={mystyle}>
													  
												</div>
											</div>
											<h3>90%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">css</span>
										<div className="single-progress-txt">
											<div className="progress ">
											   <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" style={cssstyle}>
												    
											   </div>
											</div>
											<h3>85%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">Javascript</span>
										<div className="single-progress-txt">
											<div className="progress ">
											   <div className="progress-bar" role="progressbar" aria-valuenow="97" aria-valuemin="10" aria-valuemax="100" style={javascriptsytle} >
												   
											   </div>
											</div>
											<h3>70%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">bootstrap</span>
										<div className="single-progress-txt">
											<div className="progress ">
											   <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={mystyle} >
												    
											   </div>
											</div>
											<h3>90%</h3>	
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="single-skill-content">
									<div className="barWrapper">
										<span className="progressText">react js</span>
										<div className="single-progress-txt">
											<div className="progress ">
												<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={mystyle}>
													
												</div>
											</div>
											<h3>90%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">github</span>
										<div className="single-progress-txt">
											<div className="progress ">
											   <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" style={cssstyle} >
												    
											   </div>
											</div>
											<h3>85%</h3>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>			
				</div>

		</section>
  )
}

export default skill
