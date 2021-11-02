import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
	query {
		contact {
			name
			phone
		}
	}
`;
export const GET_CONTACT_BY_ID = gql`
	query {
		contact (where:{id; {_eq:$id}}){
			name
			phone
			email
			address
		}
	}
`;
export const ADD_CONTACT = gql`
	mutation {
		insert_contacts(
			objects: [
				{ name: $name, phone: $phone, email: $email, address: $address }
			]
		)
	}
`;
