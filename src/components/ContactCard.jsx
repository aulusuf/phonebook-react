import React from "react";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
	return (
		<div class="col p-3 ">
			<Link to="/" className="text-decoration-none">
				<div id="contact-card" class="my-4 py-3">
					<div class="d-flex">
						<img
							alt="user"
							src="https://randomuser.me/api/portraits/men/37.jpg"
							className="rounded-circle mx-auto mb-2"
						/>
					</div>
					<div id="contact-data" class="px-4 text-center">
						{/* <p id="contact-name">{props.name}</p> */}
						<p id="contact-name" className="fs-5">
							Muhammad Yusuf Auliya
						</p>
						{/* <p id="contact-number">{props.phone}</p> */}
						<p id="contact-info">0849213087</p>
						{/* <p id="contact-info">{props.email}</p> */}
						<p id="contact-info">yusuf@mail.id</p>
					</div>
				</div>
			</Link>
		</div>
	);
}
