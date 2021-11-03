import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-light text-center py-4">
			<Link to="/" id="about-us" className="text-decoration-none">
				About us
			</Link>
		</footer>
	);
}
