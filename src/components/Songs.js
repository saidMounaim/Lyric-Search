import React, { useState } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import Paginate from './Paginate';
import { Link } from 'react-router-dom';

const Songs = ({ songs, loading }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const handlerPage = (page) => {
		setCurrentPage(page);
	};

	const songPerPage = 4;

	const indexOfLastSong = currentPage * songPerPage;
	const indexOfFirstSong = indexOfLastSong - songPerPage;

	const filtredSongs = songs?.slice(indexOfFirstSong, indexOfLastSong);

	const handlePopUp = () => {
		document.body.style.overflow = 'hidden';
	};

	console.log('songs', songs);

	return (
		<SongsStyle>
			<div className="grid-songs">
				{loading == true && <Loader />}
				{filtredSongs?.map((song) => (
					<div className="item" key={song.id}>
						<div className="title">{song.name}</div>
						<Link to={{ pathname: `/song/${song.id}`, state: song.lyrics }} onClick={handlePopUp}>
							<button>Get Lyrics</button>
						</Link>
					</div>
				))}
				{loading == false && songs?.length == 0 && <h1>No Song is found </h1>}
			</div>
			<Paginate
				songsLenght={songs?.length}
				handlerPage={handlerPage}
				currentPage={currentPage}
				songPerPage={songPerPage}
			/>
		</SongsStyle>
	);
};

const SongsStyle = styled.div`
	width: 1440px;
	max-width: 40%;
	margin: auto;
	.grid-songs {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
		margin-top: 50px;
		.item {
			padding: 20px 30px;
			border: 1px solid #e17055;
			border-radius: 40px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.title {
				font-size: 17px;
				font-weight: 500;
			}
			button {
				font-size: 14px;
				color: #fff;
				background: #ff7272;
				padding: 6px 12px;
				border-radius: 25px;
				cursor: pointer;
				transition: all 0.5s ease-in-out;
				&:hover {
					background-color: #e17055;
				}
			}
		}
	}
`;

export default Songs;
