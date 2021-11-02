import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function New({ newContact }) {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	console.log(name, phone, email, address);

	const handleSubmit = (event) => {
		newContact([name, phone, email, address]);
	};
	return (
		<div className="container">
			<h3 class="text-center pt-4 pb-5">New Contact</h3>
			<form
				class="needs-validation col-xl-7 col-lg-8 col-md-9 col-sm-10 mx-auto"
				onSubmit={(e) => handleSubmit(e)}
			>
				<div class="mb-3">
					<label class="form-label">Name</label>
					<input
						name="name"
						type="text"
						class="form-control"
						value={name}
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div class="mb-3">
					<label class="form-label">Phone Number</label>
					<input
						name="phone"
						type="text"
						class="form-control"
						value={phone}
						required
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div class="mb-3">
					<label class="form-label">Email</label>
					<input
						name="email"
						type="email"
						class="form-control"
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div class="mb-3">
					<label class="form-label">Address</label>
					<input
						name="address"
						type="text"
						class="form-control"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div class="d-flex justify-content-between mt-5">
					<Link to="/" id="cancel-new" class="btn btn-light px-4">
						Cancel
					</Link>
					<button class="btn btn-primary px-4" type="submit">
						Add contact
					</button>
				</div>
			</form>
		</div>
	);
}

export default New;

// export default class New extends React.Component {
// 	state = {
// 		contactForm: {},
// 	};

// 	handleChange = (event) => {
// 		let contactNew = { ...this.state.contactForm };
// 		contactNew[event.target.name] = event.target.value;
// 		this.setState(
// 			{
// 				contactForm: contactNew,
// 			},
// 			() => {
// 				console.log(this.state.contactForm);
// 			}
// 		);
// 	};

// 	async handleSubmit(event){

// 	}

// 	render() {
// 		return (
// 			<div className="container">
// 				<h3 class="text-center pt-4 pb-5">New Contact</h3>
// 				<form
// 					class="needs-validation col-xl-7 col-lg-8 col-md-9 col-sm-10 mx-auto"
// 					novalidate
// 				>
// 					<div class="mb-3">
// 						<label class="form-label">Name</label>
// 						<input
// 							name="name"
// 							type="text"
// 							class="form-control"
// 							required
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 					<div class="mb-3">
// 						<label class="form-label">Phone Number</label>
// 						<input
// 							name="phone"
// 							type="text"
// 							class="form-control"
// 							required
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 					<div class="mb-3">
// 						<label class="form-label">Email</label>
// 						<input
// 							name="email"
// 							type="email"
// 							class="form-control"
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 					<div class="mb-3">
// 						<label class="form-label">Address</label>
// 						<input
// 							name="address"
// 							type="text"
// 							class="form-control"
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 					<div class="d-flex justify-content-between mt-5">
// 						<Link to="/" id="cancel-new" class="btn btn-light px-4">
// 							Cancel
// 						</Link>
// 						<button class="btn btn-primary px-4" type="submit">
// 							Add contact
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		);
// 	}
// }