'use client';

import Image from 'next/image';

import styled from 'styled-components';

const Parent = styled.div`
	background-color: var(--grey-color);
	min-height: 100vh;

	.navbar {
		background-color: var(--white-color);
		padding: 0 50px;
	}

	.hero {
		color: var(--black-color);
		text-align: center;
		font-size: var(--heading-font-size);
		padding-top: 130px;

		display: flex;
		flex-direction: column;
		align-items: center;

		span {
			color: var(--primary-color);
		}

		.coming-soon {
			font-size: var(--normal-font-size);
			margin-top: 50px;
			background-color: var(--primary-color);
			max-width: 190px;
			color: var(--white-color);
			padding: 10px 28px;
			border-radius: 5px;
			border: 0px;
		}
	}

	.about {
		margin-top: 100px;
		padding: 0 150px;

		h2 {
			font-size: var(--subheading-font-size);
		}

		p {
			margin-top: 15px;
			font-size: var(--normal-font-size);
			line-height: 25px;
		}
	}
`;

export default function Home() {
	return (
		<>
			<Parent>
				<div className='navbar'>
					<Image
						src='/logo/logo-with-text-right.svg'
						width={190}
						height={100}
						alt='logo'
					/>
				</div>
				<div className='hero'>
					<h1 className='hero-text t-1'>
						Estimate your next <span>project</span>
					</h1>
					<h1 className='hero-text t-2'>
						with <span>confidence</span>
					</h1>
					<button className='coming-soon'>
						<p>App coming soon</p>
					</button>
				</div>
				<div className='about'>
					<h2>How does it work?</h2>
					<p>
						The app is a comprehensive tool for building maintenance
						projects. Users can create projects with specified rooms,
						subtasks like painting or plastering, and dimensions for each
						room. It allows users to add necessary materials/resources for
						each subtask including labour cost and provides an estimate of
						the total project cost.
					</p>
				</div>
			</Parent>
		</>
	);
}
