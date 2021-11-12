import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
	faPhoneVolume,
	faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<div>
			<div className="footer-container">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="left-container text-start">
								<h1>EXCLUSIVE WATCH</h1>
								<div className="icons-container d-flex text-center ">
									<div className="icon">
										<FontAwesomeIcon icon={faInstagramSquare} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faTwitterSquare} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faYoutube} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faFacebookSquare} />
									</div>
								</div>
								<p className="mt-4 text-light ">
									<small>
										*These statements have not been evaluated by the Food and
										Drug Administration. These products are not intended to
										diagnose.
									</small>
								</p>
							</div>
						</div>
						<div className="col-md-2">
							<div className="footer-menu-container">
								<ul>
									<li className="footer-menu">Home</li>
									<li className="footer-menu">Services</li>
									<li className="footer-menu">Sports</li>
									<li className="footer-menu">Contact us</li>
									<li className="footer-menu"> About us</li>
								</ul>
							</div>
						</div>
						<div className="col-md-5">
							<div className="right-footer-container">
								<h3 className="text-light">Sign up for the newsletter</h3>
								<input
									className="footer-input text-dark"
									type="text"
									placeholder="Enter Email"
								/>
								<div className="phone d-flex align-items-center justify-content-center mt-4">
									<div className="foter-phone-icon">
										<FontAwesomeIcon icon={faPhoneVolume} />
									</div>
									<div>
										<h5 className="text-light">+1 8 800 555 35 35</h5>
									</div>
								</div>
								<div className="map d-flex align-items-center justify-content-center">
									<div className="foter-phone-icon">
										<FontAwesomeIcon icon={faMapMarkedAlt} />
									</div>
									<div>
										<p className="text-light">
											160 Broadway, New York, NY 10038,
											<br /> 102 1st Avenue, New York, NY 100
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-5 text-light text-center">
						<small>
							<small>Watch © . All rights reserved asraful 2021.</small>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
