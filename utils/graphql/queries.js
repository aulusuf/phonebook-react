// import { gql } from "@apollo/client";

// export const GET_TODOS = gql`
//   query {
//     todos {
//       id
//       title
//       is_completed
//     }
//   }
// `;

// export const GET_TODOS_BY_ID = gql`
//   query ($user_id: Int!) {
//     todos(where: { user_id: { _eq: $user_id } }) {
//       id
//       title
//       is_completed
//     }
//   }
// `;

// export const ADD_TODO = gql`
//   mutation ($title: String!, $user_id: Int!) {
//     insert_todos(objects: [{ title: $title, user_id: $user_id }]) {
//       returning {
//         id
//         title
//         is_completed
//       }
//     }
//   }
// `;

// export const TOGGLE_COMPLETED = gql`
//   mutation ($id: Int!, $is_completed: Boolean!) {
//     update_todos_by_pk(
//       pk_columns: { id: $id }
//       _set: { is_completed: $is_completed }
//     ) {
//       id
//     }
//   }
// `;

// export const REMOVE_TODO = gql`
//   mutation ($id: Int!) {
//     delete_todos_by_pk(id: $id) {
//       id
//     }
//   }
// `;

import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
query {
    contacts {
        first_name
        last_name
        address
        city
        phone_number
        email
        group
    }
}
`;
export const GET_CONTACT_BY_ID = gql`
    query ($id : Int!) {
        contacts (where: { id: { _eq: $id } } ) {
            first_name
            last_name
            address
            city
            phone_number
            email
            group
        }
    }
`;
export const ADD_CONTACT = gql`
	mutation ($firstName, $lastName, $phoneNumber, $email, $address, $city, $group : String!, $id: Int!) {
		insert_contacts(
			objects: [
                { first_name: $firstName, last_name: $lastName, phone_number: $phoneNumber, email: $email, address: $address, city: $city, group: $group }])
                returning {
                    id
                    first_name
                    last_name
                    phone_number
                    email
                    address
                    city
                    group
                }
	}
`;
