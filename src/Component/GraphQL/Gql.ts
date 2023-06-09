import { gql } from "@apollo/client";

export const GET_A_POST = gql`
	query GET_A_POST($id: ID!) {
		post(id: $id) {
			id
			title
			body
		}
	}
`;
export const CREATE_A_POST = gql`
	mutation ($input: CreatePostInput!) {
		createPost(input: $input) {
			id
			title
			body
		}
	}
`;
