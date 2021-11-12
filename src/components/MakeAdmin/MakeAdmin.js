import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = (data) => {
		fetch("http://localhost:5000/makeAdmin", {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(
				(result) => {
					if (result.acknowledged) {
						alert("admin make successfully");
					}
				}
				//  console.log(documents)
			);
		// console.log(data);
	};
	return (
		<div>
			<h3 style={{ color: "#0c362ee3" }}>
				Make Admin Form -- Please Added Person Information ?
			</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className="input-field"
					name="name"
					placeholder="Admin User Name"
					type="text"
					{...register("name", { required: true })}
				/>
				<br />
				<input
					className="input-field my-3"
					name="email"
					placeholder="Type User Email"
					type="email"
					{...register("email", { required: true })}
				/>
				<br />
				<input
					className="input-field"
					name="password"
					placeholder="Your Password"
					type="password"
					{...register("password", { required: true })}
				/>
				<br />

				<input
					className="submit-btn btn btn-danger mt-3"
					type="submit"
					value="Make as Admin"
				/>
			</form>
		</div>
	);
};

export default MakeAdmin;
