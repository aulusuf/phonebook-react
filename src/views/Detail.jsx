import React, { Fragment } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import {
	GET_CONTACT,
	GET_CONTACT_BY_ID,
	REMOVE_CONTACT,
} from "../models/queries";
import ContactCard from "../components/ContactCard";

export default function Detail(props) {
	const history = useHistory();
	const [mutationRemoveContact] = useMutation(REMOVE_CONTACT);
	const { loading, error, data } = useQuery(GET_CONTACT_BY_ID, {
		variables: {
			id: props.match.params.id,
		},
	});

	const removeContact = (id) => {
		mutationRemoveContact({
			variables: { id },
			optimisticResponse: true,
			update: (cache) => {
				const loadContacts = cache.readQuery({ query: GET_CONTACT });
				const contact = loadContacts.contacts.filter(
					(contact) => contact.id !== id
				);
				cache.writeQuery({
					query: GET_CONTACT,
					data: { contact },
				});
			},
		});
		console.log(mutationRemoveContact(id));
		history.replace("/");
	};

	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Eror {error}</div>;
	}
	return (
		<Fragment>
			{data.contacts.map((contact) => (
				<>
					{console.log(contact.id)}
					{/* ini bisa dipecah lagi di komponen detaildata.jsx */}
					<ContactCard key={contact.id} contact={contact} />
					<Link to="/">Back to Home</Link>
					<button
						className="btn btn-danger"
						onClick={((e) => e.preventDefault(), removeContact(contact.id))}
					>
						Hapus
					</button>
				</>
			))}
		</Fragment>
	);
}
