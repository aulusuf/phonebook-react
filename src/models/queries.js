import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
	query {
		contacts {
			id
			name
			phone
			email
			address
		}
	}
`;
export const ADD_CONTACT = gql`
	mutation (
		$name: String!
		$phone: String!
		$email: String!
		$address: String!
	) {
		insert_contacts(
			objects: [
				{ name: $name, phone: $phone, email: $email, address: $address }
			]
		) {
			returning {
				id
				name
				phone
				email
				address
			}
		}
	}
`;

export const GET_CONTACT_BY_ID = gql`
	query ($id: Int!) {
		contacts(where: { id: { _eq: $id } }) {
			id
			name
			phone
			email
			address
		}
	}
`;
export const REMOVE_CONTACT = gql`
	mutation ($id: Int!) {
		delete_contacts_by_pk(id: $id) {
			id
		}
	}
`;

// export const EDIT_CONTACT = gql`
// 	mutation {
// 		updated_contacts_by_pk(id: $id)
// 	}
// `;
