import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";

class Home extends Component {
	state = {
		contactList: [],
	};
	render() {
		const { contactList } = this.state;
		return (
			<Fragment>
				<section class="container">
					<div class="my-5 text-center">
						<Link to="/new" class="btn btn-success">
							Add New Contact
						</Link>
					</div>
					<div id="search">
						<form class="col-2 mx-auto">
							<input
								type="text"
								className="rounded border-1 px-4 py-2"
								placeholder="Find Contact"
							/>
						</form>
					</div>
				</section>
				<section class="container">
					<div class="row row-cols-xl-4 row-cols-md-3 row-cols-xs-2">
						{contactList.map((contact) => {
							<ContactCard
								key={contact.id}
								name={contact.id}
								phone={contact.phone}
							/>;
						})}
						<ContactCard />
						<ContactCard />
						<ContactCard />
						<ContactCard />
						<ContactCard />
					</div>
				</section>
			</Fragment>
		);
	}
}

export default Home;
