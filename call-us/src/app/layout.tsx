import  '../styles/globals.css'
import { ReactNode } from 'react';

export const metadata = {
  title: 'Call Us',
  description: 'Landing page for Call Us',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
