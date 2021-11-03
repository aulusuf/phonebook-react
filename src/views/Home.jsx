import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import { useQuery } from "@apollo/client";
import { GET_CONTACT } from "../models/queries";

function Home() {
	const { loading, error, data } = useQuery(GET_CONTACT);
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Eror {error}</div>;
	}
	return (
		<Fragment>
			<section className="container">
				<div className="my-5 text-center">
					<Link to="/new" className="btn btn-success">
						Add New Contact
					</Link>
				</div>
				<div id="search">
					<form className="col-2 mx-auto">
						<input
							type="text"
							className="rounded border-1 px-4 py-2"
							placeholder="Find Contact"
						/>
					</form>
				</div>
			</section>
			<section className="container">
				<div className="row row-cols-xl-4 row-cols-md-3 row-cols-xs-2">
					{data.contacts.map((contact) => (
						<ContactCard key={contact.id} contact={contact} />
					))}
				</div>
			</section>
		</Fragment>
	);
}
export default Home;
