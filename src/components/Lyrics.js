import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Lyrics = ({ props }) => {
	const history = useHistory();
	let location = useLocation();

	const songId = location.pathname.split('/')[2];

	const lyrics = location.lyrics;

	const exitLyricsHandler = (e) => {
		const elem = e.target;
		if (elem.classList.contains('shadow')) {
			document.body.style.overflow = 'initial';
			history.push('/');
		}
	};

	console.log(location);

	const fetchLyrics = async () => {
		const data = await fetch(
			`https://searchly.asuarez.dev/api/v1/similarity/by_song?song_id=${songId}`
		).then((response) => response.json());
		console.log(data);
	};

	useEffect(() => {
		fetchLyrics();
	}, [location]);

	return (
		<OverlayStyled onClick={exitLyricsHandler} className="shadow">
			<LyricsStyled>
				<div className="lyrics">
					<p>{lyrics}</p>
				</div>
			</LyricsStyled>
		</OverlayStyled>
	);
};

const OverlayStyled = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(33, 31, 31, 0.74);
	position: fixed;
	top: 0;
	left: 0;
	opacity: 1;
	z-index: 12;
	transition: all 0.7s ease-in-out;
`;

const LyricsStyled = styled.div`
	width: 50%;
	height: 55vh;
	position: fixed;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	margin: auto;
	background: #fff;
	z-index: 2;
`;

export default Lyrics;
