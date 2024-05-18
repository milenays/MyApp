import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Sidebar from '../components/Sidebar'; // Doğru yol
import '../src/styles/globals.css'; // Doğru yol
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page',
  description: 'My Page Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextThemesProvider defaultTheme="dark" attribute="class">
          <NextUIProvider>
            <Sidebar />
            {children}
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
