import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import '@nextui-org/theme/dist/styles.css'; // NextUI stil dosyasının doğru yolu

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
