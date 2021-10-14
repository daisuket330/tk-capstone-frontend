import React from "react";
import "./info.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Info = () => {
	return (
		<div className="info">
			<div className="info__card">
				<img src="https://media-exp1.licdn.com/dms/image/C5603AQGXmC1VUw2_QA/profile-displayphoto-shrink_100_100/0/1628275230758?e=1639612800&v=beta&t=cMeF8en3BLqnySt29DEMFKVWsZ2qVU5265MY2fePnjY" alt="" />
				<p>Developed and designed by</p>
				<h3>Treveon</h3>
				<div className="links">
					<a
						href="https://www.linkedin.com/in/treveon-edwards-fly330/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin />
					</a>
					<a
						href="https://github.com/daisuket330"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillGithub />
					</a>
					<a
						href="mailto:Fasuke322@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<SiGmail />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Info;