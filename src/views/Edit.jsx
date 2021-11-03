import React from "react";
import { Link } from "react-router-dom";

export default function Edit() {
	return (
		<div className="container">
			<h3 className="text-center pt-4 pb-5">Edit Contact</h3>
			<form
				className="needs-validation col-xl-7 col-lg-8 col-md-9 col-sm-10 mx-auto"
				novalidate
			>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input type="text" className="form-control" required />
				</div>
				<div className="mb-3">
					<label className="form-label">Phone Number</label>
					<input type="text" className="form-control" required />
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" />
				</div>
				<div className="mb-3">
					<label className="form-label">Address</label>
					<input type="text" className="form-control" />
				</div>
				<div className="d-flex justify-content-between mt-5">
					<Link to="/" id="cancel-new" className="btn btn-light px-4">
						Cancel
					</Link>
					<button className="btn btn-primary px-4" type="submit">
						Add contact
					</button>
				</div>
			</form>
		</div>
	);
}
