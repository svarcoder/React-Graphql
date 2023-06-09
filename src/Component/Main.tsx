import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_A_POST, GET_A_POST } from "./GraphQL/Gql";

interface RocketInventory {
	id: any;
	title: string;
	body: string;
}

interface RocketInventoryData {
	post: RocketInventory;
}

interface RocketInventoryVars {
	id: any;
}

interface CreatePostProps {
	id: any;
	title: string;
	body: string;
}

interface CreatePostData {
	createPost: CreatePostProps;
}

interface Profile {
	title: string;
	body: string;
}

const Main = () => {
	// const { error, loading, data, refetch } = useQuery<
	// 	RocketInventoryData,
	// 	RocketInventoryVars
	// >(GET_A_POST, { variables: { id: 1 }, pollInterval: 5000 });

	// console.log(error);

	const [userDetails, setUserDetails] = useState<Profile>({
		title: "",
		body: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserDetails({
			...userDetails,
			[event.target.id]: event.target.value,
		});
	};

	// const CreateAPost = () => {
	// event.preventDetault();
	const [createPost, { error, data }] = useMutation<{
		createPost: CreatePostData;
	}>(CREATE_A_POST, {
		variables: {
			input: { title: userDetails.title, body: userDetails.body },
		},
	});

	console.log(data);
	console.log(error);
	// };

	return (
		<div className='App'>
			{/* {loading ? (
				<p>Loading ...</p>
			) : ( */}
			<div>
				{/* <h1>{data && data?.post.title}</h1>
					<button onClick={() => refetch({ id: 2 })}>Refetch!</button> */}
				<br />
				<input
					id='title'
					value={userDetails?.title}
					onChange={handleChange}
					placeholder='Title'
				/>
				<br />
				<input
					id='body'
					value={userDetails.body}
					onChange={handleChange}
					placeholder='Body'
				/>
				<br />
				<button onClick={() => createPost()}>Send!</button>
			</div>
			{/* )} */}
		</div>
	);
};

export default Main;
