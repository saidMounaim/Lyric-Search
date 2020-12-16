import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderStyle>
			<LogoStyle>
				<h4>LyricFinder</h4>
			</LogoStyle>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const LogoStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15px 0;
	background: #e17055;
	h4 {
		font-size: 25px;
		color: #fff;
	}
`;

export default Header;
