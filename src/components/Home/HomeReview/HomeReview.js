import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
const labels = {
	0.5: "Useless",
	1: "Useless+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+",
};

const HomeReview = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("https://exclusive-watch-server-side.onrender.com/addReview")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div className="container">
			<h1 style={{ textAlign: "center", color: "gray" }}>
				Customers Comments and Reviews
			</h1>
			<h5 style={{ textAlign: "center", color: "#35094cb8" }}>
				Total Comments and Reviews :- {reviews.length}{" "}
			</h5>
			<br />
			{reviews?.map((review) => (
				<div
					key={review._id}
					className="row row-cols-1 row-cols-md-3 g-5   d-flex align-item-center justify-content-center"
				>
					<div className="col" style={{ padding: "10px" }}>
						<div className="card h-100">
							<div className="card-body">
								<h6 className="card-title">{review?.email}</h6>
								<small className="card-text">{review?.comments}</small>
								<Box
									sx={{
										width: 200,
										display: "flex",
										alignItems: "center",
									}}
								>
									<Rating
										name="text-feedback"
										value={review?.rating}
										readOnly
										precision={0.5}
										emptyIcon={
											<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
										}
									/>
									<Box sx={{ ml: 2 }}>{labels[5]}</Box>
								</Box>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default HomeReview;
