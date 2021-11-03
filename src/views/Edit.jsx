import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_CONTACT, GET_CONTACT } from "../models/queries";

// const updateContacts = (cache, { data }) => {
// 	const contactList = cache.readQuery({ query: GET_CONTACT });

// 	const newContact = data.insert_contacts;
// 	cache.writeQuery({
// 		query: GET_CONTACT,
// 		data: { contacts: [...contactList.contacts, newContact] },
// 	});
// };

function Edit(props) {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	console.log(name, phone, email, address);
	const [doneLoading, setDoneLoading] = useState(false);
	const [addContact] = useMutation(ADD_CONTACT);
	const history = useHistory();

	const handleSubmit = async () => {
		setDoneLoading(true);
		addContact({ variables: { name, phone, email, address } });
		setName("");
		setPhone("");
		setEmail("");
		setAddress("");
		setDoneLoading(false);
		history.replace("/");
		// event.preventDefault();
	};
	return (
		<div className="container">
			<h3 className="text-center pt-4 pb-5">New Contact</h3>
			<form
				className="needs-validation col-xl-7 col-lg-8 col-md-9 col-sm-10 mx-auto"
				onSubmit={(e) => handleSubmit(e)}
			>
				<div class="mb-3">
					<label className="form-label">Name</label>
					<input
						name="name"
						type="text"
						className="form-control"
						value={name}
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Phone Number</label>
					<input
						name="phone"
						type="text"
						className="form-control"
						value={phone}
						required
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input
						name="email"
						type="email"
						className="form-control"
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Address</label>
					<input
						name="address"
						type="text"
						className="form-control"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div className="d-flex justify-content-between mt-5">
					<Link to="/" id="cancel-new" className="btn btn-light px-4">
						Cancel
					</Link>
					<button
						className="btn btn-primary px-4"
						type="button"
						onClick={handleSubmit}
						disabled={doneLoading}
					>
						{doneLoading ? "Wait" : "Add New"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default New;
