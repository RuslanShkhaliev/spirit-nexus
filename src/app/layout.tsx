import { QueryProvider } from '@lib/react-query';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import './styles/main.scss';

export const metadata: Metadata = {
	title: 'Spirit Nexus',
	description: 'Real-time Anomaly Monitoring',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<QueryProvider>
					{children}
					<Toaster />
				</QueryProvider>
			</body>
		</html>
	);
}
