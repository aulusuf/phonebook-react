import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand mb-0 h1">
					Phonebook
				</Link>
			</div>
		</nav>
	);
}
