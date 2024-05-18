import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Sidebar from '../components/Sidebar'; // Doğru yol
import '../src/styles/globals.css'; // Doğru yol

export const metadata = {
  title: 'My App',
  description: 'This is my app',
};

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
