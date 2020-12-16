import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
	return (
		<LoaderStyle>
			<div className="bounce"></div>
			<div className="bounce"></div>
			<div className="bounce"></div>
		</LoaderStyle>
	);
};

const bounceAnimate = keyframes`
    0%,
    50% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
`;

const LoaderStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	.bounce {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #e17055;
		margin-right: 15px;
		animation: ${bounceAnimate} 0.4s infinite ease-in-out;
		&:nth-of-type(2) {
			animation-delay: 0.5s;
		}
		&:nth-of-type(3) {
			animation-delay: 0.6s;
		}
	}
`;
export default Loader;
