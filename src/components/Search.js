import React, { useState } from 'react';
import styled from 'styled-components';
import Songs from './Songs';

const Search = () => {
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState('');
	const [songs, setSongs] = useState(null);

	const handlerSubmitSearch = async (e) => {
		e.preventDefault();
		if (query === '') {
			return false;
		}
		setLoading(true);
		const { response } = await fetch(
			`https://searchly.asuarez.dev/api/v1/song/search?query=${query}`
		).then((response) => response.json());

		setSongs(response.results);
		setLoading(false);
	};

	return (
		<>
			<JumbotronStyle>
				<h2>Search for a song ...</h2>
				<form onSubmit={handlerSubmitSearch}>
					<input
						type="texy"
						placeholder="Search ..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button>Search</button>
				</form>
			</JumbotronStyle>
			<Songs songs={songs} loading={loading} />
		</>
	);
};

const JumbotronStyle = styled.div`
	width: 100%;
	height: 60vh;
	background-image: url('https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	position: relative;
	z-index: 2;

	h2 {
		font-size: 40px;
		color: #fff;
		font-weight: 800;
		margin-bottom: 40px;
	}

	button {
		margin-top: 24px;
		width: 100%;
		padding: 10px;
		border-radius: 26px;
		background: #61b1b1;
		font-size: 15px;
		color: #fff;
		background: #e17055;
		transition: all 0.5s ease-in-out;
		cursor: pointer;
		&:hover {
			background: #a74932;
		}
	}

	input {
		width: 100%;
		padding: 13px;
		color: #000;
		background: white;
		border-radius: 20px;
		font-size: 16px;
		font-family: 'Raleway', sans-serif;
		&::placeholder {
			color: #000;
			font-family: 'Raleway', sans-serif;
			font-weight: 500;
		}
	}

	&:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #000;
		opacity: 0.5;
		z-index: -1;
	}
`;

export default Search;
