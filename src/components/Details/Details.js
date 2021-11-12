import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Details = () => {
	const [service, setService] = useState({});
	const { user } = useAuth();
	const { serviceId } = useParams();
	console.log(serviceId);

	const {
		register,
		handleSubmit,
		reset,
		// watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.email = user?.email;
		data.status = "pending";
		fetch("http://localhost:5000/addOrders", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(
				(result) => {
					if (result.insertedId) {
						alert("Order Added Successfully");
					}
					reset();
				}
				// console.log(result)
			);
		// console.log(data);
	};

	useEffect(() => {
		fetch(`http://localhost:5000/singleService/${serviceId}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);

	return (
		<div>
			<div className="details-container">
				<div className="row container">
					<div className="col-md-6">
						<img className="w-50" src={service.image} alt="" />
						<p>{service?.description}</p>
						<h1>{service?.name}</h1>
						<h1>$ {service?.price}</h1>
					</div>
					<div className="col-md-6">
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register("email", { required: true })}
								placeholder=" Your Delivery Address "
								defaultValue={user?.email}
								className="p-2 m-2 w-100 input-field"
							/>
							<input
								{...register("DisplayName", { required: true })}
								placeholder=" Your Delivery Address "
								defaultValue={user?.displayName}
								className="p-2 m-2 w-100 input-field"
							/>
							<input
								{...register("name")}
								placeholder="Name"
								defaultValue={service?.name}
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("description")}
								defaultValue={service?.description}
								placeholder="Description"
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("price")}
								placeholder="Price"
								defaultValue={service?.price}
								type="number"
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("address", { required: true })}
								placeholder=" Your Delivery Address "
								type="text"
								className="p-2 m-2 w-100 input-field"
							/>
							<input
								{...register("coupon")}
								placeholder="Coupon Code"
								type="number"
								className="p-2 m-2 w-100 input-field"
							/>
							<input
								{...register("phone")}
								placeholder="Your Phone Number"
								type="number"
								className="p-2 m-2 w-100 input-field"
							/>

							<select {...register("model")} className="p-2 m-2 w-100">
								<option value="premium">Premium</option>
								<option value="classic">Classic</option>
								<option value="business">Business</option>
							</select>
							<br />
							<br />

							{errors.exampleRequired && <span>This field is required</span>}

							<input
								type="submit"
								value="Order now"
								className="btn btn-info w-50"
							/>
						</form>
						<br />
						<br />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
