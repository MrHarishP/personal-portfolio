import React, {useState , useEffect} from 'react'
import './Hero_section.css'
const Hero_section = () => {
	const [displayedText, setDisplayedText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(200);
  
	const texts = ['Web Developer', 'Data and Business Analyst'];
	const colors = ['grey', 'yellow']; // Web Developer will be blue, Data and Business Analyst will be red
  
	useEffect(() => {
	  let timeout;
  
	  const handleTyping = () => {
		const currentText = texts[loopNum % texts.length];
		setDisplayedText(
		  isDeleting
			? currentText.substring(0, displayedText.length - 1)
			: currentText.substring(0, displayedText.length + 1)
		);
  
		// Adjust speed when deleting or typing
		setTypingSpeed(isDeleting ? 100 : 200);
  
		// When the word is fully typed
		if (!isDeleting && displayedText === currentText) {
		  timeout = setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
		}
  
		// When the word is fully deleted
		else if (isDeleting && displayedText === '') {
		  setIsDeleting(false);
		  setLoopNum(loopNum + 1);
		}
  
		timeout = setTimeout(handleTyping, typingSpeed);
	  };
  
	  timeout = setTimeout(handleTyping, typingSpeed);
  
	  // Cleanup timeout
	  return () => clearTimeout(timeout);
	}, [displayedText, isDeleting, loopNum, typingSpeed, texts]);
  return (
   <div>
    {/* <!--welcome-hero start --> */}
		<section id="welcome-hero" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>hi <span>,</span> i am<br/>harish<br/> pandey <span>.</span> </h2>
							<h1>
								<span style={{ color: colors[loopNum % texts.length] }}>
								{displayedText}
								</span>
								<span className="cursor">|</span>
							</h1>
							<a href="\Harish Pandey.pdf" download="Harish_pandey.pdf">download resume</a>
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
