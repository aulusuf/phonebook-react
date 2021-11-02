import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav class="navbar navbar-dark bg-dark">
			<div class="container">
				<Link to="/" class="navbar-brand mb-0 h1">
					Phonebook
				</Link>
			</div>
		</nav>
	);
}
