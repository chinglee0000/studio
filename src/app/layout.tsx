import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Twin3 - Real Human Experience Marketplace',
  description: 'Bridging enterprise needs with real human data experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo_light.svg" type="image/svg+xml" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
