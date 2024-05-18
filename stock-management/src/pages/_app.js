import { NextUIProvider } from '@nextui-org/react';
import { createTheme, NextUIProvider as ThemeProvider } from '@nextui-org/react';
import '../styles/globals.css';

const darkTheme = createTheme({
  type: 'dark',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
