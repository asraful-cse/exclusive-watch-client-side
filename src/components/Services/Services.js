import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("https://boiling-bastion-71072.herokuapp.com/allServices")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	console.log(services);
	return (
		<section id="book-ride" className="mt-5 container">
			<div>
				<h2 className="text-center fw-bolder">
					{" "}
					OUR EXCLUSIVE WATCH{" "}
					<span style={{ color: "#ff4d30" }}>OFFERS AND SERVICES</span>
				</h2>
				<p
					style={{ fontSize: "18px", color: "gray", textAlign: "justify" }}
					className="text-center"
				>
					"EXCLUSIVE" Watch was born thanks to a groundbreaking entrepreneurial
					vision shared by Boston’s E. Howard Watch and Clock Company manager,
					Florentine Ariosto Jones. The 27-year-old pioneer, <br />
					who was also a watchmaker and engineer, aspired to meld exquisite
					Swiss watchmaking precision, with America’s cutting edge technology.
					The result was something rather revolutionary. <br />
					IWC watches landed a place at the forefront of innovative watchmaking.
					Not only that, but they remained there. Florentine’s collaboration{" "}
					<br />
					with Heinrich Moser, an industrialist from Schaffhausen, brought some
					of the oldest and most respected clock <br />
					making traditions in line with the entrepreneur’s vision, and as a
					result, IWC <br />
					watches became a trusted wristwatch for generations to come.
				</p>
			</div>
			<br /> <br />
			{services.length === 0 ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<div className="row ">
					{services?.slice(0, 6)?.map((pd, index) => (
						<div className="mb-5 col-lg-4 col-sm-6  " key={pd?._id}>
							<div className="card shadow-lg w-100 h-100 text-center rounded serviceCard card_border">
								<div className="d-flex justify-content-center align-items-center h-75 p-2">
									<img
										src={pd?.image}
										className="card-img-top card_border"
										alt=""
										style={{ height: "86%", width: "75%" }}
									/>
								</div>
								<div className="card-body name">
									<h6 className="card-title">{pd?.name}</h6>
									<strong>{pd?.description}</strong>
								</div>

								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between ">
										<h5 className="text-danger fw-bold"> $ {pd?.price}</h5>
										<Link to={`/services/${pd?._id}`}>
											{" "}
											<button className="btn btn-danger">Order Now</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Services;
