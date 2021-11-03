import React from "react";
import { Link } from "react-router-dom";

export default function Edit() {
	return (
		<div className="container">
			<h3 class="text-center pt-4 pb-5">Edit Contact</h3>
			<form
				class="needs-validation col-xl-7 col-lg-8 col-md-9 col-sm-10 mx-auto"
				novalidate
			>
				<div class="mb-3">
					<label class="form-label">Name</label>
					<input type="text" class="form-control" required />
				</div>
				<div class="mb-3">
					<label class="form-label">Phone Number</label>
					<input type="text" class="form-control" required />
				</div>
				<div class="mb-3">
					<label class="form-label">Email</label>
					<input type="email" class="form-control" />
				</div>
				<div class="mb-3">
					<label class="form-label">Address</label>
					<input type="text" class="form-control" />
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
