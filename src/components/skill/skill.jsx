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
const Excel ={
    width:"95%"
}
const Python ={
    width:"85%"
}
const powerBI ={
    width:"95%"
}
const mysql = {
	width : "80%"
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
									<div className="barWrapper">
										<span className="progressText">Advance Excel</span>
										<div className="single-progress-txt">
											<div className="progress ">
											   <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="10" aria-valuemax="100" style={Excel} >
												    
											   </div>
											</div>
											<h3>95%</h3>	
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
									<div className="barWrapper">
										<span className="progressText">Python</span>
										<div className="single-progress-txt">
											<div className="progress ">
											   <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" style={Python} >
												    
											   </div>
											</div>
											<h3>85%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">Power BI</span>
										<div className="single-progress-txt">
											<div className="progress ">
											   <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={powerBI} >
												    
											   </div>
											</div>
											<h3>95%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">Mysql</span>
										<div className="single-progress-txt">
											<div className="progress ">
											   <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="10" aria-valuemax="100" style={mysql} >
												    
											   </div>
											</div>
											<h3>80%</h3>	
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
