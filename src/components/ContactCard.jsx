import React from "react";
import { Link } from "react-router-dom";

export default function ContactCard({ contact }) {
	return (
		<div className="col p-3 container">
			{console.log(contact.id)}
			<Link to={`/${contact.id}`} className="text-decoration-none">
				<div className="contact-card my-4 py-3">
					<div className="d-flex">
						<img
							alt="user"
							src="https://randomuser.me/api/portraits/men/37.jpg"
							className="rounded-circle mx-auto mb-2"
						/>
					</div>
					<div id="contact-data" className="px-4 text-center">
						<p id="contact-name" className="fs-5">
							{contact.name}
						</p>
						<p id="contact-number">{contact.phone}</p>
						<p id="contact-info">{contact.email}</p>
					</div>
				</div>
			</Link>
		</div>
	);
}
