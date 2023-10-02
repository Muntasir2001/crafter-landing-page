import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Projexa',
	description: 'Projexa - WIP',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='shortcut icon'
					type='image/png'
					sizes='32x32'
					href='/favicon.ico'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</head>
			<body className={inter.className}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
