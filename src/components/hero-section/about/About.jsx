import React from 'react'
import './about.css'
import Image  from '../image/IMG-20220912-WA0033.jpg'
// import 'font-awesome/css/font-awesome.min.css';


const About = () => {
  return (
		<section id="about" className="about">
			<div className="section-heading text-center">
				<h2>about me</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
								Dedicated UI/UX Designer with a strong academic foundation from Shri Vishwakarma Skill University, Haryana, and a current pursuit of an MBA in Business Analytics. Passionate about creating user-centric digital experiences and leveraging data-driven insights for informed design decisions..
								</h3>
								<p>
									<li>

								I am a dedicated individual with a strong academic foundation and a passion for continuous learning. Currently, I am pursuing an MBA in Business Analytics at Shri Vishwakarma Skill University, where I am immersing myself in the world of data analytics and decision-making. My journey into the world of academia began with a Bachelor's degree in B.Voc Automotive Component Manufacturing, also from Shri Vishwakarma Skill University. These academic pursuits have provided me with a solid grounding in technical and business fields.
									</li>
								<li>
								I am deeply passionate about enhancing my skill set, particularly in the realm of technology. I enjoy staying up-to-date with the latest technological advancements and often spend my time watching interviews and reading about emerging trends.
								</li>
								<li>
								Two significant strengths I bring to my academic and personal life are a strong sense of self-esteem and a positive mindset. These qualities not only bolster my academic performance but also empower me to face challenges with confidence. I firmly believe in the power of a positive outlook and its ability to turn obstacles into opportunities.
								</li>
								</p>

								
								<div className="row">
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>phone</h3>
											<p>9958654792</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>email</h3>
											<p>mrharish.work@gmail.com</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>website</h3>
											<p>www.brownsine.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src={Image} alt="profile" />
								<div className="about-list-icon">
									<ul>
										<li>
											<a href="/">
												<i  className="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
										
										<li>
											<a href="/">
												<i  className="fa fa-github" aria-hidden="true"></i>
											</a>
											
										</li>
										<li>
											<a href="/">
												<i  className="fa fa-linkedin" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="/">
												<i  className="fa fa-instagram" aria-hidden="true"></i>
											</a>
										</li>
										
										
									</ul>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default About
