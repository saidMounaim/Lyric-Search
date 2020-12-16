import React from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../components/Search';
import Lyrics from '../components/Lyrics';

const HomePage = (props) => {
	const location = useLocation();
	const songId = location.pathname.split('/')[2];

	return (
		<>
			{songId && <Lyrics />}

			<Search />
		</>
	);
};

export default HomePage;
