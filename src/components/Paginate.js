import React from 'react';
import styled from 'styled-components';

const Paginate = ({ songsLenght, currentPage, handlerPage, songPerPage }) => {
	const totalPages = Math.ceil(songPerPage * songsLenght);

	let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

	return (
		<>
			{songsLenght > 10 && (
				<PaginateStyle>
					<button
						disabled={currentPage == 1 && `true`}
						onClick={() => handlerPage(currentPage - 1)}
						className="prev"
					>
						Prev
					</button>
					<button
						disabled={currentPage == totalPages && `true`}
						onClick={() => handlerPage(currentPage + 1)}
						className="next"
					>
						Next
					</button>
				</PaginateStyle>
			)}
		</>
	);
};

const PaginateStyle = styled.div`
	width: 100%;
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 100px;
	.prev,
	.next {
		font-size: 15px;
		font-weight: 500;
		padding: 8px 30px;
		background: #ff7272;
		border-radius: 30px;
		color: #fff;
		cursor: pointer;
	}
`;

export default Paginate;
